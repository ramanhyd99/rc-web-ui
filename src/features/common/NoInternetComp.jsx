const NoInternetComp = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src={require("../../assets/backgrounds/no_internet.svg").default}
        className="w-full max-w-screen-sm"
        alt="no internet"
      />
    </div>
  );
};

export default NoInternetComp;
