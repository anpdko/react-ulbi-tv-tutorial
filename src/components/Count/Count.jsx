import React, {useState} from 'react';

const Count = () => {
   const [count, setCount] = useState(0);
   
   return (
      <div className='box'>
         <h2>{count}</h2>
         <button onClick={()=>setCount(count-1)}>Decrement</button>
         <button onClick={()=>setCount(count+1)}>Inctement</button>
      </div>
   );
};

export default Count;