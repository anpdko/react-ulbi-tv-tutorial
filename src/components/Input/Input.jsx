import React, { useState } from 'react';

const Input = () => {
   const [value, serValue] = useState("Text input")
   return (
      <div className='box'>
         <h3>{value}</h3>
         <input 
            type="text"
            value={value}
            onChange={event => serValue(event.target.value)}
         />
      </div>
   );
};

export default Input;