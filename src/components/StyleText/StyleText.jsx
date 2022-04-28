import React from 'react';
import styles from './StyleText.module.css'

const StyleText = () => {
   return (
      <div className='box'>
         <p className={styles.text_red}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, iusto.</p>
         <p className={styles['text_blue']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, iusto.</p>
         <p style={{color: 'green'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, iusto.</p>
      </div>
   );
};

export default StyleText;