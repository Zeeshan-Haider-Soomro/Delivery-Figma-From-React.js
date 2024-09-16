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
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Services</a>
                </li>
                <li>
                    <a href="">Contact Us</a>
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
            <Button text="Order Now!"/>
        </div>
    </div>
    </div>
  )
}

export default Header