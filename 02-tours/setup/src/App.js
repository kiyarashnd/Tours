import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([]);

  const [newTours2, setNewTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const addTours = (newTour) => {
    const res = newTours2.find((item) =>
      item.id === newTour.id
    )
    console.log("res", res);
    if (res === undefined) {
      setNewTours([newTour, ...newTours2]);
    }
  }
  // console.log('1111', newTours2)


  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };
  useEffect(() => {
    fetchTours();
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  //for when we have no tours
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button onClick={fetchTours} className='btn'>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <div>
      <main>
        <Tours tours={tours} removeTours={removeTours} addTours={addTours} />
      </main>
      <footer className='main-footer'>
        {newTours2.map((tour) => {
          return (
            <p key={tour.id}>
              {tour.name}
            </p>
          )
        })}
      </footer>
    </div>
  )
}

export default App
