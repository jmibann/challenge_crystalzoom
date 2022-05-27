import React, { useState } from 'react'

import {
  Button,
  CheckInput,
  DateRangePicker,
  Select,
  TimeRangePicker,
  Title
} from '../components'

const FirstScreen = ({grades, setBookingData}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [grade, setGrade] = useState();

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const onClick = () => {
    setBookingData({
      grade,
      startTime,
      endTime,
      startDate,
      endDate,
    })
  };

  const onSelectChange = (e) => setGrade(e.target.value);

  return(
    <div className="flex flex-col w-full justify-start items-center bg-green-100">
      <Title> Book from Scratch </Title>

      <Select grades={grades} onChange={onSelectChange} value={grade}/>

      <div className="flex flex-row w-1/2 justify-between mb-4">
        <TimeRangePicker
          startTime={startTime}
          endTime={endTime}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
        />
      </div>

      <div className="flex flex-col w-1/2 justify-start items-center py-4">
        <CheckInput>Been before</CheckInput>
        <Button>Edit Default Settings (2 modified)</Button>
      </div>

      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
      />

      <div className="flex flex-col w-1/2 justify-start items-center py-1">
        <Button isSolid onClick={onClick}>Create Bookings</Button>
      </div>
    </div>
  );
}

export default FirstScreen