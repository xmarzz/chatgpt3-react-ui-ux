import './whatGpt3.css'
import React from 'react'
import { Feature } from '../../Components'

const whatGpt3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whatgpt3'>
      <div className='gpt3__whatgpt3-feature'>
          <Feature/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
           <h1 className='gradient__text'>
           beyond your wildest dreams are the potentialities
           </h1>
           <p>Explore The Library</p>
      </div> 
      <div className='gpt3__whatgpt3-container'>
        <Feature title="chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"/>
        <Feature title="Educaiton" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments"/>
      </div>
    </div>
  )
}

export default whatGpt3
