type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  bgColor?: "section-bg";
  textColor?: "white" | "button-text";
};

function Button({
  children,
  onClick,
  type = "button",
  bgColor = "section-bg",
  textColor = "white",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn bg-${bgColor} text-${textColor} `}
    >
      {children}
    </button>
  );
}

export default Button;
