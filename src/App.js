import React, { useState, useEffect } from 'react';
import Cards from './components/cards/Cards';
import Chart from './components/charts/Chart';
import CountryPicker from './components/countryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/corona.png';

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchApi = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    fetchApi();
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="Covid-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
