import { useRef, useEffect } from "react";

function AutoResizeTextarea({
  value,
  onChange,
  className = "",
  placeholder = "",
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // 초기화
      textarea.style.height = `${textarea.scrollHeight}px`; // scrollHeight 만큼 높이 설정
    }
  };

  useEffect(() => {
    resizeTextarea();
  }, [value]); // value가 바뀔 때마다 resize
  // console.log(value);
  return (
    // 포트폴리오 내용 입력 폼
    <textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full resize-none overflow-hidden ${className}`}
      placeholder={placeholder}
      style={{
        lineHeight: "1.5",
        minHeight: "2.5rem",
      }}
    />
  );
}

export default AutoResizeTextarea;
