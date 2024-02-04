import { useState } from 'react';
// import { Pie } from 'react-chartjs-2';
import InputNumber from '../components/InputNumber';
import TimeSurvey from '../components/TimeSurvey';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const ComponentSample = () => {
  const MIN_HOURS_VALUE = 1;
  const MAX_HOURS_VALUE = 45;

  const [sleepTime, setSleepTime] = useState(8);
  const [sportTime, setSportTime] = useState(2);
  const [leisureTime, setLeisureTime] = useState(3);
  const [choreTime, setChoreTime] = useState(1);
  const [studyTime, setStudyTime] = useState(8);
  const [surveyDone, setSurveyDone] = useState(false);

  defaults.plugins.title.display = true;
  defaults.responsive = true;

  return (
    <div className="text-white h-auto flex justify-center pt-[40px]">
      <div className="bg-slate-400 p-[40px] mb-[40px] text-black rounded-lg ">
        <h1 className="text-6xl font-bold">Time Management Calculator</h1>
        <main className="flex flex-col pt-16">
          {surveyDone ? (
            <div>
              <div className="w-1/2 text-black">
                <Doughnut
                  data={{
                    labels: [
                      'Sleep',
                      'Sports',
                      'Leisure',
                      'Chores',
                      'Studying',
                    ],
                    datasets: [
                      {
                        label: 'Weekly Time',
                        data: [
                          sleepTime,
                          sportTime,
                          leisureTime,
                          choreTime,
                          studyTime,
                        ],
                        backgroundColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                        ],
                      },
                    ],
                    options: {
                      borderColor: '#00000',
                      plugins: {
                        title: {
                          text: 'Time',
                        },
                      },
                    },
                  }}
                />
              </div>

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
            </div>
          ) : (
            <TimeSurvey
              surveyDoneSetter={setSurveyDone}
              sleepSetter={setSleepTime}
              sportSetter={setSportTime}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default ComponentSample;
