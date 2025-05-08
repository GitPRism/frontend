type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

function Input({ type, placeholder, value, onChange, className }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input input-bordered ${className}`}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
