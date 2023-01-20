import memeImage from '../images/memeimg.png'
import memesData from './memesData';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Meme(props){

const [meme,setMeme] = useState({
  bottomText:"",
  topText:"",
  randomImage:"http://i.imgflip.com/1bij.jpg"
})


const [allMemeImage , setAllMemeImages] = useState(memesData)



    // const [state,setState] = useState("https://i.imgflip.com/43a45p.png")

    let url
    function click(){
        let ramdomMeme = Math.floor(Math.random() * allMemeImage.data.memes.length);
          url = allMemeImage.data.memes[ramdomMeme].url
            setMeme(prev => {
              return {
                ...prev,
                randomImage:url
              }


            })
        }
        
return(
    

<div className='container-meme'>

<Link to='/header' className='btn'>Header</Link>
<Link to='/count' className='btn'>count</Link>

<div className='input'>
<input type="text" className="first"></input>
<input type="text" className="sec"></input>
</div>
<button onClick={click} className='btn'>Get a new Meme image🖼</button>
<img src={meme.randomImage} alt="test" className='meme-image'></img>



</div>




)    

}