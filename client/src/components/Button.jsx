const Button = ({ title, icon }) => {
  return (
    <div className="">
      <button className="text-base h-full bg-primary justify-between items-center gap-1 rounded-r-md border-2 border-primary text-secondary px-4 flex">
        {title}
        {icon}
      </button>
    </div>
  );
};

export default Button;
