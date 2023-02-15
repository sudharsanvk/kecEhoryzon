import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './EventOverview.css'

export default function EventOverview() {
    const [event,setEvent] = useState([])

    const {id} = useParams();
    

    const getData = ()=>{
        fetch(`http://localhost:2882/events-overview/${id}`,{
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin':'*'
          },
          method:'get'
        }) 
        .then((obj)=>obj.json()) 
        .then((value)=>{
            setEvent(value);
        })
    }

    useEffect(()=>{
        getData();
    },[])


  return (
    <>

        {/* <Navbar /> */}

          <div className="event-detail">

            <div className="event-left">
                <div className="event-logo">
                    <img src={event.logo} alt="" />
                </div>

                <div className="event-contents">
                <h2>
                    {event.name}
                </h2>
                </div>

                <div className="event-contents">
                <h6 className='event-description'>
                    {event.desc}
                </h6>
                </div>
            </div>

            <div className="event-right">
                

                 

                <div className="event-contents">
                <h5>Venue : {event.venue}</h5>
                </div>

                <div className="event-contents">
                <h5>Event Start Date : {event.sDate}</h5>
                </div>

                <div className="event-contents">
                <h5>Event End Date : {event.eDate}</h5>
                </div>

                <div className="event-contents">
                <h5>Eligibility : {event.eligibility}</h5>
                </div>

                <div className="event-contents event-fee">
                <h5 cla>Fees : {event.amount}</h5>
                </div>

                <div className="event-contents">
                <h5>Last date of registration : {event.lastDateofRegistration}</h5>
                </div>

                

                {/* <div className="event-contents">
                <h5>Event Website : {event.website}</h5>
                </div> */}

                <div className="event-contents">
                <h5>Total number of seats : {event.noOfSeats}</h5>
                </div>

                <div className="event-contents">
                <h5>Remaining Seats : {(Number)(event.noOfSeats-event.booked)}</h5>
                </div>

                <div className="contact">
                <h4>Contact</h4>
                <div className="event-contact">
                <h5>{event.staff}</h5>
                <a href={`tel:{event.staffContact}`}> call US </a>
                </div>

                <div className="event-contact">
                <h5>{event.student}</h5>
                <a href={`tel:`+ event.studentContact}> call US </a>
                </div>

                <div className="event-contents">
                    <a href={event.url}><button className='btn btn-info'>Visit Event Website</button></a>
                </div>

                <div className="event-contents">
                    <a href={event.url}><button className='btn btn-info'>Book Tickets</button></a>
                </div> 

                </div>

            </div>
          </div>
    </>
  )
}
