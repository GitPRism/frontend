interface TextBoxProps {
  title: string;
  content: string;
}

function TextBox({ title, content }: TextBoxProps) {
  return (
    <div className="w-full border-2 border-[#404040] rounded-lg ">
      <div className="text-lg font-semibold text-white border-b-2 border-[#404040] p-1">
        <p className="p-2">{title}</p>
      </div>
      <p className="text-base text-gray-400 p-2">{content}</p>
    </div>
  );
}

export default TextBox;
