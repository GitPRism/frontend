import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PortfolioTitleForm from "./PortfolioTitleForm";
import EditPortfolioContent from "./EditPortfolioContent";
import RegisterBtn from "./RegisterBtn";
import { usePortfolioData } from "@/hooks/portfolio/usePortfolioData";
import { GridLoader } from "react-spinners";
import { statusToggle } from "@/services/Portfolio/statusToggle";
import { useQueryClient } from "@tanstack/react-query";

function PortfolioEditor() {
  const [searchParams] = useSearchParams();

  const repoList = searchParams.get("repos")?.split(",") ?? [];
  console.log(repoList);
  const { data, isLoading } = usePortfolioData(repoList as string[]);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [title, setTitle] = useState(data?.data[0].title);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <GridLoader color="white" size={35} />
        <div className="text-2xl font-bold">깃허브 레포를 분석하고 있어요</div>
      </div>
    );
  }

  console.log(data);
  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto text-black mt-6">
      <PortfolioTitleForm
        title={title}
        onTitleChange={setTitle}
        repoId={data?.combinedPortfolioId}
      />

      <div className="bg-white">
        {data?.data.map((portfolio: any) => (
          <div key={portfolio.id}>
            <EditPortfolioContent
              titleData={portfolio.title}
              descriptionData={portfolio.description}
              repoId={portfolio.id}
            />
            <div className="border-b border-gray-200"></div>
          </div>
        ))}
      </div>

      <RegisterBtn
        onClick={() => {
          statusToggle(data?.combinedPortfolioId)
            .then(async () => {
              await queryClient.invalidateQueries({ queryKey: ["portfolios"] });
              await queryClient.invalidateQueries({
                queryKey: ["popularPortfolios"],
              });
              alert("등록되었습니다.");
              navigate("/home");
            })
            .catch((error: any) => {
              console.log(error.response.data.message);
            });
        }}
      >
        등록하기
      </RegisterBtn>
    </div>
  );
}

export default PortfolioEditor;
