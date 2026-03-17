
import React, { useState, use } from 'react';

import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([])

  
  const handleVisitedCountries = (country) => {
    console.log('handle visited country clicked', country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries)
  }
  const countriesData = use(countriesPromise);
  const countries =countriesData.countries
 
  return (
    <div >
      <h1>In the Countries:{countries.length}</h1> 
      <h3>Total country visited:{visitedCountries.length }</h3>
      <div className='countries'>
         {
          countries.map(country =>
            <Country
              country={country}
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
            >
              
          </Country>)

      }
     </div>
    </div>
  );
};

export default Countries ;