import React, { FunctionComponent } from "react";
import Canvas from "./components/Canvas";
import Colors from "./components/Colors";
import { CanvasProvider } from "./context/CanvasContext";

import "./App.css";

const App: FunctionComponent = () => {
  return (
    <CanvasProvider>
      <Canvas />
      <Colors />
    </CanvasProvider>
  );
};

export default App;
