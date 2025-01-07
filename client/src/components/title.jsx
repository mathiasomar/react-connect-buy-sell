const Title = ({ topText, bottomText, align = "center" }) => {
  return (
    <div
      className={`flex ${
        align == "center" ? "items-center w-1/3" : "items-start w-full"
      } justify-center flex-col mx-auto`}
    >
      <div className="bg-blue-700 text-white capitalize font-semibold px-2 rounded-lg text-sm">
        {topText}
      </div>
      <div className="text-black font-bold text-4xl text-center leading-none">
        {bottomText}
      </div>
    </div>
  );
};

export default Title;
