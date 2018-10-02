import React from 'react'
import {Link} from 'react-router-dom'
import Reveal from 'react-reveal'
import 'animate.css/animate.css'
const generateblocks=({blocks})=>{
   if(blocks){
     return(
       blocks.map(item=>{
         return(
           <Reveal key={item.id}   effect="animated fadeInUp">
              <div className={`item  ${item.type}`}>
                <div className="overlay"></div>
                <div className="image" style={{background:`url(/images/blocks/${item.image}) no-repeat`}}>
                    <div className="title">
                    <Link to={item.link}>{item.title}</Link>
                    </div>
                </div>
              </div>
           </Reveal>
         )
       })
     )

   }
}
export default (props) => {
  return (
    <div className="home_block">
      {generateblocks(props)}
    </div>
  )
}

