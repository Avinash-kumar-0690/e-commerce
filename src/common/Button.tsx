type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

const Button = ({ label, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
