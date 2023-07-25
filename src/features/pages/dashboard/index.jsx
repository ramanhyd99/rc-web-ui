import { connect } from "react-redux";
import AccountNav from "../../account-nav";
import SEO from "../../seo";
import UnauthorizedPage from "../unauthorized";
import BarChartComponent from "./BarChartComponent";
import OverviewComponent from "./OverviewComponent";

const data = [
  {
    month: "August",
    value: 5,
  },
  {
    month: "September",
    value: 6,
  },
  {
    month: "October",
    value: 9,
  },
  {
    month: "November",
    value: 10,
  },
  {
    month: "September",
    value: 6,
  },
];

const products = [
  {
    title: null,
    comp: <OverviewComponent />,
  },
  {
    title: "Number of sessions",
    comp: <BarChartComponent data={data} />,
  },
];

const Dashboard = ({ userInfo }) => {
  return (
    <>
      <AccountNav>
        {userInfo && userInfo.role === "admin" ? (
          <div className="">
            <SEO title="Admin dashboard" />
            <div>
              <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <div className="bg-white">
                  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
                      {products.map((product) => (
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden text-center rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7">
                          <h2 className="mb-2 text-gray-500">
                            {product.title}
                          </h2>
                          {/* <BarChartComponent data={data} /> */}
                          {product.comp}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        ) : (
          <UnauthorizedPage />
        )}
      </AccountNav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.persistedReducer.user.userInfo,
  };
};

export default connect(mapStateToProps)(Dashboard);
