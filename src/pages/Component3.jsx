import React, { useState } from 'react'
// import { Pie } from 'react-chartjs-2';
import InputNumber from '../components/InputNumber';

const ComponentSample = () => {
    const MIN_HOURS_VALUE = 1;
    const MAX_HOURS_VALUE = 8;

    const [sleepTime, setSleepTime] = useState(8);

  return (
    <div className='text-white h-full flex justify-center pt-[40px]'>
        <div className='bg-slate-400 p-[40px] text-black rounded-lg'>
            <h1 className='text-6xl font-bold'> Time Management Calculator</h1>
            {/* <Pie /> */}
            <InputNumber min={MIN_HOURS_VALUE} max={MAX_HOURS_VALUE} value={sleepTime} setterFunction={setSleepTime}/>
        </div>
    </div>
  )
}

export default ComponentSample