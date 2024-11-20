import './style/regis.css'
import React from 'react'
import { useState } from 'react'
import {v4 as uniqID} from 'uuid';

function Regst() {
    const [title, setTitle] = useState('')
    const [data, setData] = useState('')

    const resetINput =() => {
        setData('')
        setTitle('')
    }

    const information = (e) => {
        e.preventDefault()
        const event = {
            title: title,
            data: data,
            id: uniqID()
        }
        
        resetINput()
        console.log(event);
        
    }
  return (
    <form  className='salom' onSubmit={information}>
        <label>
            <span>Enter info</span>
            <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} />
        </label>
        <label>
            <span>Enter password</span>
            <input onChange={(e) => setData(e.target.value)} type="date"  value={data}/>
        </label>
        <button type='button' onClick={resetINput}>reset</button>
    </form>
  )
}

export default Regst