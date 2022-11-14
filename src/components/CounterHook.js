import React from 'react'
import useCounterHook from './useCounterHook';
import '../App.css'


function CounterHook() {
    const {count, dispatch, ACTIONS} = useCounterHook();

  return (
    <div className='main-counter'>
      <div className='counter'>
        <h2 style={{color:"whitesmoke"}}>Count : <span style={{ color: 'yellow' }}>{count}</span></h2>
        <input type="text" placeholder='set counter value'
        onChange={(e) => dispatch({type : ACTIONS.SET_VALUE,
        payload : e.target.value})} style={{color:"whitesmoke"}}/>
      </div>
      <div className='counter-btn'>
        
        <button className='btn btn-primary' onClick={() => {
          dispatch({type : ACTIONS.INCREASE})
        }}>+</button>
        <button className='btn btn-danger' onClick={() => {
          dispatch({type : ACTIONS.DECREASE})
        }}> - </button>
        <button className='btn btn-danger' onClick={() => {
          dispatch({type : ACTIONS.RESET})
        }}>RESET</button>
      </div>
    </div>
  )
}

export default CounterHook