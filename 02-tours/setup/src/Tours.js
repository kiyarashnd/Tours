import React, { useState } from 'react';
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
        return <Tour key={tour.id} {...tour} removeTours={props.removeTours} />
      })}
    </div>
  </section>;
};

export default Tours;
