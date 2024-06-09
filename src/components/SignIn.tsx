import { useForm } from 'react-hook-form';
import { loginProps } from '../patterns';
import { checkUserForLogin } from '../utils';

const SignIn = ({ onSwitchToSignUp }: { onSwitchToSignUp: () => void }) => {
   const { register, handleSubmit } = useForm({
      defaultValues: {
         login: '',
         password: '',
      },
   });

   return (
      <div className="w-3/4 mx-auto">
         <form className="space-y-2" onSubmit={handleSubmit(checkUserForLogin)}>
            <h2>Login</h2>
            <input
               className="w-3/4 rounded border-solid border-2 border-amber-300"
               type="text"
               {...register('login', loginProps)}
            />
            <h2>Password</h2>
            <input
               className="w-3/4 rounded border-solid border-2 border-amber-300"
               type="password"
               {...register('password')}
            />

            <div>
               <button className="m-2" type="submit">
                  Sign In
               </button>
               <button className="m-2" type="button" onClick={onSwitchToSignUp}>
                  Sign Up
               </button>
            </div>
         </form>
      </div>
   );
};

export default SignIn;
