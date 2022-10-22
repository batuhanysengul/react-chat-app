import React from 'react'
import './style.css'
import {auth} from '../Firebase/config';

function Signout() {
  return (
    <div>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default Signout