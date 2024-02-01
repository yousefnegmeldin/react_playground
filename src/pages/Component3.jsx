import { useState } from 'react';
// import { Pie } from 'react-chartjs-2';
import InputNumber from '../components/InputNumber';

const ComponentSample = () => {
  const MIN_HOURS_VALUE = 1;
  const MAX_HOURS_VALUE = 45;

  const [sleepTime, setSleepTime] = useState(8);
  const [sportTime, setSportTime] = useState(8);
  const [leisureTime, setLeisureTime] = useState(8);
  const [choreTime, setChoreTime] = useState(8);
  const [studyTime, setStudyTime] = useState(8);

  return (
    <div className="text-white h-full flex justify-center pt-[40px]">
      <div className="bg-slate-400 p-[40px] text-black rounded-lg">
        <h1 className="text-6xl font-bold">Time Management Calculator</h1>
        <div className="flex flex-col ">
          <InputNumber
            min={MIN_HOURS_VALUE}
            max={MAX_HOURS_VALUE}
            value={sleepTime}
            setterFunction={setSleepTime}
          />
          <InputNumber
            min={MIN_HOURS_VALUE}
            max={MAX_HOURS_VALUE}
            value={sportTime}
            setterFunction={setSportTime}
          />
          <InputNumber
            min={MIN_HOURS_VALUE}
            max={MAX_HOURS_VALUE}
            value={leisureTime}
            setterFunction={setLeisureTime}
          />
          <InputNumber
            min={MIN_HOURS_VALUE}
            max={MAX_HOURS_VALUE}
            value={choreTime}
            setterFunction={setChoreTime}
          />
          <InputNumber
            min={MIN_HOURS_VALUE}
            max={MAX_HOURS_VALUE}
            value={studyTime}
            setterFunction={setStudyTime}
          />
        </div>
      </div>
    </div>
  );
};

export default ComponentSample;
