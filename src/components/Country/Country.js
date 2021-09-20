import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, flag, capital, population, region } = props.country;
    // console.log(props.country);
    return (
        <div className="country bg-info">
            <h4>This is: {name}</h4>
            <img src={flag} alt="" /> <br />
            <small>Region: {region}</small>
            <p>Capital is: {capital} Population : {population}</p>
        </div>
    );
};

export default Country;

