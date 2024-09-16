import Button from "../Common/Button/Button"
import "./banner.css"

const Banner = ({isRotate,data}) => {
    console.log(data);
    const {title,detail,buttonText,imgUrl,buttonText2,} = data
    if(buttonText && buttonText2){
        return (
            // banner-wrapper
            <div className={`${isRotate && "rotateImg"}  banner-wrapper`}>
                <div className="text-wrapper">
                    <h1>{title}</h1>
                    <p>{detail}</p>
                    <div className="btn-wrapper">
                    { buttonText ? <Button isIcon="fa-brands fa-apple" text={buttonText}/> : null }
                    { buttonText ? <Button isIcon="fa-brands fa-google-play" text={buttonText2}/> : null }
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src={imgUrl} alt="" />
                </div>
        
            </div>
          )
    }
    else{
        return (
            // banner-wrapper
            <div className={`${isRotate && "rotateImg"}  banner-wrapper`}>
                <div className="text-wrapper">
                    <h1>{title}</h1>
                    <p>{detail}</p>
                   { buttonText ? <Button text={buttonText}/> : null }
                </div>
                <div className="img-wrapper">
                    <img src={imgUrl} alt="" />
                </div>
        
            </div>
          )
    }

}

export default Banner