import React from 'react';
import './navbar.css'
import { IoMenu } from "react-icons/io5";

const navbar = () => {
  return (
    <div>
      <div class="nav-content">
      <div class="logo">
        <a href="#">BETH.</a>
      </div>
      <div>
        <a href="#">BUY</a>
      </div>
      <div> <IoMenu /></div>

    </div>
    </div>
  )
}

export default navbar
