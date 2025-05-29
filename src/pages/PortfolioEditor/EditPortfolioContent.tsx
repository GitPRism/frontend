import { useState } from "react";
import AutoResizeTextarea from "./AutoResizeTextarea";
import { editPortfolioContent } from "@/services/Portfolio/editPortfolioData";

function EditPortfolioContent({
  titleData,
  descriptionData,
  repoId,
  // 각각의 레포 id가 들어오는지 확인 필요. (다중의 경우)
}: {
  titleData: string;
  descriptionData: string;
  repoId: number;
}) {
  const [description, setDescription] = useState(descriptionData);
  const [title, setTitle] = useState(titleData);
  const [isSave, setIsSave] = useState(true);

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    setIsSave(false);
  };

  const handleDescriptionChange = (newDescription: string) => {
    setDescription(newDescription);
    setIsSave(false);
  };

  const handleSave = () => {
    const res = editPortfolioContent(repoId, description);
    res.then((res) => {
      if (res.status === 200 || res.status === 201) {
        setIsSave(true);
      }
    });
  };

  return (
    <div className="bg-white p-4 mt-4 flex flex-col gap-2">
      <h1 className="text-2xl font-bold">
        <AutoResizeTextarea
          value={title}
          onChange={handleTitleChange}
          className="w-full"
        />
      </h1>
      <AutoResizeTextarea
        value={description}
        onChange={handleDescriptionChange}
        className="w-full"
      />
      <div
        className="flex justify-end text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
        onClick={() => {
          console.log("저장 클릭");
          handleSave();
        }}
      >
        {isSave ? "저장" : "수정"}
      </div>
    </div>
  );
}

export default EditPortfolioContent;
