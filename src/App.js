import Header  from "./Component/Header";
import Meme from './Component/Meme';
import Count from './Component/Count'
import { useState } from 'react';
import image from './images/Troll Face.png'
import image2 from './images/memeimg.png'
import React from "react";
import {BrowserRouter , Routes,Route,Link} from 'react-router-dom'

export default function App() {

  const [count,setCount] = useState(0);

function add(){
  setCount(prev => prev+1)
}

function subtract(){
  setCount(prev => prev-1)
}




//   const [contact, setContact] = useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (719) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false
// })

// function toggleFavorite(){
//   setContact(prev =>{
// return {
//   ...contact,
//   isFavorite:!prev.isFavorite

// }

//   })


// }

// let star = contact.isFavorite ? image : image2
 
  return (

    <BrowserRouter>
  <Routes>
<Route path="/" element={<Meme/>}></Route>
 <Route path="header" element={<Header />}></Route> 
 <Route path="count" element={<Count />}></Route>
 <Route path="*" element={<Error />}></Route>

  </Routes>


    </BrowserRouter>
// //     <div className="App">
// //     <div className="counter">
// //         <button className="counter--minus" onClick={subtract}>–</button>
// //         <Count
// // number ={count}
// //  />

// //         <button className="counter--plus" onClick={add}>+</button>
// //     </div>




//      /* <article className="card">
//                 <img src={image} />
//                 <div className="card--info">
//                     <img 
//                         src={star} 
//                         alt="test"
//                         className="card--favorite"
//                         onClick={toggleFavorite}
//                     />
//                     <h2 className="card--name">
//                         {contact.firstName +" "+ contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
                
//             </article> */














//     {/* <div className="state--value" onClick={test}>Click</div>
//     <h1>{add}</h1> */}




//     {/* <div className="state">

//     <h1 className="state--title">Do I Feel like going out tonight</h1>
//       <div className="state--value" onClick={Click}>
      
//       </div>
//      <h1>{add}</h1>
//     </div>
//      */}


// {/* 
//     <Header />
//     <Meme  />
//      */}

   
//     // </div>
  );
}



