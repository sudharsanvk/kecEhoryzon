import React from 'react'
import './AddEvent.css'

export default function AddEvent() {
  return (
    <>
    <div className='addForm'>
    <form action="http://localhost:2882/admin/addEvent" method='post'>
        <input class="form-control" type="text" name="name" id="" placeholder='Name' />
        <input class="form-control" type="text" name="logo" id="" placeholder='Event logo (URL)'/>
        <input class="form-control" type="text" name="desc" id="" placeholder='Event description'/>
        <input class="form-control" type="date" name="sDate" id="" />
        <input class="form-control" type="date" name="eDate" id="" />
        <input class="form-control" type="text" name="venue" id="" placeholder='Venue'/>
        <input class="form-control" type="text" name="staff" id="" placeholder='Staff Co-ordinator'/>
        <input class="form-control" type="text" name="student" id="" placeholder='Student Co-ordinator'/>
        <input class="form-control" type="text" name="staffContact" id="" placeholder='Staff Contact'/>
        <input class="form-control" type="text" name="studentContact" id="" placeholder='Student Contact'/>
        <input class="form-control" type="number" name="noOfSeats" id="" placeholder=''/>
        <input class="form-control" type="date" name="lastDateofRegistration" id="" placeholder='Last Date for Registration'/>
        <input class="form-control" type="text" name="eligibility" id="" placeholder='Eligibility'/>
        <input class="form-control" type="text" name="amount" id="" placeholder='Ticket Fare'/>
        <input class="form-control" type="text" name="website" id="" placeholder='Website URL'/>

        <input class="form-control" type="submit" value="Create Event" />
    </form>
    </div>
    </>
  )
}
