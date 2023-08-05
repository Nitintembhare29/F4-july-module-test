import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { FaHome, FaUserAlt, FaRegBell, FaBookmark } from 'react-icons/fa';

function Navbar() {
  return (
    <div className='Navbar'>
      <p style={{fontSize: "20px", fontWeight: "500", color: "white"}}>TravelMedia.in</p>
      <div className="links">
      <NavLink to={"/"}>{<FaHome/>}</NavLink>
      <NavLink to={"*"}>{<FaRegBell/>}</NavLink>
      <NavLink to={"*"}>{<FaBookmark/>}</NavLink>
      <NavLink to={"/*"}>{<FaUserAlt/>}</NavLink>
      </div>
    </div>
  )
}

export default Navbar
