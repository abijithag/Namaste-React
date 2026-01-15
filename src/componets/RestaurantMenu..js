import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { MENU_API } from "../util/constants";

const RestaurantMenu = ()=>{
    const {resId} = useParams();
   const [resInfo,setResInfo] = useState(null)

   useEffect(()=>{
    fetchData()
     
     
    },[])
    const fetchData = async()=>{
        const url =
       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.51600&lng=76.21570&restaurantId=614192&catalog_qa=undefined&submitAction=ENTER"


        const data = await fetch(url)
        const json = await data.json();
        console.log(json);
        
       
        
      }
     
  
   if(resInfo === null) return <Shimmer/>

   return(
    <div>
        <h1>Restaurant Menu</h1>
        <h2>{resId}</h2>
    </div>
   )
}

export default RestaurantMenu