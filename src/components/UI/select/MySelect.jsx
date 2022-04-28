import React from 'react';
import styles from './MySelect.module.css'

const MySelect = ({value, onChange, options , defaultValue}) => {
   return (
      <select
         className={styles.mySelect}
         value={value}
         onChange = {event => onChange(event.target.value)}
      >
         <option disabled value="">{defaultValue}</option>
         {options.map(option => 
            <option key={option.value} value={option.value}>
               {option.name}
            </option>
         )}
      </select>
   );
};

export default MySelect;