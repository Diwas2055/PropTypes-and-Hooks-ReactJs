import React, {useState} from 'react';

function Hooks(){
    const [count,setCount]=useState(0);
    function add(){
      setCount(count+1);
    };
    function decrement(){
      setCount(count-1);
    };
  return (
    <div>
      <h1>Your Counter is {count}</h1>
      <button onClick={add}>Increment</button>
      <button onClick={decrement} disabled={count === 0 ? true:false}>Decrement</button>
    </div>
  )
}

export default Hooks
