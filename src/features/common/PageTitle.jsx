const PageTitle = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <h1
        className={`inline-block w-full text-black font-bold capitalize lg:text-6xl md:text-5xl text-4xl text-center ${className}`}
      >
        {text.split(" ").map((word, index) => (
          <span key={word + "-" + index}>{word}&nbsp;</span>
        ))}
      </h1>
    </div>  
  );
};

export default PageTitle;
