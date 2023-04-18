import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  //this initial value run just in initial rendering
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  //for check when we come to end and first of the array :
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    //for prevent that randomNumber be same as previous :
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    //because we have index + 1 we must use checkNumber function :
    setIndex(checkNumber(randomNumber))
  }

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        suprise me
      </button>
    </article>
  )
};

export default Review;
