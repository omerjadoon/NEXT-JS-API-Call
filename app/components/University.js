// components/CustomCard.js
import React from 'react';
import styles from './CustomCard.module.css';

const UniversityCard = ({ university }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{university.name}</h2>
      <p className={styles.country}>Country: {university.country}</p>
      <p className={styles.domain}>Website: <a href={university.web_pages[0]}>{university.domains[0]}</a></p>
    </div>
  );
};

export default UniversityCard;
