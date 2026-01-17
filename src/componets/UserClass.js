import React from "react"

class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log(props);

        this.state={
            count:0,
          
        }
        console.log(`${this.props.mame}constructor`);
        
    }
    componentDidMount(){
        console.log(`${this.props.name}componentDidMount`);
        
    }
   
    render(){
        console.log(`${this.props.name
        }render`);
        
        const {name} = this.props
        const {count} = this.state
        return(

            <div className="user-card">
                <h1>{count}</h1>
                <button onClick={()=>{
                  this.setState({
                      count: this.state.count +1
                  }
                  )
                }}>plus Class</button>
                <h2>Name:{name} </h2>
                <h3>Location: </h3>
                <h4>Contact: @america</h4>
            </div>
        )
    }
}

export default UserClass