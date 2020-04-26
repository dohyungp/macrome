import React, { useEffect } from "react";
import EmojiConvertor from "emoji-js";

function App() {
  const emojifier = new EmojiConvertor();

  useEffect(() => {
    const handleUserMacro = (event) => {
      if (document.activeElement?.tagName !== "BODY") {
        const key = event.keyCode;
        const curValue = document.activeElement?.value;
        if (curValue && key === 186)
          document.activeElement.value = emojifier.replace_colons(curValue);
      }
    };
    window.addEventListener("keyup", handleUserMacro);
    return () => {
      window.removeEventListener("keyup", handleUserMacro);
    };
  }, [emojifier]);
  return <div className="machrome__app"></div>;
}

export default App;
