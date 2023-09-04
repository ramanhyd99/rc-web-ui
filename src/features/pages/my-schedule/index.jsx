import { connect } from "react-redux";
import AccountNav from "../../account-nav";
import LoggedInPageHeader from "../../common/layout/LoggedInPageHeader";
import SEO from "../../seo";
import UnauthorizedPage from "../unauthorized";
import SessionsListing from "./SessionsListing";

const MySchedule = ({userInfo}) => {
  return (
    <>
      <AccountNav>
        {userInfo && userInfo.role === "admin" ? (
          <div className="">
            <SEO title="My Schedule" />
            <div>
              <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <div className="bg-white">
                <LoggedInPageHeader title="My Schedule" />
                  <SessionsListing />
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
  
  export default connect(mapStateToProps)(MySchedule);