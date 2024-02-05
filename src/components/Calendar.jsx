import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Slots from '../components/Slots';
import {getBookedSlots} from '../controllers/payload';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState([]);
  useEffect(()=>{
      console.log(new Date().getDate());
      getBookedSlots({payloadId: from.payloadId, startTime: `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}T00:00:00Z`, endTime: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}T23:59:59Z`}).then((resp)=>{
      setBookedSlots(resp);
    })
  },[startDate])
  
  const location = useLocation();
  const { from } = location.state;
  const [slots, showSlots] = useState(false);
  return <>
    <div class="container" className='center-div'>
      <div class="row">
          <div class="col-1"></div>
          <div class="col-4" className='left-main-div'>
              <div className='box-main-page'><p className='box-content'>SP</p></div>
              <h2 className='main-content-heading'>Space Payload Booking System</h2>
              <p>Conduct your own experiments using <br/>specific payloads of Chandrayaan-3</p>
          </div>
          <div class="col-0.7"></div>
          <div class="col-6">
              <p className='payload-select-text calendar-heading'>Select Date and Time</p>
              <p className='slots-data-text'>For {from.payName} - {} - {from.seatNum} Seats</p>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              {/* <button className='slot-button' onClick={()=>showSlots(true)}>BOOK SLOTS</button> */}
              {/* {slots && <Slots date={startDate.toLocaleDateString()}/>} */}
              <div className='all-slots'>

                {bookedSlots.map((val,ind)=>{
                  return <div className='each-slot' style={{border: "2px dotted blue", marginRight: "2vw"}}>
                    <p>ID: {val.id}</p>
                    <p>Res_ID: {val.resource_id}</p>
                    <p>Quantity: {val.quantity}</p>
                    <p>Start_time: {val.start_time}</p>
                    <p>End_time: {val.end_time}</p>
                  </div>
                })}
              </div>
          </div>
      </div>
    </div>
  </>
}

export default Calendar