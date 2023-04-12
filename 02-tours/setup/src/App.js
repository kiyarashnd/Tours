import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Loading from './Loading'
import Tours from './Tours'
import Cart from './Cart'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([]);

  const [newTours2, setNewTours2] = useState([]);

  //this function run in initial ender
  useEffect(() => {
    fetchTours();
  }, []);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const addTours = (newTour) => {
    //newTours2 here is previous tour that added
    const res = newTours2.find((item) =>
      item.id === newTour.id
    )
    if (res === undefined) {
      setNewTours2([...newTours2, newTour]);
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
    <Router>
      <Route exact path="/">
        <main>
          <Tours tours={tours} removeTours={removeTours} addTours={addTours} />
          <Link to="/Cart" className='myLink'>You have {newTours2.length} in Cart</Link>
        </main>
      </Route>

      <Switch>
        <Route path="/Cart">
          <Cart newTours2={newTours2}></Cart>
        </Route>
      </Switch>
    </Router>

  )
}

export default App
