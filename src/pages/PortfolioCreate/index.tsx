import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PortfolioTitleForm from "@/components/common/portfolio/PortfolioTitleForm";
import EditPortfolioContent from "@/components/common/portfolio/EditPortfolioContent";
import RegisterBtn from "@/components/common/portfolio/RegisterBtn";
import { usePortfolioData } from "@/hooks/portfolio/usePortfolioData";
import { GridLoader } from "react-spinners";
import { statusToggle } from "@/services/Portfolio/statusToggle";
import { useQueryClient } from "@tanstack/react-query";
import { usePortfolioIdStore } from "@/store/usePortfolioIdStore";

function PortfolioCreate() {
  const [searchParams] = useSearchParams();
  const repoList = searchParams.get("repos")?.split(",") ?? [];
  const { data, isLoading } = usePortfolioData(repoList as string[]);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setPortfolioIdStore } = usePortfolioIdStore();
  const [title, setTitle] = useState<string>("제목을 입력해주세요");

  // portfolioId 저장
  useEffect(() => {
    if (data?.combinedPortfolioId) {
      setPortfolioIdStore(data.combinedPortfolioId);
    }
    if (data?.data[0]?.title) {
      setTitle(data.data[0].title);
    }
  }, [data?.combinedPortfolioId, setPortfolioIdStore, data]);

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
    // 포트폴리오 등록, 수정 페이지
    <div className="flex flex-col gap-4 max-w-3xl mx-auto text-black mt-6">
      <PortfolioTitleForm
        title={title}
        onTitleChange={(value) => {
          setTitle(value);
        }}
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
              await queryClient.refetchQueries({ queryKey: ["portfolios"] });
              await queryClient.refetchQueries({
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

export default PortfolioCreate;
