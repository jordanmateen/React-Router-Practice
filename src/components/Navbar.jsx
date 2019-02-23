import React from 'react'
import { NavLink } from 'react-router-dom';

const style = {
    marginLeft : '2em',
    color : "white"
    
}
const Navbar = () =>(
    <div >
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav" style = {{width : "25%"}}>
                        <NavLink to = "/default"style={style}>Default</NavLink>
                        <NavLink to="/home" style={style}>Home</NavLink>
                        <NavLink to = "/feed" style = {style}>Feed</NavLink>
                        <NavLink to = "/faq" style = {style}>FAQ</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    </div>
)

export default Navbar