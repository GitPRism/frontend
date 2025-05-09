import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PortfolioTitleForm from "./PortfolioTitleForm";
import PortfolioContent from "@/components/common/portfolio/PortfolioContent";
import RegisterBtn from "./RegisterBtn";
import { usePortfolioData } from "@/hooks/portfolio/usePortfolioData";

function PortfolioEditor() {
  const { repoId } = useParams();
  const { data, isLoading } = usePortfolioData(repoId as string);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-3xl mx-auto text-black mt-6">
      <PortfolioTitleForm title={title} onTitleChange={setTitle} />

      <PortfolioContent
        title={data?.data.title}
        description={data?.data.description}
      />

      <RegisterBtn
        repoId={repoId as string}
        onSuccess={() => navigate("/home")}
      />
    </div>
  );
}

export default PortfolioEditor;
