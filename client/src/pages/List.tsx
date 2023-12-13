import { Navbar, SearchCard, SidebarSearch } from '../components'
import Header from '../sections/Header'

const List = () => {
  return (
    <>
      <Navbar/>
      <Header mode="list"/>
      <div className="lisContainer flex justify-center mt-10">
        <div className="lisWrapper w-full max-w-[1024px] gap-[20px] flex px-2">
          <SidebarSearch/>
          <div className="listResults flex-[3]">
            <SearchCard/>
            <SearchCard/>
            <SearchCard/>
            <SearchCard/>
            <SearchCard/>
            <SearchCard/>
            <SearchCard/>
          </div>
        </div>
      </div>
    </>
  )
}

export default List
