import React from 'react'
import './history.scss'
const history = ({state,dispatch}) => {
    console.log(state)
  return (
    <div className='history'>
      {state.historyData.map((history)=>{
        return (
            <div onClick={()=>{dispatch({type:'setMydata',payload:history.result})}}>
                {history.url.toString()}
            </div>
        )
      })}
    </div>
  )
}

export default history
