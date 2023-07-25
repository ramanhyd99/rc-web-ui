import PageTitle from "../../common/PageTitle";
import SEO from "../../seo";
import LibraryTable from "./LibraryTable";

const Library = () => {
  return (
    <div className="">
      <SEO title="Library" />
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <PageTitle text="Library" className="mb-4 sm:font-md" />
          <div>
            <LibraryTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Library;
