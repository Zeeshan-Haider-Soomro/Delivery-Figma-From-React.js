import Button from '../Common/Button/Button'
import { contactData, contactDetails } from '../../utils/constant/ContactText'
import "./Contact.css"

const Contact = () => {
    const{title,subTitle} = contactData
  return (
    <div className='contact-wrapper'>
        <div>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
        <div>
            <ul>
                {/* {
                    contactDetails.map((item,index)=>{
                        return(
                            <li key={index}>
                                {item.text}
                            </li>
                        )
                    })
                } */}
                <li>Telephone: 123 - 456 - 789</li>
                <li>Email: delivery@email.com</li>
                <li>Location: Planet Earth</li>
            </ul>
        </div>
        <div>
            <Button text="Contact Us"/>
        </div>
    </div>
  )
}

export default Contact