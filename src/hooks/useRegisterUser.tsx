import { useEffect, useState } from 'react';
import { User } from '../utilsTS';

const useRegisterUser = () => {
   const [loginError, setLoginError] = useState('');
   const [emailError, setEmailError] = useState('');
   const [users, setUsers] = useState<User[]>([]);

   useEffect(() => {
      const localUsers = localStorage.getItem('users');

      if (localUsers?.length) {
         try {
            const parsedUsers: User[] = JSON.parse(localUsers);
            setUsers(parsedUsers);
         } catch (error) {
            console.error('Failed to parse users from localStorage', error);
         }
      }
   }, []);

   const registerUser = (formData: User, onSuccess: () => void) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { checkPassword, ...data } = formData;

      const existingUserLogin = users.find(
         (user: { login: string }) => user.login === data.login
      );
      const existingEmail = users.find(
         (user: { email: string }) => user.email === data.email
      );

      if (existingUserLogin) {
         setLoginError('Login already exists');
      } else {
         setLoginError('');
      }

      if (existingEmail) {
         setEmailError('Email already exists');
      } else {
         setEmailError('');
      }

      if (!existingUserLogin && !existingEmail) {
         localStorage.setItem('users', JSON.stringify([...users, data]));
         onSuccess();
      }
   };

   return {
      loginError,
      emailError,
      registerUser,
   };
};

export default useRegisterUser;
