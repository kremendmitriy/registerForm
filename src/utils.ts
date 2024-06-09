export const checkUserForLogin = (data: {
   login: string;
   password: string;
}) => {
   const storedUsers = localStorage.getItem('users');
   const users = storedUsers ? JSON.parse(storedUsers) : [];

   const user = users.find(
      (user: { login: string }) => user.login === data.login
   );

   if (user && user.password === data.password) {
      alert('Success');
   } else {
      alert('Invalid login or password');
   }
};
