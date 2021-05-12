import React, { useState } from 'react';

function Counter2 (props){
  const [counter,setCount] = useState(0);

function handleClick(){
  if(counter < props.max){
    setCount(prevValue => prevValue + 1)
  }
}

  return (
    <div>
      <h1>{counter}</h1>
      {counter === props.max ? <p>you reach the max!</p> : null}
      <button onClick={handleClick}>Press me!</button>
      <h2>The max value is {props.max}</h2>
    </div>
  );
};

export default Counter2;
