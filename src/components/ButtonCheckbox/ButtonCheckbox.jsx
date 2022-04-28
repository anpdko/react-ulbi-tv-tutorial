import React from 'react';
import styles from './ButtonCheckbox.module.css'

const ButtonCheckbox = () => {
   return (
      <div className='box'>
         <input type="checkbox" id={styles.toggle}/>
         <label htmlFor="toggle" className={styles.button}></label>
      </div>
   );
};

export default ButtonCheckbox;