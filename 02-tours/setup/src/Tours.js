// import React, { useState } from 'react';
import Tour from './Tour';
const Tours = (props) => {
  const tours = props.tours;

  return <section>
    <div className="title">
      <h2>our tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTours={props.removeTours} addTours={props.addTours} />
      })}
    </div>
  </section>;
};

export default Tours;
