import React, { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const inputEl = useRef();
  useEffect(() => {
    window.addEventListener("keypress", (event) => {
      let key = event.keyCode;
      let chr = String.fromCharCode(key);

      if (document.activeElement.tagName !== "BODY")
        console.log(
          `${event.type}:${document.activeElement.tagName}:${event.shiftKey} ${chr}`
        );
    });
    return () => {
      window.removeEventListener("keypress");
    };
  }, []);
  return (
    <div className="App">
      <input type="text" id="example" name="example" ref={inputEl} />
    </div>
  );
}

export default App;
