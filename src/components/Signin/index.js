import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../Firebase/config';

function Signin() {

    function signIn () {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

  return (
    <div>
        <button onClick={signIn} className='signinBtn'>Sign in with Google</button>
    </div>
  )
}

export default Signin