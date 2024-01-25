import React from 'react'
import PropTypes from 'prop-types'

const CodeCard = ({title,description,tags}) => {
  return (
    <div className='rounded-2xl mx-8 bg-slate-200 text-black flex flex-col justify-center items-center'>
      <p className='w-full h-10 text-3xl text-center border-b-2 border-indigo-500'>{title}</p>
      <div className='w-full flex flex-col items-center'>
        <div className='overflow-auto w-2/3 p-2 h-48 rounded-xl text-lg text-center bg-slate-300 my-4'>
          {description} 
        </div>
        <div className='flex flex-wrap h-16 flex-row justify-center items-center'>
          {tags.map((tag)=>
            <div key={tag} className='bg-[#2A303C] text-white text-sm rounded-full px-2 m-2'>{tag}</div>
          )}
        </div>
        {/* implement link/route functionality and research whether to use button or a or Link   */}
        <button className='shadow-2xl m-2 p-2 rounded-full w-64 text-white bg-indigo-500'> View </button>
      </div>
    </div>
  )
}




export default CodeCard