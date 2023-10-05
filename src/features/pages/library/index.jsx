import PageTitle from "../../common/PageTitle";
import SEO from "../../seo";
import LibraryTable from "./LibraryTable";

const Library = () => {
  return (
    <div>
      <SEO title="Library" />
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <PageTitle text="Library (coming soon)" className="mb-0 sm:font-md" />
          <div>
            <div className="flex justify-center items-center mb-4 font-quicksand text-pink-200">Download from a collection of <span className="text-2xl px-2 font-bold highlight highlight-blue-50 highlight-spread-xs highlight-variant-5">100+</span> mental health resources</div>
            <LibraryTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Library;
