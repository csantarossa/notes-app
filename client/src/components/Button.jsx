const Button = ({ title, icon }) => {
  return (
    <div className="">
      <button className="text-base h-full bg-[#09090B] justify-between items-center gap-1 rounded-r-md border-2 border-[#09090B] text-white px-4 hover:border-[#212126] hover:bg-[#212126] flex">
        {title}
        {icon}
      </button>
    </div>
  );
};

export default Button;
