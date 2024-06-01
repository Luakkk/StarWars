import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PlanetSearch.css';

const PlanetSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/planets?search=${query}`);
            setResults(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="search-container">
            <h1>Search Planets</h1>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <div className="results-container">
                <ul>
                    {results.map((planet) => (
                        <li key={planet._id}>
                            <Link to={`/planets/${planet._id}`}>{planet.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PlanetSearch;
