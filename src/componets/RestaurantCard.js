import {CLOUDINARY_IMG_URL} from "../util/constants"

const RestaurantCard = (props)=>{
    const {resData} = props
    
    const {name,
      cloudinaryImageId,
      avgRating,
      costForTwo,
      cuisines
     
  
    } = resData


    
  

    return(
      <div className="res-card">
        <div className="res-img">
          <img
          className="img2"
          src={ CLOUDINARY_IMG_URL+cloudinaryImageId}
         
          />
        </div>
        <div className="dis">
        <h4>{name}</h4>
        <h5>{costForTwo}</h5>
        <p className="cuisines"> <small>{cuisines.join(",")}</small></p>
        <h6>{avgRating}</h6>
        </div>
      
      </div>
    )
  }

  export default RestaurantCard