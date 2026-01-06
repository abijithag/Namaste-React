
import React from "react"
import ReactDOM from "react-dom/client"


const elem = <span>React elemnt</span>


const titile = (
  <h1>
  
  Namste React 2
    {elem}
  </h1>

)





  const HeadingComponent = ()=>(
  
      <div  id="container">
        {titile}
        <h1 className="heading"> Namste React</h1>
      </div>
    )
  

const jsxHeading = <h1 id="header">Namaste React</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>)