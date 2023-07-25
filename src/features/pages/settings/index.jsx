import { connect } from "react-redux";
import AccountNav from "../../account-nav";
import PageTitle from "../../common/PageTitle";
import SEO from "../../seo";
import UnauthorizedPage from "../unauthorized";

const SettingsPage = ({ userInfo }) => {
  return (
    <>
      <AccountNav>
        {userInfo && userInfo.role === "admin" ? (
          <div className="bg-white">
            <SEO title="Settings" />
            <div>
              <PageTitle text="Under Development" />
              {/* <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              </main> */}
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
