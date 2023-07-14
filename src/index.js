import React from "react";
import ReactDOM from "react-dom";
import Frame from "react-frame-component";

function App() {
  return (
    <div>
      <Frame initialContent="<!DOCTYPE html><html><head></head><body><div></div><div>Some other static content</div></body></html>">
        Content!
      </Frame>
      <Frame
        mountTarget="#mountHere"
        initialContent="<!DOCTYPE html><html><head></head><body><div>Some static content</div><div id='mountHere'></div></body></html>"
      >
        Content with mountTarget prop
      </Frame>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
