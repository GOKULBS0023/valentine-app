import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [response, setResponse] = useState("");
  const sendResponse = (message) => {
    setResponse(message);

    fetch("https://formsubmit.co/gokulbelieve44@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    })
      .then(() => console.log("Response sent successfully"))
      .catch((error) => console.error("Error:", error));
  };
  useEffect(() => {
    sendResponse(response);
  }, [response]);

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
