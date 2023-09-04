import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import AccountNav from "../../account-nav";
import LoggedInPageHeader from "../../common/layout/LoggedInPageHeader";
import SEO from "../../seo";
import Checkout from "../checkout";
import PostBookingPage from "../post-booking";
import BookingComponent from "./BookingComponent";
import BookingProcessingModal from "./BookingProcessingModal";

const Booking = ({ userInfo }) => {
  const [slotData, setSlotData] = useState(null);
  const [processingSlot, setProcessingSlot] = useState(null);
  const [bookingSuccessData, setBookingSuccessData] = useState(null);
  const [isError] = useState(false);

  useEffect(() => {
    if (slotData == null) setProcessingSlot(null);
  }, [slotData]);

  return (
    <>
      {userInfo && (
        <>
          {bookingSuccessData ? (
            <PostBookingPage data={bookingSuccessData} setBookingSuccessData={setBookingSuccessData}/>
          ) : (
            <>
              {!slotData ? (
                <>
                  <AccountNav>
                    <div className="bg-white">
                      <SEO title="Book Session" />
                      <main className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-6 sm:flex">
                        {/* <LoggedInPageHeader
                      title="Book Session"
                      className="border-b border-gray-200"
                    /> */}

                        <div>
                          <BookingComponent
                            setSlotData={setSlotData}
                            isAdmin={userInfo.role === "admin"}
                          />
                        </div>
                      </main>
                    </div>
                  </AccountNav>
                </>
              ) : (
                <>
                  {processingSlot == null ? (
                    <BookingProcessingModal
                      setProcessingSlot={setProcessingSlot}
                      slotData={slotData}
                      setSlotData={setSlotData}
                    />
                  ) : (
                    <Checkout
                      slotData={slotData}
                      setSlotData={setSlotData}
                      setBookingSuccessData={setBookingSuccessData}
                    />
                  )}

                  {isError && <Navigate to="/booking" />}
                </>
              )}
            </>
          )}
        </>
      )}
      {!userInfo && <Navigate to="/login" />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.persistedReducer.user.userInfo,
  };
};

export default connect(mapStateToProps)(Booking);
