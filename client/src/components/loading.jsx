const Loading = () => {
  return (
    <div className="absolute z-50 top-0 left-0 w-screen h-screen backdrop-blur-md bg-transparent text-white flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
