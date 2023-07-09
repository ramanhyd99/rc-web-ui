import { connect } from "react-redux";
import AccountNav from "../../account-nav";
import LoggedInPageHeader from "../../common/layout/LoggedInPageHeader";
import SEO from "../../seo";
import UnauthorizedPage from "../unauthorized";
import DayTypeSettings from "./DayTypeSettings";
import SettingsLayout from "./SettingsLayout";
import SlotGenerationSettings from "./SlotGenerationSettings";

const SettingsPage = ({ userInfo }) => {
  return (
    <>
      <AccountNav>
        {userInfo && userInfo.role === "admin" ? (
          <div className="bg-white">
            <SEO title="Settings" />
            <div>
              <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <LoggedInPageHeader title="Settings" className="" />
                <div className="mx-4">
                  <SettingsLayout title="Day type settings">
                    <DayTypeSettings />
                  </SettingsLayout>
                  <SettingsLayout title="Slot generation settings">
                    <SlotGenerationSettings />
                  </SettingsLayout>
                  <SettingsLayout title="Price Settings" />
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

export default connect(mapStateToProps)(SettingsPage);
