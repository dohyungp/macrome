import React, { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const inputEl = useRef();
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      let key = event.keyCode;
      let chr = String.fromCharCode(96 <= key && key <= 105 ? key - 48 : key);
      if (document.activeElement.tagName !== "BODY")
        console.log(`${event.type}:${document.activeElement.tagName}: ${chr}`);
    });
    return () => {
      window.removeEventListener("keydown", () => {
        console.log("expired");
      });
    };
  }, []);
  return (
    <div className="App">
      <input type="text" id="example" name="example" ref={inputEl} />
    </div>
  );
}

export default App;
