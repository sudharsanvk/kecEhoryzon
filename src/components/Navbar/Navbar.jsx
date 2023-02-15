import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './Navbar.css'


export default function Navbar() {

  const [event,setEvent] = useState([])
  const [val,setVal] = useState()

    const {id} = useParams();
    

    const getData = ()=>{
        fetch(`http://localhost:2882/loggedin`,{
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin':'*'
          },
          method:'get'
        }) 
        .then((obj)=>obj.json()) 
        .then((value)=>{
            setEvent(value);
            console.log(value.name)
            setVal(event.status);
        })
    }

    useEffect(()=>{
        getData();
    })

  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzH7bPeL_LVAl4U7z8Z-kaeYIRSiYg0nvoNQETe4CVYu8cZRjw-qEGkhiqz9LNY8NcbaY&usqp=CAU" alt="" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/events">Events</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/addEvent">Add Events</a>
            </li>
           
        </ul>

          {
            (
              ()=>{
                if(val=="success")
                {
                  return(
                    <>
                      <p>{event.user}</p>
                      <a href="/login"><button className='btn btn-light'>Log out</button></a>
                    </>
                  ) 
                }
                else{
                  return(
                    <>
                      <a href="/login"><button className='btn btn-light'>Log In</button></a>
                    </>
                  )
                }
              }
            )()
          }
          
        
        </div>
    </div>
    </nav>
    </>
  )
}
