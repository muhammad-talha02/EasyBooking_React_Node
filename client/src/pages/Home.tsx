import { FeaturedList, FeaturedProperties, Navbar, PropertyTypesList } from  "../components"
import Header from "../sections/Header"

const Home = () => {
  return (
    <div className="">
      <Navbar/>
      <Header/>
      <FeaturedList/>
      <PropertyTypesList/>
      <FeaturedProperties/>
    </div>
  )
}

export default Home
