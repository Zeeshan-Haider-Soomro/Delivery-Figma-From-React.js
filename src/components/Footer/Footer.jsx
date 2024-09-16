import "./Footer.css"

const Footer = () => {
  return (
    <div className="background">
            <div className="footer-wrapper">
        <div>
            <h1>Delivery</h1>
            <ul>
                <li>
                Order Products Faster Easier
                </li>
            </ul>
        </div>
        <div>
            <h1>Our Services</h1>
            <ul>
                <li>Pricing</li>
                <li>Discounts</li>
                <li>Report a Bug</li>
                <li>Terms of Service</li>
            </ul>
        </div>
        <div>
            <h1>Our Company</h1>
            <ul>
                <li>Blog</li>
                <li>Our Mission</li>
                <li>Get in Touch</li>
            </ul>
        </div>
        <div>
            <h1>Community</h1>
            <ul>
                <li>Support</li>
                <li>Questions</li>
                <li>Customer Help</li>
            </ul>
        </div>
        <div className="socailMedia">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        </div>
    </div>
    </div>
    // <div>
    //     <div>
    //         <h1>
    //             {headings.map((item, index)=>{
    //                 return(
    //                     <h1 key={index}>{item.text}</h1>
    //                 )
    //             })}
    //         </h1>
    //     </div>
    //     <div>
            
    //     </div>
    // </div>
  )
}

export default Footer