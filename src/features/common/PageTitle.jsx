const PageTitle = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-3 flex items-center justify-center text-center overflow-hidden">
      <h1
        className={`w-full text-black font-bold capitalize lg:text-5xl md:text-4xl flex flex-wrap justify-center text-3xl text-center ${className}`}
      >
        {text.split(" ").map((word, index) => (
          <span key={word + "-" + index}>{word}&nbsp;</span>
        ))}
      </h1>
    </div>
  );
};

export default PageTitle;
