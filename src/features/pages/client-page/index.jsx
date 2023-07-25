import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import UnauthorizedPage from "../unauthorized";
import ClientInfo from "./ClientInfo";

const ClientPage = ({ userInfo }) => {
  return (
    <>
      {userInfo ? (
        <>
          {userInfo.role === "admin" ? (
            <div>
              <ClientInfo />
            </div>
          ) : (
            <UnauthorizedPage />
          )}
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.persistedReducer.user.userInfo,
  };
};

export default connect(mapStateToProps)(ClientPage);
