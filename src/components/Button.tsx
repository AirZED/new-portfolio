interface ButtonProps {
  content: string;
}

const Button = ({ content }: ButtonProps): JSX.Element => {
  return (
    <button className="bg-[#e5e5e5] rounded-[15px] text-base h-8 cursor-pointer font-light flex items-center justify-center border-none transition-all duration-300 ease-out hover:-translate-y-1" type="button">
      {content}
    </button>
  );
};

export default Button;
