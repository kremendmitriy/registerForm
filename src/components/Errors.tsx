const Errors = ({ message }: { message: string }) => {
   console.log(message);

   if (!message) null;
   return (
      <div
         className="text-[red] m-8 font-bold"
         style={{ height: '20px', visibility: message ? 'visible' : 'hidden' }}
      >
         {message}
      </div>
   );
};

export default Errors;
