import React from 'react'
import './AddEvent.css'

export default function AddEvent() {
  return (
    <>
    <form action="http://localhost:2882/admin/addEvent" method='post'>
        <input class="form-control" type="text" name="name" id="" />
        <input class="form-control" type="text" name="logo" id="" />
        <input class="form-control" type="date" name="sDate" id="" />
        <input class="form-control" type="date" name="eDate" id="" />
        <input class="form-control" type="text" name="venue" id="" />
        <input class="form-control" type="text" name="staff" id="" />
        <input class="form-control" type="text" name="student" id="" />
        <input class="form-control" type="text" name="staffContact" id="" />
        <input class="form-control" type="text" name="studentContact" id="" />
        <input class="form-control" type="text" name="noOfSeats" id="" />
        <input class="form-control" type="date" name="lastDateofRegistration" id="" />
        <input class="form-control" type="text" name="eligibility" id="" />
        <input class="form-control" type="text" name="amount" id="" />
        <input class="form-control" type="submit" value="Create Event" />
    </form>
    </>
  )
}
