import React, { useState } from 'react'
// import { Pie } from 'react-chartjs-2';
const ComponentSample = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  return (
    <div className='text-white h-full flex justify-center pt-[40px]'>
        <div className='bg-slate-400 p-[40px] text-black'>
            <h1 className='text-6xl font-bold'> Time Management Calculator</h1>
            {/* <Pie /> */}
            <input value={} />
        </div>
    </div>
  )
}

export default ComponentSample