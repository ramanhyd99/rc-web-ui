export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function prettyDate(dateString) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateString);

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const month = monthNames[monthIndex];

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
}

export function getRandomImageString(someInt) {
  if (someInt) return (someInt % 6) + 1;

  return Math.floor(Math.random() * 6) + 1;
}


export function convertTo12HourFormat(val) {
  let time = val
  let [hours] = time.split(':').map(Number);
  
  let period = '';

  if (hours === 0) {
    hours = 12;
    period = 'am';
  } else if (hours < 12) {
    period = 'am';
  } else if (hours === 12) {
    period = 'pm';
  } else {
    hours = hours - 12;
    period = 'pm';
  }

  return `${hours}${period}`;
}

export function convertTo24HourFormat(time) {
  const timeString = time.toLowerCase();
  const isPM = timeString.includes('pm');
  const isAM = timeString.includes('am');
  
  if (!isPM && !isAM) {
    return;
    //throw new Error('Invalid time format. Please provide a time in the format "3pm" or "4am".');
  }
  
  let [hours] = timeString.replace(/[^\d:]/g, '').split(':').map(Number);
  
  if (isPM && hours !== 12) {
    hours += 12;
  } else if (isAM && hours === 12) {
    hours = 0;
  }
  
  return `${String(hours).padStart(2, '0')}:${'0'.padStart(2, '0')}:${'0'.padStart(2, '0')}`;
}
