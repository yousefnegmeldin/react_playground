// import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CodeCard = ({ title, description, tags, path }) => {
  
CodeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
}
  // code logic here
  return (
    <div className='my-4 rounded-2xl mx-8 bg-secondary text-white flex flex-col justify-center items-center'>
      <p className='w-full h-24 text-3xl text-center flex items-center justify-center border-b-2 border-slate-300 pb-4'>{title}</p>
      <div className='w-full flex flex-col items-center'>
        <div className=' overflow-auto w-2/3 p-2 h-48 rounded-xl lg:text-lg text-center bg-primary my-4'>
          {description} 
        </div>
        <div className='flex flex-wrap sm:h-36  lg:h-16 sm:flex-col lg:flex-row justify-center items-center'>
          {tags.map((tag)=>
            <div key={tag} className='bg-[#2A303C] text-white w-24 text-center text-sm rounded-full px-2 m-2'>{tag}</div>
          )}
        </div>
        <Link to={`/playground/${path}`} className='shadow-2xl text-center m-2 p-2 rounded-full w-48 lg:w-64 text-white bg-indigo-500'> View </Link>
      </div>
    </div>
  )
}



export default CodeCard