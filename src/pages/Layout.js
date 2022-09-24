import { Link, Outlet } from "react-router-dom"

function Layout() {
 
    return <>
        <ul className="nav justify-content-center">
        <li className="nav-item">

            <Link className="nav-link" to="/">Home </Link> 
          
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/add-course">Add Course </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/list">List </Link>
        </li>
        
        </ul>
            
    <Outlet></Outlet>
    </>
  }
  
  export default Layout