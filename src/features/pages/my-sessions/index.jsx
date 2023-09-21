import { connect } from "react-redux";
import AccountNav from "../../account-nav";
import LoggedInPageHeader from "../../common/layout/LoggedInPageHeader";
import SEO from "../../seo";
import BookingsTable from "./MySessionsTable";

const MySessions = ({ userInfo }) => {
  return (
    <AccountNav>
      {userInfo && (
        <div className="bg-white">
          <SEO title="My Sessions" />
          <div>
            <main className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
              <LoggedInPageHeader title="My Sessions" />
              <BookingsTable userId={userInfo.id}/>
            </main>
          </div>
        </div>
      )}
    </AccountNav>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.persistedReducer.user.userInfo,
  };
};

export default connect(mapStateToProps)(MySessions);
