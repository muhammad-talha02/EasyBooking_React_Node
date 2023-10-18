import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H3, H4 } from "../TailwindComponents/Typorgraphy/Headings";
import { MailList, Navbar } from "../components";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const Images = [
    {
      src: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50fGVufDB8fDB8fHww&w=400",
    },
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww&w=400",
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50fGVufDB8fDB8fHww&w=400",
    },
    {
      src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&w=400",
    },
    {
      src: "https://images.unsplash.com/photo-1628592102751-ba83b0314276?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&w=400",
    },
    {
      src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&w=400",
    },
  ];
  return (
    <>
      <Navbar />
      <Header mode="list" />
      <div className="hotelContainer p-1 w-full max-w-[1024px] mx-auto mt-3">
        <div className="hotetWrapper flex flex-col gap-3 relative">
          <div className="flex flex-col gap-[5px]">
          <H3 classes="text-[--theme-light]">Tower Sky Hotel</H3>
            <div className="flex gap-2 text-[14px] items-center">
              <FontAwesomeIcon icon={faLocationDot} />
            <span>Al Reem Island, Abu Dhabi, UAE</span>
              </div>
          <span className="text-[--theme] font-bold">Excellent Location - 500m from Gate Towers</span>
          <span className="text-[green]">Book a stay over 500 AED and get a free airport taxi </span>
          <button className="bg-[--theme] text-white w-max px-5 py-1 rounded-sm">Book Now</button>
          </div>
      <div className="gallery flex flex-wrap justify-between gap-y-1">
        {
          Images.map((img)=>(
            <div className="w-[33%]">
          <img src={img.src} className="w-full object-cover h-full"/>
            </div>
          ))
        }
      </div>
      <div className="hotelDetails flex flex-1 justify-between gap-5 mt-5">
      <div className="">
        <H3>Stay in the city of lights</H3>
        <span className="text-[14px] mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis explicabo labore dicta exercitationem tenetur. Deserunt, molestiae rerum reprehenderit perferendis ducimus, voluptate dolore, aut eligendi nulla delectus beatae earum sint aliquid.</span>
      </div>
      <div className="flex flex-col flex-3 gap-[10px] bg-[#67a6ff30] p-2">
        <H4>Perfect for 6-night stay</H4>
        <span className="text-[14px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis explicabo labore dicta exercitationem tenetur. Deserunt, molestiae rerum reprehenderit</span>
        <span><strong>999 AED </strong>(9 Nights)</span>
        <button className="bg-[--theme] text-white px-5 py-1 rounded-sm">Reserve or Book Now</button>
      </div>
      </div>
      </div>
      </div>
      <MailList/>
      <Footer />
    </>
  );
};

export default Home;
