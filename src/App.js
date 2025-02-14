import React, { useState } from "react";
import "./App.css";

function App() {
  const [response, setResponse] = useState("");

  return (
    <div className="container">
      <img
        src="https://media.tenor.com/KDqnVi_7tZoAAAAj/panda-love.gif"
        alt="Cute Panda"
        className="panda-img"
      />
      <h1>Will you be my valentine?</h1>
      <div className="button-container">
        <button className="yes-btn" onClick={() => setResponse("Yay! ❤️")}>
          Yes
        </button>
        <button className="no-btn" onClick={() => setResponse("Oh no! 😢")}>
          No
        </button>
      </div>
      {response && <p className="response">{response}</p>}
    </div>
  );
}

export default App;
