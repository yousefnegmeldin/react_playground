import React from 'react'

import codeCards from '../data/cards'
import CodeCard from './CodeCard'

const CodeList = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center p-4'> 
        <div className='text-6xl text-slate-200'>
            Welcome to my React Playground!
        </div>
        <div className='w-4/5 text-white pt-12 grid grid-cols-3'>
            {codeCards.map((card)=>
              <CodeCard 
               key={card.cardNumber}
               title={card.title} 
               description={card.description} 
               tags={card.cardTags}
               cardLink={card.cardLink}
               />
               
            )}
        </div>
    </div>
    
  )
}

export default CodeList