import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import { BannerText1, BannerText2, BannerText3, BannerText4 } from '../../utils/constant/bannerText'
import Card from '../Common/Card/Card'
import "./home.css"
import { servicesDate } from '../../utils/constant/services'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner data={BannerText1}/>
      <Banner isRotate data={BannerText2}/>
      <Banner data={BannerText3}/>
      <h1 className='heading'>Some Services We Offer</h1>
      <div className="card-box">
        {
          servicesDate.map((item, index)=>{
            return(
              <Card key={index} data={item}/>
            )
          })
        }
      </div>
      <Banner isRotate data={BannerText4}/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home