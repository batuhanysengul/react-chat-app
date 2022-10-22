import React from 'react'
import {auth} from '../Firebase/config';

function Signout() {
  return (
    <div>
      <button onClick={() => auth.signOut()} className='signoutBtn'>Sign Out</button>
    </div>
  )
}

export default Signout