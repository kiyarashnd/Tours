import React, { useState } from 'react';

const Tour = ({ addTours, removeTours, tour }) => {
  const [readMore, setReadMore] = useState(false);
  return <article className='single-tour'>
    <img src={tour.image} alt={tour.name} />
    <footer>
      <div className="tour-info">
        <h4>{tour.name}</h4>
        <h4 className='tour-price'>${tour.price}</h4>
      </div>
      <p>
        {/* if readMore is true then render tour.info else render `${}` */}
        {readMore ? tour.info : `${tour.info.substring(0, tour.info.length / 2)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'read more'}
        </button>
      </p>
      <button className='delete-btn' onClick={() => removeTours(tour.id)}>
        not interested
      </button>

      <button className='add-btn' onClick={() => addTours(tour)}>
        add tour
      </button>
    </footer>
  </article>;
};

export default Tour;
