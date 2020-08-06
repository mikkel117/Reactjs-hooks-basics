import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { getItem } from './generalMethods';
// export const CountryList = () => {
export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getItem('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        setCountries(res);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, []);

console.log('test', countries);

  if (load) {
    return (
      <ul>
        {error ? (
          <li>{error.message}</li>
        ) : (
          countries.map((country, index) => (
            <p key={index} className="countrys">
              {country.name}
            </p>
          ))
        )}
      </ul>
    );
  } else {
    return <div>Loading...</div>;
  }
}
