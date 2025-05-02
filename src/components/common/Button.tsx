interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
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
  textColor = "white",
  rounded = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${bgColor} text-${textColor} ${rounded}`}
    >
      {children}
    </button>
  );
}

export default Button;
