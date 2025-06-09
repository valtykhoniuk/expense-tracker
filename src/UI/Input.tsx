interface Props {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
}

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
}: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className={`block w-full
        mb-2 p-2 border-0
        bg-blue-100 text-blue-600 ${className}`}
    />
  );
};

export default Input;
