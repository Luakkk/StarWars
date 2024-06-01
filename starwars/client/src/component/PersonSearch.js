import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PersonSearch.css';

const PersonSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/people?search=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="search-container">
            <h1>Search People</h1>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <div className="results-container">
                <ul>
                    {results.map((person) => (
                        <li key={person._id}>
                            <Link to={`/people/${person._id}`}>{person.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PersonSearch;
