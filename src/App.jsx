import React, { useEffect } from "react";
import EmojiConvertor from "emoji-js";

function App() {
  const emojifier = new EmojiConvertor();

  useEffect(() => {
    const handleUserMacro = (event) => {
      const key = event.keyCode;
      if (key === 186) {
        if (document.activeElement.value) {
          let curValue = document.activeElement.value;
          document.activeElement.value = emojifier.replace_colons(curValue);
        } else if (document.activeElement?.innerHTML) {
          let caretID = "_caret";
          let cc = document.createElement("span");
          cc.id = caretID;
          window.getSelection().getRangeAt(0).insertNode(cc);

          let curValue = document.activeElement.innerHTML;
          document.activeElement.innerHTML = emojifier.replace_colons(curValue);

          let range = document.createRange();
          cc = document.getElementById(caretID);
          range.selectNode(cc);
          let selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
          range.deleteContents();
        }
      }
    };
    window.addEventListener("keyup", handleUserMacro);
    const editableContentList = [
      ...document.querySelectorAll("[contentEditable=true]"),
    ];

    editableContentList.map((elem) =>
      elem.addEventListener("keyup", handleUserMacro)
    );
    return () => {
      window.removeEventListener("keyup", handleUserMacro);
      editableContentList.map((elem) =>
        elem.removeEventListener("keyup", handleUserMacro)
      );
    };
  }, [emojifier]);
  return <div className="macrome__app"></div>;
}

export default App;
