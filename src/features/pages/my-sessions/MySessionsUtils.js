// const { format, parse, compareAsc } = require("date-fns");
// const { utcToZonedTime, zonedTimeToUtc } = require("date-fns-tz");

// export const check_session_expiry = (slot_date, slot_start) => {
//     const [year, month, day] = slot_date.split('-');
//     const [hours, minutes, seconds] = slot_start.split(':');
  
//     // Create a UTC date
//     const sessionDateTime = new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));
  
//   // Get the current UTC time
//   const currentUtcTime = new Date().toUTCString();

//   console.log(sessionDateTime)
//   console.log(currentUtcTime)

//   // Compare sessionDateTime with the current UTC time
//   if (sessionDateTime > currentUtcTime) {
//     // Session is in the future
//     return 1;
//     return "Session is in the future";
//   } else if (sessionDateTime < currentUtcTime) {
//     // Session has already occurred
//     return -1;
//   } else {
//     // Session is happening right now
//     return 0;
//   }
// };
