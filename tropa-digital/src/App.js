import React from "react";
import Router from "./Routes/Router";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Router />
      </DndProvider>
    </div>
  );
}

export default App;
