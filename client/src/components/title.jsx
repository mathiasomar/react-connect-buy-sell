const Title = ({ topText, bottomText }) => {
  return (
    <div className="flex items-center justify-center flex-col w-1/2 mx-auto">
      <div className="bg-blue-700 text-white capitalize font-semibold px-2 rounded-lg text-base">
        {topText}
      </div>
      <div className="text-black font-bold text-5xl text-center leading-none">
        {bottomText}
      </div>
    </div>
  );
};

export default Title;
