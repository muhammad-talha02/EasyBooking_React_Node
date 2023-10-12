import { H1, H2 } from "../TailwindComponents/Typorgraphy/Headings"

const FeatureItem = () => {
  return (
    <div className="featuredItem">
    <img src="https://loremflickr.com/cache/resized/65535_52462898608_924dc41d06_n_320_240_nofilter.jpg" alt="" />
    <div className="featureTitles">
      <H1>Emaar</H1>
      <H2>123 Properties</H2>
    </div>
  </div>
  )
}

export default FeatureItem
