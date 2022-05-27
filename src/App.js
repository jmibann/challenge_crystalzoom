import React, {useState, useEffect} from 'react';
import "react-datepicker/dist/react-datepicker.css";

import {fetchGrades} from './api';
import {FirstScreen, SecondScreen} from './Screens';

function App() {
  const [grades, setGrades] = useState([]);
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    fetchGrades.then(grades => setGrades(grades));
  },[]);
  const isSecondScreen = Boolean(bookingData);
  
  const goBack = () => setBookingData(null);

  if(isSecondScreen) return <SecondScreen bookingData={bookingData} goBack={goBack}/>;
  
  return <FirstScreen grades={grades} setBookingData={setBookingData}/>
}

export default App;
