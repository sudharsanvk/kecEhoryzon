import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://i.ibb.co/94qz88F/images-removebg-preview.png" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Events</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">Your Tickets</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Book Tickets</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Cancel Tickets</a>
        </li>

      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-light" type="submit">Login/Signup</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
