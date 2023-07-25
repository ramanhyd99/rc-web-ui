import {
  ClipboardDocumentCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const OverviewComponent = () => {
  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 w-3/4 md:w-1/2">
          <div className="">
            <div className="flex justify-between p-4">
              <div className="text-white text-xl">Total Clients</div>
              <div className="text-white text-2xl rounded-full bg-white">
                <UsersIcon className="h-12 p-2 w-auto text-black " />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-4xl p-2 text-white">20</div>
              {/* <div className="text-sm p-2 text-white">+3 this month</div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg bg-gradient-to-tr from-green-600 to-green-400 w-3/4 md:w-1/2">
          <div className="">
            <div className="flex justify-between p-4">
              <div className="text-white text-xl">Total Sessions</div>
              <div className="text-white text-2xl rounded-full bg-white">
                <ClipboardDocumentCheckIcon className="h-12 p-2 w-auto text-black " />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-4xl p-2 text-white">50</div>
              {/* <div className="text-sm p-2 text-white">+3 this month</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewComponent;
