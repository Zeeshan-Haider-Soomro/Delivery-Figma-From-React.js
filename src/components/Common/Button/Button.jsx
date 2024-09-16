import "./Button.css"

const Button = ({isIcon,text}) => {
  return (
    <div>
        <button className="btn-wrapper">
          <i className={isIcon}></i> {text}
        </button>
    </div>
  )
}

export default Button