import { H1, H2, H3 } from "../TailwindComponents/Typorgraphy/Headings"

const FeatureItem = () => {
  return (
    <div className="featuredItem relative text-white h-[250px] overflow-hidden rounded-lg z-[1]">
    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
    <div className="featureTitles absolute bottom-1 left-2">
      <H2>Emaar</H2>
      <H3>123 Properties</H3>
    </div>
  </div>
  )
}

export default FeatureItem
