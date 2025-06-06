import Button from "@/components/common/Button";

function RegisterBtn({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <Button
        bgColor="bg-section-bg"
        textColor="text-button-text-green"
        rounded="rounded-lg"
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
}

export default RegisterBtn;
