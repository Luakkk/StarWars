import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './StarshipSearch.css';

const StarshipSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/starships?search=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="search-container">
            <h1>Search Starships</h1>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <div className="results-container">
                <ul>
                    {results.map((starship) => (
                        <li key={starship._id}>
                            <Link to={`/starships/${starship._id}`}>{starship.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StarshipSearch;
