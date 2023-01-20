import React from 'react'
import { useState } from 'react';

export default function Count() {
const [count, setCount] = useState(0)
const increment = ()=>{setCount( count=>count+1)}
const decrement = ()=>{
    if(count>0){setCount(count=> count-1)}}
const reset = ()=>{setCount(0)} 
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
