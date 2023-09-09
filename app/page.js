'use client';
import React, { Component } from 'react';
import styles from './styles/Home.module.css';
import Card from './components/Card.js'
import UniversityCard from './components/University.js';

export default function Home() {
  const [list,setList] = React.useState({})
  const [country,setCountry] = React.useState('Pakistan')

  const [universities,setUniversities] = React.useState([])
    const callAPI = async () => {
    try {
        const res = await fetch(
            `https://catfact.ninja/fact`,
            {
                method: 'GET',
                // headers: {
                //     'X-RapidAPI-Key': 'your-rapidapi-key',
                //     'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
                // },
            }
        );
        const data = await res.json();
        
        setList(data);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

const calluniAPI = async () => {
    try {
        const res = await fetch(
            `http://universities.hipolabs.com/search?country=${country}`,
            {
                method: 'GET',
                // headers: {
                //     'X-RapidAPI-Key': 'your-rapidapi-key',
                //     'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
                // },
            }
        );
        const data = await res.json();
        
        setUniversities(data);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};
const handleInputChange = (e) => {
    setCountry(e.target.value);
  };

    return (
        <div className={styles.container}>
            <main className={styles.main}>
            
            <button onClick={callAPI}>Call API</button>


<Card fact={list.fact} />


universities

<h1>University Information</h1>
<input type='text' id='country' value={country}
          onChange={handleInputChange}/>
<button className='button' onClick={calluniAPI}>Call Uni API</button>
      <div className="card-container">
        {universities.map((university, index) => (
          <UniversityCard key={index} university={university} />
        ))}
      </div>
            
            </main>
        </div>
    );
}