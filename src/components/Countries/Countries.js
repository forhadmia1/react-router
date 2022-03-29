import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(data => setCountries(data.data))

    }, [])
    return (
        <div className='country-container'>
            <div className="menu">
                {
                    countries.map((country, index) =><li><Link className='link' to={`/countries/${country.name.common}`} key={index} >{country.name.common}
                    </Link></li>)
                }
            </div>
            <div className='details'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Countries;