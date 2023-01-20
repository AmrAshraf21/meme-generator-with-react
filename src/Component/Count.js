import { Link } from "react-router-dom"
export default function Count(props){
    
    return(
        <div className="counter--count">
        <Link to='/header' className='btn'>Header</Link>
        <Link to='/' className='btn'>Return</Link>
            <h1>{props.number}</h1>
            <h2>From Count</h2>
    </div>


    )





}