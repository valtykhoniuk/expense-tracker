interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
}: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-blue-500 text-white px-4 py-2 
        rounded w-full hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
