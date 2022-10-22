import React, {useState} from 'react'
import {db, auth} from '../../components/Firebase/config';
import firebase from 'firebase/compat/app';

function Message({scroll}) {
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
    scroll.current.scrollIntoView({behavior: 'smooth'});
  }
    

  return (
    <div >
      <form onSubmit={sendMessage} className='sendMsg'>
        <input type="text" placeholder='Message...' value={msg} onChange={(e) => {
          setMsg(e.target.value);
        }}/>
        <button type='submit' className='sendBtn' required>Send</button>
      </form>
    </div>
  )
}

export default Message