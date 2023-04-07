// import img from './mee.jpg'
import { people2 } from './data.js';
import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(people2);
  function addAll() {
    setPeople(people2)
  }
  // console.log(img)
  return (
    <main>
      {/* <img src={img} alt="nothing" /> */}
      <section className="container">
        <h3>{people.length} birhtdays today</h3>
        {/* <List></List> */}
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
        <button onClick={addAll}>Add All</button>
      </section>
    </main>
  );
}

export default App;
