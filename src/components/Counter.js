import React from 'react'

//declare count
const startingState = { count: 0 }

//setValue
// function setValue(value, count) {
//     let num = Number(value)
//     if(String(num) == "NaN" || value == "") {
//         return count;
//     }
//     return num;
//   }

//declare reducer
const reducerCounter = (state, action) => {
  switch (action.type) {
    case 'setValue':
        return
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      } 
    case 'fiveAdd':
      return {
        ...state,
        count: state.count !== '' ? state.count + 5 : (state.count = 0),
      }
    case 'reset':
      //   return { count: state.count = 0}
      return startingState
    case 'newUserInput':
      return { ...state, userInput: action.payload }
    case 'tgColor':
      return { ...state, color: !state.color }
    default:
      throw new Error('Error occured in counter')
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducerCounter, {
    startingState,
    userInput: '',
    color: false,
    setValue: '',
  })

  return (
    <div
      className='mb-4 App'
      style={{ color: state.color ? '#FFF' : '#FFF952' }}
    >
      <strong>
        <u>Counter App</u>
      </strong>
      <div>
        <h2 className='mb-4'>React useReducer Counter Hook</h2>
        <div>
          <h2 style={{ color: 'red' }}>
            Count: <span style={{ color: 'blue' }}>{state.count}</span>
          </h2>
          <p>{state.userInput}</p>
          <input
            type='text'
            value={state.count}
            placeholder='input a random number'
            onChange={(e) =>
              dispatch({ type: 'setValue', payload: e.target.value })
            }
            style={{ color: 'whitesmoke' }}
          ></input>
          <button
            type='button'
            className='btn btn-primary'
            onClick={() => {
              dispatch({ type: 'decrement' })
            }}
          >
            Decrement
          </button>
          <button
            type='button'
            className='btn btn-danger ms-2'
            onClick={() => {
              dispatch({ type: 'increment' })
            }}
          >
            Increment
          </button>
          <br />
          <button
            type='button'
            className='btn btn-danger ms-2'
            onClick={() => {
              dispatch({ type: 'reset' })
            }}
          >
            Reset
          </button>{' '}
          <br />
          <button
            type='button'
            className='btn btn-primary ms-2'
            onClick={() => {
              dispatch({ type: 'fiveAdd' })
            }}
          >
            Increase by 5
          </button>{' '}
          <br />
          <input
            type='text'
            value={state.userInput}
            onChange={(e) =>
              dispatch({ type: 'newUserInput', payload: e.target.value })
            }
            style={{ color: 'whitesmoke' }}
          />
          <br />
          <button
            type='button'
            className='btn btn-primary ms-2'
            onClick={() => dispatch({ type: 'tgColor' })}
          >
            Color
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
