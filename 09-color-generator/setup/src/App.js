import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      //new Values.all generate List of 20 colors
      let colors = new Values(color).all(10);
      //here color is value of input
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              console.log(e.target.value);
              setColor(e.target.value);
            }}
            placeholder="#f15025 of rgb(255,0,0)"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((anyColor, index) => {
          // console.log(anyColor);//object of every color
          return (
            <SingleColor
              key={index}
              {...anyColor}
              index={index}
              hexColor={anyColor.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
