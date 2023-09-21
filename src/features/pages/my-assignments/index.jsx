import { connect } from "react-redux";
import AccountNav from "../../account-nav";
import LoggedInPageHeader from "../../common/layout/LoggedInPageHeader";
import SEO from "../../seo";
import AssignmentsTable from "./MyAssignmentsTable";
import UploadAssignment from "./UploadAssigment";

const MyAssignments = ({ userInfo }) => {
  return (
    <AccountNav>
      {userInfo && (
        <div className="">
          <SEO title="My Assignments" />
          <div>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <LoggedInPageHeader
                title="My Assignments"
                className="border-b border-gray-200"
              />
              <AssignmentsTable userId={userInfo.id} />
              <UploadAssignment userId={userInfo.id} />
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

export default connect(mapStateToProps)(MyAssignments);
