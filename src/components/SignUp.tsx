import { useForm } from 'react-hook-form';
import { useRef, useEffect } from 'react';
import Errors from './Errors';
import { loginProps, passwordProps, emailProps } from '../patterns';
import useRegisterUser from '../hooks/useRegisterUser';

import { User } from '../utilsTS';

const SignUp = ({ onSwitchToSignIn }: { onSwitchToSignIn: () => void }) => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors, isValid },
   } = useForm({
      mode: 'onChange',
      defaultValues: {
         login: '',
         email: '',
         password: '',
         checkPassword: '',
      },
   });

   const { loginError, emailError, registerUser } = useRegisterUser();
   const signUpButtonRef = useRef<HTMLButtonElement>(null);

   useEffect(() => {
      if (isValid && signUpButtonRef.current) {
         signUpButtonRef.current.focus();
      }
   }, [isValid]);

   const onSubmit = (formData: User) => {
      registerUser(formData, onSwitchToSignIn);
   };

   return (
      <div className="w-11/12 mx-auto">
         <Errors
            message={
               errors.login?.message ||
               errors.password?.message ||
               errors.email?.message ||
               errors.checkPassword?.message ||
               loginError ||
               emailError
            }
         />

         <div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="flex items-center justify-center flex-col">
                  <h2>Login</h2>
                  <input
                     className="w-8/12 rounded border-solid border-2 border-amber-300"
                     type="text"
                     {...register('login', loginProps)}
                  />

                  <h2>Email</h2>
                  <input
                     className="w-8/12 rounded border-solid border-2 border-amber-300"
                     type="email"
                     {...register('email', emailProps)}
                  />

                  <h2>Password</h2>
                  <input
                     className="w-8/12 rounded border-solid border-2 border-amber-300"
                     type="password"
                     {...register('password', passwordProps)}
                  />

                  <h2>Repeat password</h2>
                  <input
                     className="w-8/12 rounded border-solid border-2 border-amber-300"
                     type="password"
                     {...register('checkPassword', {
                        required: 'Please confirm your password',
                        validate: (value) =>
                           value === watch('password') ||
                           'Passwords do not match',
                     })}
                  />
               </div>

               <div className="flex mt-4 items-center justify-center w-8/12 mx-auto">
                  <button
                     className="m-2 p-2 bg-blue-500 text-white rounded"
                     type="button"
                     onClick={onSwitchToSignIn}
                  >
                     Sign In
                  </button>
                  <button
                     className="m-2 p-2 bg-green-500 text-white rounded"
                     type="submit"
                     disabled={!isValid}
                     ref={signUpButtonRef}
                  >
                     Sign Up
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default SignUp;
