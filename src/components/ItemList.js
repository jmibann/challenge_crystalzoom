import React from 'react';
import {IoIosArrowForward} from 'react-icons/io';

import { formatDate, formattedRangeTime } from '../helper';

const ItemList = ({booking}) => {
  const {proffessional, avatar, date, startTime, endTime, isAvailable} = booking;

  const formattedDate = formatDate(date);
  const formattedTime= formattedRangeTime(startTime, endTime);
  const availabilityTxt = isAvailable 
    ? `${proffessional} is available`
    : 'Suitable staff member will be assigned';
  const availableCls = isAvailable ? 'text-teal-600' : 'text-amber-500'

    return(
      <div className="flex flex-row w-full p-2" data-testid="item-list">
        <div className="flex items-center w-2/12">
          <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={avatar} alt={proffessional}/>
        </div>
        
        <div className="flex flex-col justify-center w-9/12 text-sm font-semibold">
          <div className="flex w-full justify-between">
            <span>{formattedDate}</span>
            <span>{formattedTime}</span>
          </div>
          <span className={availableCls}>{availabilityTxt}</span>
        </div>

        <div className="flex flex-col justify-center items-center w-1/12">
          <IoIosArrowForward className="fill-violet-600"/>
        </div>
      </div>
    );
}

export default ItemList