import './App.css';
import Chat from './components/Chat';
import Signin from './components/Signin';

//firebase
import {auth} from '../src/components/Firebase/config';
import {useAuthState} from 'react-firebase-hooks/auth';

function App() {
  //useauthstate hook kullanıcı giriş yapmış mı diye kontrol eder 
  //userı boolean döndürür
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? <Chat /> : <Signin />}
    </>
  );
}

export default App;
