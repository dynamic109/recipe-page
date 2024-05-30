import React from "react";
import Instructions from "./components/instructions";
import "./App.css";
import Omelette from "./image-omelette.jpeg";
import Preparation from "./components/Preparation";
import Ingredients from "./components/Ingredients";
import Nutrition from "./components/Nutrition";

function App() {
  return (
    <main>
      <img src={Omelette} alt="A picture of omelette" />
      <div>
        <h1>Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables or meats.
        </p>
      </div>
      <Preparation />
      <Ingredients />
      <hr />
      <Instructions />
      <hr />
      <Nutrition />
    </main>
  );
}

export default App;
