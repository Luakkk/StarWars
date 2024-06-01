import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './PlanetDetail.css';

const PlanetDetail = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/planets/${id}`);
                setPlanet(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPlanet();
    }, [id]);

    if (!planet) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail-container">
            <h1>{planet.title}</h1>
            <p><strong>Population:</strong> {planet.population}</p>
            <p><strong>Climate:</strong> {planet.climate}</p>
            <p><strong>Terrain:</strong> {planet.terrain}</p>
            {/* Add other details as needed */}
        </div>
    );
};

export default PlanetDetail;
