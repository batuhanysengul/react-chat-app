import React, {useState} from 'react'
import {db, auth} from '../../components/Firebase/config';
import firebase from 'firebase/compat/app';

function Message() {
  const [msg, setMsg] = useState('');

  async function sendMessage(e) {
    e.preventDefault();
    const {uid, photoURL} = auth.currentUser;

    await db.collection('messages').add({
      text: msg,
      createdAt: Date.now(),
      uid,
      photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMsg(' ');
  }
    

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input type="text" placeholder='Message...' value={msg} onChange={(e) => {
          setMsg(e.target.value);
        }}/>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Message