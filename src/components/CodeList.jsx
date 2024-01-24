import React from 'react'

import codeCards from '../data/cards'

const CodeList = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center p-4'> 
        <div className='text-6xl text-slate-200'>
            Welcome to my React Playground!
        </div>
        <div className='w-4/5 text-white pt-12 grid grid-cols-3'>
            {codeCards.map((card)=>
                    <div key={card.cardNumber} className='text-center p-4'>
                        <p>{card.title}</p>
                        <p>{card.description}</p>
                    </div>
            )}
            {/* Make card component. */}
        </div>
    </div>
    
  )
}

export default CodeList