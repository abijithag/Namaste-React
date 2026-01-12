import RestaurantCard from "./RestaurantCard"
import resList1  from "../util/mockData"
import { useState, useEffect} from "react"
import Shimmer from "./shimmer"

const Body = ()=>{
  let [resList,setResList] = useState([])
  const [searchText,setSearchText] = useState("")
  const [filterRes,setFilterRes] = useState([])

  useEffect(()=>{
  fetchData()
   
  },[])
  const fetchData = async()=>{
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.51600&lng=76.21570&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   const json = await data.json();
   const restaurants =
   [
     ...new Map(
       (json?.data?.cards
         ?.map(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         ?.flat()
         ?.filter(Boolean) || []
       ).map(r => [r.info.id, r])
     ).values()
   ];
 

  const restaurantInfoList = restaurants.map(r => r.info);


 console.log(restaurantInfoList);
 
   console.log(json);

   setResList(restaurantInfoList)
   setFilterRes(restaurantInfoList)
   
 }

 
  
    return resList.length === 0? <Shimmer/>: (
      <div className="body-container">
        <div className="search-container">
          <input type="text"
           placeholder="Search"
           value={searchText}
           onChange={(e)=>{
            setSearchText(e.target.value)
            
           }}
           
           />
          <button className="search-bts"
          onClick={()=>{
            const filterValue = resList.filter((res)=> res.name.toLowerCase().includes(searchText.toLowerCase()))

            setFilterRes(filterValue)
          }}
          >search</button>
        </div>
        <div className="btn-container">
          <button className="filter-btn"
           onClick={()=>{
            const filteredList = resList.filter(
              (res) => res.avgRating > 4
            )
            setResList(filteredList)
          }}>
            filter top Rated
            </button>
        </div>
        <div className="res-container">
          {filterRes.map((restaurant) =>(
            <RestaurantCard key={restaurant.id} resData={restaurant}/>
            ))}
          
  
        </div>
      </div>
    )
  }

  export default Body