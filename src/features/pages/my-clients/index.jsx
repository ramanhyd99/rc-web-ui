import { connect } from "react-redux";
import AccountNav from "../../account-nav";
import LoggedInPageHeader from "../../common/layout/LoggedInPageHeader";
import SEO from "../../seo";
import UnauthorizedPage from "../unauthorized";
import ClientsTable from "./ClientsTable";

const MyClients = ({ userInfo }) => {
  return (
    <>
      <AccountNav>
        {userInfo && userInfo.role === "admin" ? (
          <div className="">
            <SEO title="My Clients" />
            <div>
              <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <LoggedInPageHeader title=" My Clients" />
                <ClientsTable />
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

export default connect(mapStateToProps)(MyClients);
