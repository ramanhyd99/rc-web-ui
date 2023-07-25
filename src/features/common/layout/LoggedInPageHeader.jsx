const LoggedInPageHeader = (props) => {
  return (
    <div
      className={`flex flex-col items-center sm:items-baseline justify-between pb-6 pt-9 ${props.className}`}
    >
      <h1 className=" text-3xl font-bold tracking-tight text-gray-900">
        {props.title}
      </h1>
    </div>
  );
};

export default LoggedInPageHeader;
