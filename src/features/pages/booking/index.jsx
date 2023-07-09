import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import AccountNav from "../../account-nav";
import LoggedInPageHeader from "../../common/layout/LoggedInPageHeader";
import SEO from "../../seo";
import Checkout from "../checkout";
import BookingComponent from "./BookingComponent";
import BookingProcessingModal from "./BookingProcessingModal";

const Booking = ({ userInfo }) => {
  const [slotData, setSlotData] = useState(null);
  const [processingSlot, setProcessingSlot] = useState(true);

  return (
    <>
      {!slotData ? (
        <>
          <AccountNav>
            <div className="bg-white">
              <SEO title="Book Session" />
              <main className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
                <LoggedInPageHeader
                  title="Book Session"
                  className="border-b border-gray-200"
                />
                <div>
                  <BookingComponent setSlotData={setSlotData} />
                </div>
                {/* <BookingProcessingModal/> */}
              </main>
            </div>
          </AccountNav>
        </>
      ) : (
        <>
          {processingSlot ? (
            <BookingProcessingModal setProcessingSlot={setProcessingSlot} />
          ) : (
            <Checkout slotData={slotData} />
          )}
          {!userInfo && <Navigate to="/login" />}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.persistedReducer.user.userInfo,
  };
};

export default connect(mapStateToProps)(Booking);
