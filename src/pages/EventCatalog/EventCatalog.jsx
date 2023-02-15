import React,{useState,useEffect} from 'react'
import './EventCatalog.css'

export default function EventCatalog() {
    
    const [data,setData] = useState([])
    const getData = ()=>{
        fetch('http://localhost:2882/events',{
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin':'*'
          },
          method:'get'
        }) 
        .then((obj)=>{
            console.log(obj)
            return obj.json();
        }) 
        .then((value)=>{
            setData(value);
            console.log(data)
        })     
    }

    useEffect(()=>{
        console.log(data)
        getData();
    },[])

  return (
    <>
    {/* <ANavbar/> */}
    <h3 className='text-center my-4'>Event Catalog</h3>
        <div className="card-group event-catalog">
            

        {
        data.map((events)=>{
            return(
                <div className='card'>
                    <div className="card-top-img">
                        <img src={events.logo} alt="" />
                    </div>

                   <div className="card-body">
                        <h3>
                            {events.name}
                        </h3>
                    
                        <h5>{events.venue}</h5>
                        {/* <h4>Event Date : {events.lDate}</h4> */}
                        
              
                        <div className="reg-button text-center my-2">
                        <a href={`/event-overview/${events._id}`}><button className='btn btn-info'>View</button></a>
                        </div>
                   </div>

                </div>
            )
        })
        }
        
        </div>
        
    </>
  )
}
  