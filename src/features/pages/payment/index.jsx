import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const PaymentPage = () => {
  // function loadScript(src) {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //     document.body.appendChild(script);
  //   });
  // }

  // async function displayRazorpay() {
  //   const res = await loadScript(
  //     "https://checkout.razorpay.com/v1/checkout.js"
  //   );

  //   if (!res) {
  //     alert("Razorpay SDK failed to load. Are you online?");
  //     return;
  //   }

  //   const result = await axios.post("http://localhost:3001/api/payment/orders");

  //   if (!result) {
  //     alert("Server error. Are you online?");
  //     return;
  //   }

  //   const { amount, id, currency } = result.data;

  //   const options = {
  //     key: "rzp_test_haDcqaXJTAHffW", // Enter the Key ID generated from the Dashboard
  //     amount: amount.toString(),
  //     currency: currency,
  //     name: "Random Capsule",
  //     description: "Test Transaction",
  //     //   image: { logo },
  //     order_id: id,
  //     handler: async function (response) {
  //       const data = {
  //         orderCreationId: id,
  //         razorpayPaymentId: response.razorpay_payment_id,
  //         razorpayOrderId: response.razorpay_order_id,
  //         razorpaySignature: response.razorpay_signature,
  //       };

  //       const result = await axios.post(
  //         "http://localhost:3001/api/payment/success",
  //         data
  //       );

  //       alert(result.data.msg);
  //     },
  //     prefill: {
  //       name: "Raman Sharma",
  //       email: "ramanhyd99@gmail.com",
  //       contact: "8712384274",
  //     },
  //     notes: {
  //       address: "Hyderabad",
  //     },
  //     theme: {
  //       color: "#61dafb",
  //     },
  //   };

  //   const paymentObject = new window.Razorpay(options);
  //   paymentObject.open();
  // }

  return (
    <div className="flex justify-center items-center h-screen">
      {/* <button className="App-link" onClick={displayRazorpay}>
        Pay ₹500
       
      </button> */}
      <div className="md:w-1/4 flex flex-col rounded-lg overflow-hidden bg-white shadow">
        <CheckBadgeIcon className="h-12 mt-4 text-green-500 animate-pulse-end" />
        <div className="flex-1 px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-center">
            Booking Confirmed!
          </div>
          <div className="text-center">
            <small className="font-semibold">Booking Id: </small>
            <small>
              {" "}
              <span
                className={` rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
   `}
              >
                RC-0010
              </span>
            </small>
          </div>
          <div className="mt-6">
            <div className="flex">
              <CalendarIcon className="h-7 mr-8" />
              <div className="text-gray-700">14 June 2023</div>
            </div>

            <div className="flex mt-2">
              <ClockIcon className="h-7 mr-8" />
              <div className="text-gray-700">10:00 am</div>
            </div>
          </div>
          <div>
            <div className="flex mt-2">
              <MapPinIcon className="h-7 mr-8" />
              <div className="text-gray-700 ">Video</div>
            </div>
            <div className="mt-2">
              <a
                className="text-blue-500 hover:underline"
                href="https://meet.google.com/_meet/jvw-pmtd-kpr?ijlm=1687800377618&adhoc=1&hs=187"
              >
                https://meet.google.com/_meet/jvw-pmtd-kpr?ijlm=1687800377618&adhoc=1&hs=187
              </a>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-100 flex justify-center">
          <a
            href="/my-sessions"
            className="bg-blue-600 hover:bg-blue-700 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none"
          >
            Got it!
          </a>
          <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          >
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

// import logo from './logo.svg';
// import './App.css';

// function loadScript(src) {
//   return new Promise((resolve) => {
//     const script = document.createElement('script')
//     script.src = src
//     script.onload = () => {
//       resolve(true)
//     }
//     script.onerror = () => {
//       resolve(false)
//     }
//     document.body.appendChild(script)
//   })
// }

// function App() {

// async function displayRazorpay () {

//       const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

//       if (!res){
//         alert('Razropay failed to load!!')
//         return
//       }

//       const data = await fetch('http://localhost:1769/razorpay', {method: 'POST'}).then((t) =>
//         t.json()
//       )

//     const options = {
//       "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
//       "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//       "currency": "INR",
//       "name": "Acme Corp",
//       "description": "Test Transaction",
//       "image": "https://example.com/your_logo",
//       "order_id": "order_IluGWxBm9U8zJ8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//       "callback_url":"http://localhost:1769/verify",
//       "notes": {
//           "address": "Razorpay Corporate Office"
//       },
//       "theme": {
//           "color": "#3399cc"
//       }
//   };
//   const paymentObject = new window.Razorpay(options);
//   paymentObject.open();
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <button
//         onClick={displayRazorpay}
//         >
//           Pay now
//         </button>
//       </header>
//     </div>
//   );
// }

// export default App;
