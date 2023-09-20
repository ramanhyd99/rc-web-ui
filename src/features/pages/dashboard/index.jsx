import { connect } from "react-redux";
import AccountNav from "../../account-nav";
import SEO from "../../seo";
import UnauthorizedPage from "../unauthorized";
import OverviewComponent from "./OverviewComponent";

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
                  <OverviewComponent />
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
