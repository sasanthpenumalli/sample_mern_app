
import {link} from "react-router-dom";
import './header.css'
function Header(){
    return(
        <div>
          <div className="header">
          <Link to="">home</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link >

        </div>
    )
}

export default Header