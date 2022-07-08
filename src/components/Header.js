import React from 'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                <li><h1> <Link to="/"><img className="logo" src="https://www.fossmint.com/wp-content/uploads/2017/02/logo.png"/></Link></h1></li> 
            <li><Link to="/movie" className="btn" >Movies</Link> </li>
            <li><Link to="/tv" className="btn" >TV</Link></li>
            <li><Link to="/login" className="btn" >Login</Link> </li>
            <li><Link to="/register" className="btn" >Register</Link></li>
                </ul>
            
            </nav>
           
        </header>
    )
}

export default Header
