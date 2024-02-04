import React, { useState } from 'react'

const WithReact = () => {
  const [val, setVal] = useState(0);
  
  return (
    <button onClick={() => setVal(val + 1)}>WithReact: {val}</button>
  )
}

export default WithReact