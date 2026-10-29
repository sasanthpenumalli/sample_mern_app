import { Link } from "react-router-dom";
import './Header.css'
import {uselocation} from 'react-router-dom'
function Header() {
    let currentuser = JSON.parse(localStorage.getItem("currentuser"));
     useLocation();
     let navigate=useNavigate();
    let handlelogout=(e)=>{
        localStorage.removeItem("currentuser");
        navigate('/login')
    }
    return (
        <div className="header">
            {/*common menus*/}

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>  

            {/*if the user is not logged in */}
           

            {/*if the user is logged in */}
            {!currentuser && (
                <div>
                     <Link to="/register">Register</Link>
                     <Link to="/login">Login</Link>
                </div>
            )}
            {/*if hr logged in */}
            {currentuser && currentuser.role === "HR" && (
                <div>
                    <Link to="#">assign task</Link>
                    <Link to="#">view employees</Link>
                    <button onClick={handlelogout}>Logout</button>
                </div>
            )}
            {/*if employee logged in */}
            {currentuser && currentuser.role === "employee" && (
                <div>
                    <Link to="#">view tasks</Link>  
                    <Link to="#">add todo</Link>
                    <button onClick={handlelogout}>Logout</button>
                </div>
            )}
            {/*if admin logged in */}
            {currentuser && currentuser.role === "admin" && (
                <div>
                    <Link to="#">view employees</Link>  
                    <Link to="#">view tasks</Link>
                    <button onClick={handlelogout}>Logout</button>
                </div>
            )}  
        </div>
    )
}
export default Header;