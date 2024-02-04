import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const WithRedux = () => {
  const val = useSelector((state) => state.myFirstReducer.val);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(setVal(val + 1))}>WithRedux: {val}</button>
  )
}

export default WithRedux