import React from 'react';

const CreateElement = () => {
   const button = React.createElement('button', {
      onClick: () => alert('Hello World!')
    }, 'Кнопка createElement!')

   return (
      <div className='box'>
         {button}
      </div>
   );
};

export default CreateElement;