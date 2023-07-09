import AccountNav from "../../account-nav";
import Availability from "../../availability";
import LoggedInPageHeader from "../../common/layout/LoggedInPageHeader";
import SEO from "../../seo";

const MySchedulePage = () => {
  return (
    <AccountNav>
      <div className="bg-white">
        <SEO title="Set Schedule" />
        <div>
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <LoggedInPageHeader title="Set Schedule" className="border-b border-gray-200"/>
            <Availability />
          </main>
        </div>
      </div>
    </AccountNav>
  );
};

export default MySchedulePage;
