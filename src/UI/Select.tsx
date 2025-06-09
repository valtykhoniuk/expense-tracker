interface Option {
  value: string;
  label: string;
}

interface Props {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  className?: string;
}

const Select = ({ value, onChange, options, className = "" }: Props) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`block w-full mb-2 p-2 border rounded
         bg-blue-100 text-blue-900  ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
