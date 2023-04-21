import React from 'react'

const Counter = (props) => {
  console.log(props)
  return (
    <div style={{fontSize:"30px", textAlign:"center"}}>
       <button style={{width:"60px", height:"60px"}} onClick={props.increment}>❤️</button>
       <div style={{fontSize:"35px"}}>{props.counter}</div>
       <button style={{width:"60px", height:"60px"}} onClick={props.decrement}>💔</button>
    </div>
  )
}
export default Counter