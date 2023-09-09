// components/CustomCard.js
import React from 'react';
import styles from './CustomCard.module.css';

const CustomCard = ({ fact }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{fact}</h2>
      
    </div>
  );
};

export default CustomCard;
