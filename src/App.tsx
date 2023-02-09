import './App.css';
import React from "react";
import { Status } from './component/Status'
import { status, colors, levels } from './component/constants';

function App() {
  const currentStatus = "chiffré1";

  return (
    <div className="App">
      <Status allStatus={status} colors={colors} currentStatus={currentStatus} levels={levels}></Status>
    </div>
  )
}

export default App
