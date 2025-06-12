interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
  bgColor?: string;
  textColor?: string;
  rounded?: string;
}

function Button({
  children,
  onClick,
  type = "button",
  bgColor = "section-bg",
  textColor = "text-white",
  rounded = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${bgColor} ${textColor} ${rounded} border-none`}
    >
      {children}
    </button>
  );
}

export default Button;
