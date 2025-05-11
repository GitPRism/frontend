import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PortfolioTitleForm from "./PortfolioTitleForm";
import PortfolioContent from "@/components/common/portfolio/PortfolioContent";
import RegisterBtn from "./RegisterBtn";
import { usePortfolioData } from "@/hooks/portfolio/usePortfolioData";

function PortfolioEditor() {
  const [searchParams] = useSearchParams();

  const repoList = searchParams.get("repos")?.split(",") ?? [];
  console.log(repoList);
  const { data, isLoading } = usePortfolioData(repoList as string[]);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  if (isLoading) {
    return <div>Loading...</div>;
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
