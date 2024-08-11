const Button = ({ title, icon }) => {
  return (
    <div className="">
      <button className="text-base h-full bg-[#ff6149] justify-between items-center gap-1 rounded-r-md border-2 border-[#ff6149] text-white px-2 hover:border-[#ea5a44] hover:bg-[#ea5a44] flex">
        {title}
        {icon}
      </button>
    </div>
  );
};

export default Button;
