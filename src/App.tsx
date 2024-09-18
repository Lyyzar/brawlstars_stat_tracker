import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Card from "./components/Card";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Card
              rank={1}
              power={2}
              name="Kit"
              gears={[]}
              highestTrophies={1000}
              trophies={1000}
              starPowers={[]}
              gadgets={[]}
              id={23}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
