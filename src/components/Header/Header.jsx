import { NavLink } from "react-router-dom"
import Button from "../Common/Button/Button"
import "./Header.css"

const Header = () => {
  return (
    <div className="fixedHeader">
            <div className='header-wrapper'>
        <div className="logo">
            <h1>Delivery</h1>
        </div>
        <div className="navbar">
            <ul>
                <li>
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/about">About</NavLink>
                </li>
                <li>
                <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                <NavLink to="/contactUs">Contact Us</NavLink>
                </li>
                <li>
                    <i class="fa-solid fa-toggle-off icon"></i>
                </li>
                <li>
                    <div className="colors">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </li>
                <li>
                    <p className="english">English</p>
                </li>
            </ul>
        </div>
        <div className="btn-wrapper">
        <NavLink to="orderNow"><Button text="Order Now!"/></NavLink>
        </div>
    </div>
    </div>
  )
}

export default Header