const PageTitle = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <h1
        className={`p-2 highlight-spread-lg w-1/2 text-black  lg:text-5xl md:text-4xl font-quicksand flex flex-wrap justify-center text-3xl text-center ${className}`}
      >
        {text.split(" ").map((word, index) => (
          <span key={word + "-" + index}>{word}&nbsp;</span>
        ))}
      </h1>
    </div>
  );
};

export default PageTitle;
