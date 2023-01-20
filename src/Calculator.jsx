import React from 'react'
import { useState } from 'react'
import "./calci.css"

const Calculator = () => {
    const[result, setResult]=useState("")

    const clickHandler =(event)=>{
        setResult(result.concat(event.target.value))
    }

    const clearDisp=()=>{
        setResult("");
    }

    const calcAns=()=>{
        setResult(eval(result).toString());
    }
  return (
    <div className='calc'>

        <input type="text" placeholder='0' id="ans" value={result}/>
        <input type="button" value="9" className='button'onClick={clickHandler}/>
        <input type="button" value="8" className='button' onClick={clickHandler}/>
        <input type="button" value="7" className='button' onClick={clickHandler}/>
        <input type="button" value="6" className='button' onClick={clickHandler}/>
        <input type="button" value="5" className='button' onClick={clickHandler}/>
        <input type="button" value="4" className='button'onClick={clickHandler}/>
        <input type="button" value="3" className='button' onClick={clickHandler}/>
        <input type="button" value="2" className='button'onClick={clickHandler}/>
        <input type="button" value="1" className='button' onClick={clickHandler}/>
        <input type="button" value="0" className='button' onClick={clickHandler}/>
        <input type="button" value="." className='button' onClick={clickHandler}/>
        <input type="button" value="/" className='button' onClick={clickHandler}/>
        <input type="button" value="*" className='button' onClick={clickHandler}/>
        <input type="button" value="+" className='button' onClick={clickHandler}/>
        <input type="button" value="-" className='button' onClick={clickHandler}/>
        <input type="button" value="clear" className='button button1' onClick={clearDisp}/>
        <input type="button" value="=" className='button button1' onClick={calcAns}/>
    </div>
  )
}

export default Calculator