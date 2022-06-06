const girl1 = require('../images/girl1.jpeg');
const girl2 = require('../images/girl2.png');
 
 export const getDifferenceInDays = (date1, date2) => {
  const start = new Date(date1);
  const end = new Date(date2);
  const diffTime = Math.abs(start - end);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

  return diffDays;
 };

 const NAMES = ['Dorothy McHardy', 'Annale Clark'];
 const DAYS_NAME = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednsday',
   'Thursday',
   'Friday',
   'Saturday'
  ];
  
 const MONTH_NAME = [
   'January',
   'February',
   'March',
   'April',
   'May',
   'June',
   'July',
   'August',
   'September',
   'October',
   'November',
   'December'
  ]

 export const createBookingList = (length, bookingData) => {
  const array = new Array(length).fill(0);

   const list = array.map((item, idx) => {
    const result = new Date(bookingData.startDate);
    result.setDate(result.getDate() + idx);

    return {
      date: result,
      avatar: (idx % 2) === 0 ? girl1: girl2,
      proffessional: NAMES[(idx % 2)],
      isAvailable: Boolean(idx % 2),
      ...bookingData,
    }
   })

   return list;
 };

 const getDayName = (date) => `${DAYS_NAME[date.getDay()].slice(0,3)}`;

 const getMonthName = (date) => `${MONTH_NAME[date.getMonth()].slice(0,3)}`

 export const formatDate = (date) =>
  `${getDayName(date)} ${date.getDate()} ${getMonthName(date)} ${date.getFullYear()}`;

 const formattedTime = (time) =>
  `${time.getHours()}:${time.getMinutes() ? time.getMinutes() : '00'}`

 export const formattedRangeTime = (startTime, endTime) => 
   `${formattedTime(startTime)} - ${formattedTime(endTime)}`
 