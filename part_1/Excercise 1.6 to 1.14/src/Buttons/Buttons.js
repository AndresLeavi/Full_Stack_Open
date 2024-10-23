import React from 'react'

const Buttons = ({event, text}) => {

  return (
    <div>
        <button onClick={event}> {text}</button>
    </div>
  )
}

export default Buttons