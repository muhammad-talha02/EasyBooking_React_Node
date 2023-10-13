import { FeaturedList, Navbar, PropertyTypesList } from  "../components"
import Header from "../sections/Header"

const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <Header/>
      <FeaturedList/>
      <PropertyTypesList/>
    </div>
  )
}

export default Home
