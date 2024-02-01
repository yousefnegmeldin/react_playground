// import React from 'react'

import codeCards from '../data/cards';
import CodeCard from './CodeCard';

const CodeList = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <div className="mt-4  text-4xl text-center lg:text-6xl text-slate-200">
        Welcome to my React Playground!
      </div>
      <div className="w-4/5 text-white pt-12 grid lg:grid-cols-3 grid-cols-1">
        {codeCards.map((card) => (
          <CodeCard
            key={card.cardNumber}
            title={card.title}
            description={card.description}
            tags={card.cardTags}
            path={card.path}
          />
        ))}
      </div>
    </div>
  );
};

export default CodeList;
