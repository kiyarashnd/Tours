import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //this function run in initial ender
  useEffect(() => {
    fetchTours();
    function handleMove(e) {
      setPosition({ x: e.pageX, y: e.pageY });
    }
    window.addEventListener('pointermove', handleMove);
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, []);

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
    if (res === undefined) {
      setNewTours([...newTours2, newTour]);
    }
  }

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
      <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }} />

      <main>
        <Tours tours={tours} removeTours={removeTours} addTours={addTours} />
      </main>
      <footer className='main-footer'>
        {newTours2.map((tour) => {
          return (
            <div key={tour.id}>
              <p className='para'>
                {tour.name} and total price is {tour.price}
              </p>
            </div>
          )
        })}
      </footer>
    </div>
  )
}

export default App
