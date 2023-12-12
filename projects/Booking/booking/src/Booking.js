import React from 'react'
import Stays from './Stays';
import Flights from './Flights';
import Hotel from './Hotel';
import Attractions from './Attractions';
import Airport from './Airport';
import { Routes, Route } from 'react-router-dom';
import Data from './Data.json';


function Booking({ pin }) {
  return (
    <div>
      <Routes>
        <Route path='/Stays' element={<Stays pin={pin} />}></Route>
        <Route path='/Flights' element={<Flights />}></Route>
        <Route path='/Hotel' element={<Hotel />}></Route>
        <Route path='/Attractions' element={<Attractions />}></Route>
        <Route path='/Airport' element={<Airport />}></Route>
      </Routes>
    </div>
  )
}

export default Booking;
