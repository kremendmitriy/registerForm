import { useState } from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
   const [isLogin, setIsLogin] = useState(true);

   return (
      <>
         <div className="registerBox">
            {isLogin ? (
               <SignIn onSwitchToSignUp={() => setIsLogin(false)} />
            ) : (
               <SignUp onSwitchToSignIn={() => setIsLogin(true)} />
            )}
         </div>
      </>
   );
}

export default App;
