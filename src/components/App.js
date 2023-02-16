import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  const [count, setCount] = useState(0);
  const onClick=()=>{
    setCount(count + 1)
  }
  const ondoubleclick=()=>{
    alert("cant edit it");
  }

  return (
    <div className="ball">
      <h1 className="count" onDoubleClick={ondoubleclick}>{count}</h1>
      <button className='increment-button' onClick={onClick}>Increment</button>
    </div>
  )
}
export default App;