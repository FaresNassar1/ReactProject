import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import NavItem,{NavItemDropDown} from '../../Components/NavItem/NavItem'
import logo from '../../assets/images/logo.png'
const Header = () => {
  return (
    <div><div className="navbar navbar-expand-md  navbar-dark cyborg-navbar  ">
    <div className="container">
        <a href="/" className="navbar-brand">
            <img src={logo} alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
                <Link to='/' className="nav-link">Home</Link>
                <NavItem><a href="/#" className="nav-link">Browse</a></NavItem>
                <NavItemDropDown>
                    <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                    <ul className="dropdown-menu">
                        <li><a href="/#" className="dropdown-item">fares</a></li>
                        <li><a href="/#" className="dropdown-item">nassar</a></li>
                    </ul>
                </NavItemDropDown>
                <li className="nav-item"><a href="/#" className="nav-link">Streams</a></li>
              <NavItem> <Link to="/Profile" className="nav-link">Profile</Link></NavItem>

            </ul>
        </div>
    </div>
</div></div>
  )
}

export default Header