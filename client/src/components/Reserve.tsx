import { useParams } from "react-router-dom"
import { H4 } from "../TailwindComponents/Typorgraphy/Headings"
import useFetch from "../hooks/useFetch"
import Loader from "./Loader"
import { ChangeEvent, useContext, useState } from "react"
import { SearchContext } from "../context/searchContext"

const Reserve = () => {
    const hotelId = useParams().id

    const [selectedRooms, setSelectedRooms] = useState([])
    const { data, loading, error, isSuccess } = useFetch(`/api/rooms/${hotelId}`)

    const { state } = useContext(SearchContext)

    const getDatesInRange = (startDate: any, endDate: any) => {
        const start = new Date(startDate)
        const end = new Date(endDate)

        console.log("start ->", start.getTime())

        // let list = [];

        // while (date <= end) {
        //     list.push(new Date(date))
        //     date.setDate(date.getDate() + 1)
        // }

        // return list

    }
    getDatesInRange(state?.dateRange[0]?.startDate, state?.dateRange[0]?.endDate)
    const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.checked
        const value = e.target.value
        setSelectedRooms((prev: any) => {
            if (selected) {
                return [...prev, value]
            }
            else {
                return prev.filter((id: string) => id !== value)
            }

        })
    }

    console.log("selected", selectedRooms)
    // if(loading) return <Loader/>
    return (
        <div>
            <H4>Select you room:</H4>
            {loading ? "Loading..." :
                data?.rooms?.map((room: any) => {
                    return <>
                        <div className="item" key={room?._id}>
                            <div className="itemInfo flex flex-col">
                                <span>Name: {room?.title}</span>
                                <span>Max People: {room?.maxPeople}</span>
                                <span>Description: {room?.desc}</span>
                                <span>Price: {room?.price}</span>
                            </div>
                            <div>
                                {room.roomNumber?.map((item: any) => {
                                    return <div>
                                        <label>{item.number}</label>
                                        <input type="checkbox" value={item?._id} onChange={handleSelect} />
                                    </div>
                                })}
                            </div>
                        </div>
                        <button>Reserve Now</button>
                    </>
                })}
        </div>
    )
}

export default Reserve
