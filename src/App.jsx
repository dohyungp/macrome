import React, { useState, useRef, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const textEl = useRef(null);
  const [macro, setMacro] = useState("");
  const handleSpecialKey = useCallback(
    (event) => {
      let key = event.keyCode;
      if (key === 8 && macro.length > 0)
        setMacro(macro.slice(0, macro.length - 1));
    },
    [macro]
  );
  const handleUserMacro = useCallback(
    (event) => {
      let key = event.keyCode;
      let chr = String.fromCharCode(key);

      if (document.activeElement.tagName !== "BODY") {
        if (macro.length > 0) {
          if (chr !== ":") setMacro(macro + chr);
          else {
            let curValue = document.activeElement.value;
            document.activeElement.value = curValue.replace(`${macro}`, "🙏");
            setMacro("");
          }
        } else if (chr === ":") {
          setMacro(chr);
        }
      }
    },
    [macro]
  );
  useEffect(() => {
    window.addEventListener("keypress", handleUserMacro);
    window.addEventListener("keydown", handleSpecialKey);
    return () => {
      window.removeEventListener("keypress", handleUserMacro);
      window.removeEventListener("keydown", handleSpecialKey);
    };
  }, [handleSpecialKey, handleUserMacro]);
  return (
    <div className="App">
      <textarea ref={textEl} />
      <p>{macro}</p>
    </div>
  );
}

export default App;
