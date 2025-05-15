import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PortfolioTitleForm from "./PortfolioTitleForm";
import PortfolioContent from "@/components/common/portfolio/PortfolioContent";
import RegisterBtn from "./RegisterBtn";
import { usePortfolioData } from "@/hooks/portfolio/usePortfolioData";
import { GridLoader } from "react-spinners";

function PortfolioEditor() {
  const [searchParams] = useSearchParams();

  const repoList = searchParams.get("repos")?.split(",") ?? [];
  console.log(repoList);
  const { data, isLoading } = usePortfolioData(repoList as string[]);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

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
    <div className="max-w-3xl mx-auto text-black mt-6">
      <PortfolioTitleForm title={title} onTitleChange={setTitle} />

      <div className="bg-white">
        {data?.data.map((portfolio: any) => (
          <div key={portfolio.id}>
            <PortfolioContent
              title={portfolio.title}
              description={portfolio.description}
            />
            <div className="border-b border-gray-200"></div>
          </div>
        ))}
      </div>

      <RegisterBtn
        repoId={data?.combinedPortfolioId}
        onSuccess={() => navigate("/home")}
      />
    </div>
  );
}

export default PortfolioEditor;
