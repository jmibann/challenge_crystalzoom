import React from 'react'
import DatePicker from "react-datepicker";

const RangePicker = ({startDate, endDate, onChange}) => {
    return(
      <div className="flex flex-row justify-center items-center mb-4" >
      <DatePicker
        inline
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        monthsShown={2}
        shouldCloseOnSelect={false}
        selectsRange
        disabledKeyboardNavigation
      />
    </div>
    );
}

export default RangePicker