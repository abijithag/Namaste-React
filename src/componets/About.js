import User from "./User"
import UserClass from "./UserClass"
import React from "react"


class About extends React.Component{
     
     constructor(props){
        super(props)
    console.log("parent constructor");
      
     }

     componentDidMount(){
        console.log("parent compon");
        
     }

    render(){
        console.log("parent rende");
        
        return (
            <div>
            <h1>Hello Your in About Page</h1>
            <h3>Thanks For Visiting</h3>
            <UserClass name={"abaijith"}/>
            <UserClass name={"adhityan"}/>
        </div>
        )
    }
}


export default About