import { useState } from 'react';
// import { Pie } from 'react-chartjs-2';
import InputNumber from '../components/InputNumber';

const ComponentSample = () => {
  const MIN_HOURS_VALUE = 1;
  const MAX_HOURS_VALUE = 45;

  const [sleepTime, setSleepTime] = useState(8);
  const [sportTime, setSportTime] = useState(2);
  const [leisureTime, setLeisureTime] = useState(3);
  const [choreTime, setChoreTime] = useState(1);
  const [studyTime, setStudyTime] = useState(8);

  return (
    <div className="text-white h-full flex justify-center pt-[40px]">
      <div className="bg-slate-400 p-[40px] text-black rounded-lg">
        <h1 className="text-6xl font-bold">Time Management Calculator</h1>
        <main className="flex flex-col pt-16">
          <input type="hidden" value="prayer" />
          <InputNumber
            min={MIN_HOURS_VALUE}
            max={MAX_HOURS_VALUE}
            value={sleepTime}
            setterFunction={setSleepTime}
            labelName="Sleep"
          />
          <InputNumber
            min={MIN_HOURS_VALUE}
            max={MAX_HOURS_VALUE}
            value={sportTime}
            setterFunction={setSportTime}
            labelName="Sports"
          />
          <InputNumber
            min={MIN_HOURS_VALUE}
            max={MAX_HOURS_VALUE}
            value={leisureTime}
            setterFunction={setLeisureTime}
            labelName="Leisure"
          />
          <InputNumber
            min={MIN_HOURS_VALUE}
            max={MAX_HOURS_VALUE}
            value={choreTime}
            setterFunction={setChoreTime}
            labelName="Chores"
          />
          <InputNumber
            min={MIN_HOURS_VALUE}
            max={MAX_HOURS_VALUE}
            value={studyTime}
            setterFunction={setStudyTime}
            labelName="Studying"
          />
        </main>
      </div>
    </div>
  );
};

export default ComponentSample;
