import SEO from "../../seo";

const PageNotFound = () => {
  return (
    <div className="">
      <SEO title="404" />
      <div className="flex justify-center items-center h-screen">
        <img
          src={
            require("../../../assets/backgrounds/page_not_found.svg").default
          }
          alt="page not found"
          className="w-full max-w-screen-sm"
        />
      </div>
    </div>
  );
};

export default PageNotFound;
