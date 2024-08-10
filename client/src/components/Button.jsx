const Button = ({ title }) => {
  return (
    <div>
      <button className="text-base py-1 bg-[#ff6149] rounded-r-md border-2 border-[#ff6149] text-white px-2 hover:border-[#ea5a44] hover:bg-[#ea5a44]">
        {title}
      </button>
    </div>
  );
};

export default Button;
