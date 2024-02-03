import { useEffect, useState } from 'react';

import surveyQuestions from '../data/SurveyQuestions';
const TimeSurvey = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    surveyQuestions[questionIndex],
  );
  const [isDone, setIsDone] = useState(false);

  const handleQuestionClick = (questionTitle) => {
    //ASYNCHONOUS HANDLING OF UPDATING STATE WHICH IS VERY ANNOYING.
    setQuestionIndex((prev) => prev + 1);
    const index = questionIndex + 1;
    setCurrentQuestion(surveyQuestions[index]);
    console.log('set');
    console.log(questionIndex);
    console.log(index);
    if (index === surveyQuestions.length) {
      setIsDone(true);
      console.log(questionIndex === surveyQuestions.length);
    }
  };

  return (
    <div className="font-bold ">
      <h1 className="text-blue-600 text-7xl text-center">Time Survey</h1>
      <div className="flex justify-center items-center">
        {!isDone && (
          <div>
            <div className="text-3xl py-8">{currentQuestion.question}</div>
            <div className="flex flex-col items-center ">
              {currentQuestion.values.map((value) => {
                return (
                  <button
                    key={currentQuestion.values.indexOf(value)}
                    onClick={() => handleQuestionClick(currentQuestion.title)}
                    className="bg-blue-500 border-black border-2 shadow-[#106ae0] shadow-md h-10 w-1/2 my-4"
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeSurvey;
