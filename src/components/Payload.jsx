import React, { useEffect, useState } from 'react'
import { get_payloads, get_durations } from '../controllers/payload';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 530,
  bgcolor: 'background.paper',
  border: 0,
  boxShadow: 24,
  p: 4,
  outline: 0,
};

const Payload = () => {
  const [payloadData, setPayloadData]= useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => {setOpen(false); setButtonOpen(false);}
  const [payName, setPayName] = useState("");
  const [durations, setDurations] = useState([]);
  const [buttonOpen, setButtonOpen] = useState(false);
  const [durValue, setDurValue] = useState(0);
  const [open2, setOpen2] = useState(false);
  const [seatNum, setSeatNum] = useState(0);
  const [seatButton, setSeatButton] = useState(false);
  const [payloadId, setPayLoadId] = useState(0);

  useEffect(()=>{
    get_payloads().then((resp)=>{
      setPayloadData(resp);
    })
    get_durations().then((resp)=>{
      setDurations(resp);
    })
  },[])
  // console.log(payloadData);
  return <>
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <CloseIcon onClick={()=>{setOpen(false); setSeatButton(false); setButtonOpen(false)}}/>
      <h1 className='duration-heading'>Select Duration</h1>
      <p className='duration-text'>For {payName}</p>
      <div className='duration-box'>
      {durations.map((val,ind)=>{
        return <div className='duration-button' onClick={()=>{setButtonOpen(true); setDurValue(val.seconds/60)}}>{val.seconds/60} MINUTES</div>
      })}
      </div>
      <div className='circles'>
        <div className='color-div circle-div'></div>
        <div className='non-color-div circle-div'></div>
      </div>
      {buttonOpen && <button className='duration-next-button' onClick={()=>setOpen2(true)}>NEXT</button>}
    </Box>
  </Modal>

  <Modal
    open={open2}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <h1>Select number of seat(s)</h1>
      <p>For {payName} - {durValue} mins</p>
      <div className='seat-icon'><EventSeatIcon/></div>
      <div className='seat-row'>
        <div className='seat' onClick={()=>{setSeatNum(1); setSeatButton(true)}}>1</div>
        <div className='seat' onClick={()=>{setSeatNum(2); setSeatButton(true)}}>2</div>
        <div className='seat' onClick={()=>{setSeatNum(3); setSeatButton(true)}}>3</div>
        <div className='seat' onClick={()=>{setSeatNum(4); setSeatButton(true)}}>4</div>
        <div className='seat' onClick={()=>{setSeatNum(5); setSeatButton(true)}}>5</div>
        <div className='seat' onClick={()=>{setSeatNum(6); setSeatButton(true)}}>6</div>
        <div className='seat' onClick={()=>{setSeatNum(7); setSeatButton(true)}}>7</div>
        <div className='seat' onClick={()=>{setSeatNum(8); setSeatButton(true)}}>8</div>
        <div className='seat' onClick={()=>{setSeatNum(9); setSeatButton(true)}}>9</div>
        <div className='seat' onClick={()=>{setSeatNum(10); setSeatButton(true)}}>10</div>
      </div>
      <div className='seat-row lower-row'>
        <div className='seat' onClick={()=>{setSeatNum(11); setSeatButton(true)}}>11</div>
        <div className='seat' onClick={()=>{setSeatNum(12); setSeatButton(true)}}>12</div>
        <div className='seat' onClick={()=>{setSeatNum(13); setSeatButton(true)}}>13</div>
        <div className='seat' onClick={()=>{setSeatNum(14); setSeatButton(true)}}>14</div>
        <div className='seat' onClick={()=>{setSeatNum(15); setSeatButton(true)}}>15</div>
        <div className='seat' onClick={()=>{setSeatNum(16); setSeatButton(true)}}>16</div>
        <div className='seat' onClick={()=>{setSeatNum(17); setSeatButton(true)}}>17</div>
        <div className='seat' onClick={()=>{setSeatNum(18); setSeatButton(true)}}>18</div>
        <div className='seat' onClick={()=>{setSeatNum(19); setSeatButton(true)}}>19</div>
        <div className='seat' onClick={()=>{setSeatNum(20); setSeatButton(true)}}>20</div>
      </div>
      <div className='circles'>
        <div className='non-color-div circle-div'></div>
        <div className='circle-div color-div'></div>
      </div>
      <div className='seat-buttons'>
        <button className='seat-cancel' onClick={()=>{setOpen(false); setOpen2(false); setSeatButton(false); setButtonOpen(false); }}>CANCEL</button>
        {seatButton && <Link to="/calendar" state={{ from: {payName, durValue, seatNum, payloadId} }}><button className='seat-next'>CONFIRM</button></Link>}
      </div>
    </Box>
  </Modal>
  
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
                <p className='payload-select-text'>Select Appointment Type</p>
                
                {payloadData.map((val, ind)=>{
                  return <div className='payload-item'>
                    <div className='payload-logo'>{val.name[0]}</div>
                    <div className='payload-name'><p>{val.name}</p></div>
                    <div className='payload-button'><button type="button" class="btn btn-outline-primary" onClick={()=>{setOpen(true); setPayName(val.name); setPayLoadId(val.id)}}>SELECT</button></div>
                  </div>
                })}
            </div>
        </div>
    </div>
  </>
}

export default Payload