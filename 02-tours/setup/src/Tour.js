import React, { useState } from 'react';

const Tour = ({ ...tour }) => {
  const [readMore, setReadMore] = useState(false);
  console.log(tour)
  return <article className='single-tour'>
    <img src={tour.image} alt={tour.name} />
    <footer>
      <div className="tour-info">
        <h4>{tour.name}</h4>
        <h4 className='tour-price'>${tour.price}</h4>
      </div>
      <p>
        {readMore ? tour.info : `${tour.info.substring(0, tour.info.length / 2)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'read more'}
        </button>
      </p>
      <button className='delete-btn'>
        not interested
      </button>
    </footer>
  </article>;
};

export default Tour;
