import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  let [condition, setCondition] = useState(false);

  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={() => setCondition(!condition)}>{condition ? '-' : '+'}</button>
    </header>
    <p>{condition ? info : null}</p>
  </article >;
};

export default Question;
