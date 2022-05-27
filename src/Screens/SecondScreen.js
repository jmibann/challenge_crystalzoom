import React from 'react'

import { Button, ItemList, Title } from '../components'
import { getDifferenceInDays, createBookingList } from '../helper';

const SecondScreen = ({bookingData, goBack}) => {
  const {startDate, endDate} = bookingData;

  const listLength = getDifferenceInDays(startDate, endDate);
  const bookings = createBookingList(listLength, bookingData);

  return(
    <div className="flex flex-col w-full justify-start items-center">
      <Title>Bookings to be Confirmed</Title>
      
      <div className="flex flex-col w-2/3 divide-y-2 divide-gray-200 border-2 mb-4">
        {
          bookings?.map((booking, idx) => 
            <ItemList key={`${idx}-${booking.date}`} booking={booking}/>
          )
        }
      </div>

      <div className="flex w-1/2 justify-center">
        <Button onClick={goBack} isSolid>Go back</Button>
      </div>
    </div>
  );
}

export default SecondScreen