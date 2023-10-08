import {
  ArrowUpOnSquareIcon,
  CheckIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import { Spinner } from "@material-tailwind/react";
import { useGetDashboardMetricsQuery } from "../../../apis/rtk-apis";
import BarChartComponent from "./BarChartComponent";
import ReviewsTable from "./ReviewsTable";

const OverviewComponent = () => {
  const {
    data: metricsData,
    isFetching: isFetchingClients,
    isError: isClientsError,
  } = useGetDashboardMetricsQuery();

  return (
    <div className="p-12 min-h-screen flex-col space-y-8 sm:space-y-12">
          <div className="block items-center space-y-6 sm:flex justify-around border-b-2 pb-12">
        <div className="flex justify-center">
          <div className="rounded-lg bg-gradient-to-tr from-green-600 to-green-400 w-2/3 sm:w-full">
            <div>
              <div className="flex justify-between p-3 sm:p-5">
                <div className="text-white text-xl sm:pr-2">Bookings</div>
                <div className="text-white text-2xl rounded-full bg-white">
                  <CheckIcon className="h-12 p-2 w-auto text-black " />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="p-2 text-white">
                  {isFetchingClients ? (
                    <>
                      <Spinner />
                    </>
                  ) : (
                    <>
                      {isClientsError && metricsData && metricsData.data ? (
                        <>n/a</>
                      ) : (
                        <div className="flex">
                          <p className="text-4xl">
                            {metricsData?.data?.total_confirmed_bookings}
                          </p>
                          {/* {metricsData?.data?.confirmed_bookings_this_month > 0 ? (
                          <p className="!text-lg p-2 text-green-200">
                            +{metricsData?.data?.confirmed_bookings_this_month}
                          </p>
                        ) : (
                          <></>
                        )} */}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-3/4">
          {metricsData?.data ? (
            <BarChartComponent
              color="green"
              data={metricsData.data.confirmed_bookings_trend}
              name="Number of Confirmed Bookings"
            />
          ) : (
            <>n/a</>
          )}
        </div>
      </div>
      <div className="block items-center space-y-6 sm:flex justify-around border-b-2 pb-12">
        <div className="flex justify-center">
          <div className="rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 w-2/3 sm:w-full">
            <div>
              <div className="flex justify-between p-3 sm:p-5">
                <div className="text-white text-xl sm:pr-2">Clients</div>
                <div className="text-white text-2xl rounded-full bg-white">
                  <UsersIcon className="h-12 p-2 w-auto text-black " />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="p-2 text-white">
                  {isFetchingClients ? (
                    <>
                      <Spinner />
                    </>
                  ) : (
                    <>
                      {isClientsError && metricsData && metricsData.data ? (
                        <>n/a</>
                      ) : (
                        <div className="flex">
                          <p className="text-4xl">
                            {metricsData?.data?.total_clients}
                          </p>
                          {/* {metricsData?.data?.clients_this_month > 0 ? (
                          <p className="!text-lg p-2 text-green-200">
                            +{metricsData?.data?.clients_this_month}
                          </p>
                        ) : (
                          <></>
                        )} */}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-3/4">
          {metricsData?.data ? (
            <BarChartComponent
              color="#4682B4"
              data={metricsData.data.clients_trend}
              name="Number of Clients"
            />
          ) : (
            <>n/a</>
          )}
        </div>
      </div>
  
      <div className="block items-center space-y-6 sm:flex justify-around border-b-2 pb-12">
        <div className="block items-center w-full sm:flex justify-center space-y-4 sm:space-x-2">
          <div className="rounded-lg bg-gradient-to-tr from-purple-600 to-purple-400 w-full sm:w-full mt-4">
            <div>
              <div className="flex justify-between p-3 sm:p-5">
                <div className="text-white text-xl sm:pr-2">
                  Total Assignments
                </div>
                <div className="text-white text-2xl rounded-full bg-white">
                  <ArrowUpOnSquareIcon className="h-12 p-2 w-auto text-black " />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="p-2 text-white">
                  {isFetchingClients ? (
                    <>
                      <Spinner />
                    </>
                  ) : (
                    <>
                      {isClientsError && metricsData && metricsData.data ? (
                        <>n/a</>
                      ) : (
                        <div className="flex">
                          <p className="text-4xl">
                            {metricsData?.data?.total_assignments}
                          </p>
                          {metricsData?.data?.assignments_this_month !== 0 ? (
                            <p className="text-xs p-2 text-black-200">
                              (+{metricsData?.data?.assignments_this_month} this
                              month)
                            </p>
                          ) : (
                            <></>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 w-full sm:w-full">
            <div>
              <div className="flex justify-between p-3 sm:p-5">
                <div className="text-white text-xl sm:pr-2">
                  Cancelled Bookings
                </div>
                <div className="text-white text-2xl rounded-full bg-white">
                  <XMarkIcon className="h-12 p-2 w-auto text-black " />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="p-2 text-white">
                  {isFetchingClients ? (
                    <>
                      <Spinner />
                    </>
                  ) : (
                    <>
                      {isClientsError && metricsData && metricsData.data ? (
                        <>n/a</>
                      ) : (
                        <div className="flex">
                          <p className="text-4xl">
                            {metricsData?.data?.total_cancelled_bookings}
                          </p>
                          {/* {metricsData?.data?.assignments_this_month > 0 ? (
                          <p className="text-xs p-2 text-green-200">
                            +{metricsData?.data?.assignments_this_month}
                          </p>
                        ) : (
                          <></>
                        )} */}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-tr from-orange-600 to-orange-400 w-full sm:w-full">
            <div>
              <div className="flex justify-between p-3 sm:p-5">
                <div className="text-white text-xl sm:pr-2">
                  Clients Online <small>(last 12 hrs)</small>
                </div>
                <div className="border-green-300 border-4 animate-pulse rounded-full">
                  <div className="text-white text-2xl rounded-full bg-green-50">
                    <UsersIcon className="h-12 p-2 w-auto text-black " />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="p-2 text-white">
                  {isFetchingClients ? (
                    <>
                      <Spinner />
                    </>
                  ) : (
                    <>
                      {isClientsError && metricsData && metricsData.data ? (
                        <>n/a</>
                      ) : (
                        <div className="flex">
                          <p className="text-4xl">
                            {metricsData?.data?.total_clients_active_last_hour}
                          </p>
                          {/* {metricsData?.data?.total_cancelled_bookings > 0 ? (
                          <p className="text-xs p-2 text-green-200">
                            +{metricsData?.data?.total_cancelled_bookings}
                          </p>
                        ) : (
                          <></>
                        )} */}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-tr from-red-600 to-red-400 w-full sm:w-full">
            <div>
              <div className="flex justify-between p-3 sm:p-5">
                <div className="text-white text-xl sm:pr-2">Total Reviews</div>
                <div className="text-white text-2xl rounded-full bg-white">
                  <HeartIcon className="h-12 p-2 w-auto text-red-400 " />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="p-2 text-white">
                  {isFetchingClients ? (
                    <>
                      <Spinner />
                    </>
                  ) : (
                    <>
                      {isClientsError && metricsData && metricsData.data ? (
                        <>n/a</>
                      ) : (
                        <div className="flex">
                          <p className="text-4xl">
                            {metricsData?.data?.total_reviews}
                          </p>
                          {/* {metricsData?.data?.total_cancelled_bookings > 0 ? (
                          <p className="text-xs p-2 text-green-200">
                            +{metricsData?.data?.total_cancelled_bookings}
                          </p>
                        ) : (
                          <></>
                        )} */}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full sm:w-3/4">
        {metricsData?.data ?  (
          <BarChartComponent color="green" data={metricsData.data.confirmed_bookings_trend} name="Number of Assigments"/>)
          : <>n/a</>}
        </div> */}
      </div>
      <div>
        <ReviewsTable />
      </div>
    </div>
  );
};

export default OverviewComponent;
