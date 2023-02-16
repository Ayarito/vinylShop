import React from 'react';
import './FS.css'
import redDisk from '../../images/disk RED.svg'

const FirstSection = () => {
   return(
      <section id='firstSection'>
      <div className='container'>
         <div className='row'>

            <div className='col-6'>
               <div className='box__firstSec'>
                  <h1>DEBUT ALBUM</h1>
                  <h2>OLD RELEASE</h2>
                  <p> The theme of the song could possibly be a continuation of <b/>the story set up by earlier Queen songs "Play the Game" and "It's a Hard Life"</p>
                  <button>Add to cart </button>
               </div>
            </div>

            <div className='col-6'>
            <div className='red'>
            <img src={redDisk} alt="logo"/>
            </div>
            </div>

         </div>
      </div>
      </section>

   );
}
export default FirstSection;
