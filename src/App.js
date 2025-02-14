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
  const [accepted, setAccepted] = useState(false);
  const rejectResponses = [
    "Poda Venna  👊",
    "Are you sure?",
    "Pookie please 🥺👉👈",
    "Think again! 😏",
    "Pretty please 🧐",
    "Are you absolutely sure? 🤨",
    "You’re gonna regret this 😤",
    "You’re joking… right? 👀",
    "Even AI has feelings! 🤖💔",
    "Last chance, think wisely! 🧐",
    "Gonna miss me!!",
    "C'mon, say YES! 🥰",
  ];
  const [rejectedCount, setRejectedCount] = useState(0);
  return (
    <div className="container">
      <img
        src={
          accepted
            ? "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            : "https://media.tenor.com/KDqnVi_7tZoAAAAj/panda-love.gif"
        }
        alt="Cute Panda"
        className="panda-img"
      />
      {accepted ? (
        <></>
      ) : (
        <>
          <h1>Will you be my valentine?</h1>
        </>
      )}
      <div className="button-container">
        {accepted ? (
          <></>
        ) : (
          <>
            <button
              className="yes-btn"
              onClick={() => {
                setAccepted(true);
                setResponse("WOOOOOO!!! I love you pookie!! ❤️");
              }}
            >
              Yes 🤍
            </button>
            <button
              className="no-btn"
              onClick={() => {
                setRejectedCount(rejectedCount + 1);
                setResponse(rejectResponses[rejectedCount]);
              }}
            >
              {rejectResponses[rejectedCount] || "C'mon, say YES! 🥰"}
            </button>
          </>
        )}
      </div>
      {response && accepted && <p className="response">{response}</p>}
    </div>
  );
}

export default App;
