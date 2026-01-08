import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="heading-container">
      <div className="img-container">
         <img className="img"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINv8skdJmrbqNOpoaVKAK_NRM_WbcD4sknQ&s"
         />
      </div>
      <div className="nav-bar">
       <ul>
        <li>about</li>
        <li>home</li>
        <li>contact us</li>
        <li>cart</li>



       </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props)=>{
  return(
    <div className="res-card">
      <div className="res-img">
        <img
        className="img2"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/10/9/9ea0ed66-507b-439c-8bdc-bc8353204fe2_3833ce56-0f75-40c5-8ca5-9de141924bfd.jpeg"
        />
      </div>
      <h3>{props.resName}</h3>
      <h4>{props.resRating}</h4>
    </div>
  )
}

const Body = ()=>{
  return(
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard resName="mhegna foods" resRating="4.5 rating"/>
        <RestaurantCard resName="kfc" resRating="3.4 rating"/>

      </div>
    </div>
  )
}

const AppLayout = () => {
  return <div className="app-container">
    <Header/>
    <Body/>
  </div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
