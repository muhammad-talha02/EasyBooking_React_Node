import { PropertyCard } from "."
import { H3 } from "../TailwindComponents/Typorgraphy/Headings"
import { HomeContainer } from "./HOC"

const FeaturedProperties = () => {
  return (
    <div className="w-full">
      <H3 classes="">Home Guests Love</H3>
      <div className="mt-[20px] flex gap-[20px] justify-between">
    <PropertyCard/>
    <PropertyCard/>
    <PropertyCard/>
      </div>
    </div>
  )
}

export default HomeContainer(FeaturedProperties)
