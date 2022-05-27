import React, { Fragment } from 'react';
import DatePicker from "react-datepicker";

const TimeRangePicker = ({startTime, endTime, setStartTime, setEndTime}) => {
  return(
    <Fragment>
      <div className="flex flex-row w-1/2 justify-start">
      <DatePicker
        selected={startTime}
        onChange={time => setStartTime(time)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
    </div>

    <div className="flex flex-row w-1/2 justify-end">
      <DatePicker
        selected={endTime}
        onChange={time => setEndTime(time)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
    </div>
  </Fragment>
)
}

export default TimeRangePicker