import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAssignmentsApiCall } from "../../../apis/assignments";
import AccountNav from "../../account-nav";
import LoggedInPageHeader from "../../common/layout/LoggedInPageHeader";
import SEO from "../../seo";
import AssignmentsTable from "./AssignmentsTable";
import DeleteAssignmentModal from "./DeleteAssignmentModal";
import UploadAssignment from "./UploadAssigment";

const data = [
  {
    assignment_id: "1",
    name: "raman_sharma.pdf",
    size: 2.4,
    link: "https://jira.oracledatacloud.com/browse/HELP-203417",
    uploaded_date: "20/06/2023",
  },
  {
    assignment_id: "2",
    name: "raman_sharma2.pdf",
    size: 1.8,
    link: "https://jira.oracledatacloud.com/browse/HELP-203415",
    uploaded_date: "18/06/2023",
  },
];

const MyAssignments = ({ userInfo }) => {
  return (
    <AccountNav>
      {userInfo && (
        <div className="">
          <SEO title="My Assignments" />
          <div>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <LoggedInPageHeader title="My Assignments" className="border-b border-gray-200"/>
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
