import { useState } from 'react';
import propTypes from 'prop-types';
import surveyQuestions from '../data/SurveyQuestions';

const TimeSurvey = ({
  sleepSetter,
  sportSetter,
  surveyDoneSetter,
  creditHours,
  setterCreditHours,
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    surveyQuestions[questionIndex],
  );
  const [isDone, setIsDone] = useState(false);

  const handleQuestionClick = (questionTitle, value) => {
    //ASYNCHONOUS HANDLING OF UPDATING STATE WHICH IS VERY ANNOYING.
    setQuestionIndex((prev) => prev + 1);
    const index = questionIndex + 1;
    setCurrentQuestion(surveyQuestions[index]);

    if (index === surveyQuestions.length) {
      setIsDone(true);
      surveyDoneSetter(true);
    }

    switch (questionTitle) {
      case 'Sleep':
        sleepSetter(parseInt(value) * 7);
        break;
      case 'Sports':
        sportSetter(parseInt(value) * 7);
        break;
    }
  };

  const handleSliderChange = (e) => {
    setSliderValue(parseInt(e.target.value));
    setterCreditHours(parseInt(e.target.value));
  };

  return (
    <div className="font-bold ">
      <h1 className="text-blue-600 text-7xl text-center">Time Survey</h1>
      <div className="flex justify-center items-center">
        {!isDone && (
          <div>
            <p className="text-3xl py-8">{currentQuestion.question}</p>

            <div className="flex flex-col items-center ">
              {currentQuestion.title !== 'Credit' ? (
                currentQuestion.values.map((value) => {
                  return (
                    <button
                      key={currentQuestion.values.indexOf(value)}
                      onClick={() =>
                        handleQuestionClick(currentQuestion.title, value)
                      }
                      className="bg-blue-500 border-black border-2 shadow-[#106ae0] shadow-md h-10 w-1/2 my-4"
                    >
                      {value}
                    </button>
                  );
                })
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <input
                    className="z-10"
                    type="range"
                    min={10}
                    max={40}
                    step={1}
                    value={parseInt(creditHours)}
                    name={'Credit Hours'}
                    onChange={handleSliderChange}
                  />
                  <p className="text-7xl text-blue-600 ">{sliderValue}</p>
                  <button
                    onClick={handleQuestionClick}
                    className="bg-blue-600 border-2 p-2 mt-4 border-black"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

TimeSurvey.propTypes = {
  sleepSetter: propTypes.func.isRequired,
  sportSetter: propTypes.func.isRequired,
  surveyDoneSetter: propTypes.func.isRequired,
  creditHours: propTypes.number.isRequired,
  setterCreditHours: propTypes.func.isRequired,
};

export default TimeSurvey;
