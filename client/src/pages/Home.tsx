import { FeaturedList, FeaturedProperties, MailList, Navbar, PropertyTypesList } from  "../components"
import Footer from "../sections/Footer"
import Header from "../sections/Header"

const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <Header/>
      <FeaturedList/>
      <PropertyTypesList/>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>
    </div>
  )
}

export default Home
