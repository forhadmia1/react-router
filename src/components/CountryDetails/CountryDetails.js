import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {name} = useParams()
    const [country,setCountry]=useState({})
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${name}`)
        .then(data=> setCountry(data.data[0]))
    },[name])
    console.log(country)
    return (
        <div className='country-details'>
            <img src={country.flags?.png} alt="" />
            <h2>Name:{country.name?.common}</h2>
            <p>Area: {country.area}</p>
        </div>
    );
};

export default CountryDetails;