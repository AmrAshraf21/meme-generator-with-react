import trollface from '../images/Troll Face.png'
import meme from '../images/memeimg.png'
import { Link } from 'react-router-dom'
export default function Header(){


    return(
        <div className="container-header">
        <div className="left">
            <img src={trollface}></img>
            <h1>MemeGenerator</h1>
        </div>
            <p className='right'>React Course - Project 3</p>
       <Link to='/count' className="btn">Count</Link>        <Link to='/' className='btn'>Return</Link>
       <Link to='/' className='btn'>Return</Link>

        </div>



    )
}