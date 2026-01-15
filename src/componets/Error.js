import { useRouteError } from "react-router-dom"


const Error = ()=>{
    const error = useRouteError()
    return(
    <div>
        <h1>oops Error Found </h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
    )
}

export default Error