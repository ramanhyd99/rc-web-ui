import PageTitle from "../../common/PageTitle";

const PrivacyPolicy = () => {
  return (
    <div className="bg-desk  bg-cover  bg-no-repeat">
      <PageTitle text="Privacy Policy" />
      <div className="flex justify-center mt-2 ">
        <p>Last updated: July 07, 2023</p>
      </div>
      <div className="flex justify-center " style={{ border: "2px red solid" }}>
        <img
          style={{
            "border-radius": "30% 70% 70% 30% / 30% 30% 70% 70% "
          }}
          src={require("../../../assets/img/pooja.png")}
          alt="Pooja Gupta"
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
