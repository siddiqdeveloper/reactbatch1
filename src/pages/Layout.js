import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <ul className="nav justify-content-center" >
  <li className="nav-item">
   <Link className="nav-link" to="/">Home</Link>
   
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/add-course">AddCourse</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/list">CourseList</Link>
  </li>
  
</ul>
    <Outlet></Outlet>
    </>
  )
}