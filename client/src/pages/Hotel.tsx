import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { H3, H4 } from "../TailwindComponents/Typorgraphy/Headings";
import { GalleryModal, MailList, Navbar, Reserve } from "../components";
import BookingModal from "../components/GalleryModal";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import {
  faArrowLeft,
  faArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { SearchContext } from "../context/searchContext";
import { AuthContext } from "../context/authContext";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [reserveModal, setReserveModal] = useState(false);
  const [sliderNumber, setSliderNumber] = useState(0);
  const { state: { dateRange } } = useContext(SearchContext)
  const { state: { user } } = useContext(AuthContext)
  const params = useParams()
  const navigate = useNavigate()
  const { data, loading } = useFetch(`/api/hotels/hotel/${params.id}`)

  const MILISECONDS_PERDAY = 1000 * 60 * 60 * 24

  function totalDays(d1: any, d2: any) {
    const timeDiff = Math.abs(d2?.getTime() - d1?.getTime())
    const diffDays = Math.ceil(timeDiff / MILISECONDS_PERDAY)
    return diffDays
  }

  const days = totalDays(dateRange[0]?.endDate, dateRange[0]?.startDate)
  // const Images = [
  //   {
  //     src: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50fGVufDB8fDB8fHww&w=400",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww&w=400",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50fGVufDB8fDB8fHww&w=400",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&w=400",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1628592102751-ba83b0314276?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&w=400",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&w=400",
  //   },
  // ];

  const handleBook = () => {
    if (!user) {
      // navigate("/login")
    }
    else {
      setReserveModal(true)
    }
  }

  return (
    <>

      <Navbar />
      <Header mode="list" />
      {
        loading ? <Loader /> :
          <>
            <GalleryModal show={showModal} closeModal={() => setShowModal(false)}>
              <div className="slider  h-full">
                <div className="sliderWrapper flex gap-2 p-4 justify-center items-center select-none">
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="text-white text-[22px] bg-black rounded-full p-2 cursor-pointer"
                    onClick={() =>
                      setSliderNumber(
                        sliderNumber === 0 ? sliderNumber : sliderNumber - 1
                      )
                    }
                  />
                  <img
                    src={data?.photos[sliderNumber]}
                    alt=""
                    className="w-[90%] h-[80vh] object-cover"
                  />
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-white text-[22px] bg-black rounded-full p-2 cursor-pointer"
                    onClick={() =>
                      setSliderNumber(
                        sliderNumber < data?.photos.length - 1 ? sliderNumber + 1 : 0
                      )
                    }
                  />
                </div>
              </div>
            </GalleryModal>
            <div className="hotelContainer p-1 w-full max-w-[1024px] mx-auto mt-3">
              <div className="hotetWrapper flex flex-col gap-3 relative">
                <div className="flex flex-col gap-[5px]">
                  <H3 classes="text-[--theme-light]">{data?.name}</H3>
                  <div className="flex gap-2 text-[14px] items-center">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>{data.address} , {data?.city}</span>
                  </div>
                  <span className="text-[--theme] font-bold">
                    Excellent Location - {data.distance}m from Gate Towers
                  </span>
                  <span className="text-[green]">
                    Book a stay over {data?.cheapestPrice} AED and get a free airport taxi{" "}
                  </span>
                  <button className="bg-[--theme] text-white w-max px-5 py-1 rounded-sm">
                    Book Now
                  </button>
                </div>
                <div className="gallery flex flex-wrap justify-between gap-y-1">
                  {data?.photos.map((src: string, index: any) => (
                    <div className="w-[33%]" key={index}>
                      <img
                        src={src}
                        onClick={() => {
                          setSliderNumber(index);
                          setShowModal(true);
                        }}
                        className="w-full object-cover h-full cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
                <div className="hotelDetails flex justify-between gap-5 mt-5">
                  <div className="flex-1">
                    <H3>{data?.title}</H3>
                    <span className="text-[14px] mt-5">
                      {data?.description}
                    </span>
                  </div>
                  <div className="flex w-full flex-col max-w-[350px] gap-[10px] bg-[#67a6ff30] p-2">
                    <H4>Perfect for {days || 1}-night stay</H4>
                    <span className="text-[14px]">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                      explicabo labore dicta exercitationem tenetur. Deserunt,
                      molestiae rerum reprehenderit
                    </span>
                    <span>
                      <strong>{data?.cheapestPrice * days || data?.cheapestPrice} AED </strong>({days || 1} Nights)
                    </span>
                    <button onClick={handleBook} className="bg-[--theme] text-white px-5 py-1 rounded-sm">
                      Reserve or Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <MailList />
          </>

      }
      <BookingModal show={reserveModal} closeModal={() => setReserveModal(false)}>
        <div className="bg-white w-full max-w-[450px] mx-auto">
          
          <Reserve/>
          </div>
      </BookingModal>
      <Footer />
    </>
  );
};

export default Home;
