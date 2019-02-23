import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from  './pages/Home.jsx'
import Feed from './pages/Feed.jsx'
import FAQ from  './pages/FAQ.jsx'
import Body from './Body.jsx'

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
        <Switch>
            <Route path = "/default" component = {Body}/>
            <Route path = "/home" component = {Home} />
            <Route path = "/feed" component = {Feed}/>
            <Route path = "/faq"  component = {FAQ} />
        </Switch>
    </div>
)

export default Navbar