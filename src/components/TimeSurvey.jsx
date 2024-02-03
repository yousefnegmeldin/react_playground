import React, { useState } from 'react';

import surveyQuestions from '../data/SurveyQuestions';
const TimeSurvey = () => {
  const questionIndex = 0;
  const [currentQuestion, setCurrentQuestion] = useState(
    surveyQuestions[questionIndex],
  );
  const isDone = false;

  return (
    <div className="font-bold ">
      <h1 className="text-blue-600 text-7xl text-center">Time Survey</h1>
      <div className="flex justify-center items-center">
        {!isDone && (
          <div>
            <div className="text-3xl pt-8">{currentQuestion.question}</div>
            <div className="flex flex-col ">
              {currentQuestion.values.map((value) => {
                return (
                  <>
                    <button className="bg-blue-500">{value}</button>
                  </>
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
