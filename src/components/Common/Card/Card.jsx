import "./card.css"

const Card = ({data}) => {
  const {title,subTitle,imgUrl} = data
  return (
    <div className="card-wrapper">
      <h1>{title}</h1>
      <img src={imgUrl} alt="" />
      <p>{subTitle}</p>
      <a href="">learn more</a>
    </div>
  )
}

export default Card