// PATTERNS
export const loginProps = {
   minLength: {
      value: 3,
      message: 'Login length must be more than 3 characters',
   },
   maxLength: {
      value: 15,
      message: 'Login length must be less than 15 characters',
   },
   pattern: { value: /^[\w_]*$/, message: 'Valid characters A-z _' },
};

export const passwordProps = {
   pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message:
         'Password must include minimum eight characters, at least one letter and one number',
   },
};

export const emailProps = {
   pattern: {
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Uncorrect email',
   },
};
