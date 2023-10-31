
import React from "react";
// import './../styles/App.css';

import { useSelector, useDispatch } from "react-redux";
import { userName, userEmail } from "../redux/actions/userActions";

const App = () => {

  const { name, email } = useSelector(state => state)

  const dispatch = useDispatch()

  return (
    <div>
      <label>Name:</label>
      <input onChange={e => dispatch(userName(e.target.value))} /><br /><br />
      <label>Email:</label>
      <input onChange={e => dispatch(userEmail(e.target.value))} />
      <div>
        <p>Current values in store:</p>
        <span>Name - </span><span>{name}</span><br /><br />
        <span>Email - </span><span>{email}</span>
      </div>
    </div>
  )
}

export default App
