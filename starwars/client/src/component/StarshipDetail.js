import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './StarshipDetail.css';

const StarshipDetail = () => {
    const { id } = useParams();
    const [starship, setStarship] = useState(null);

    useEffect(() => {
        const fetchStarship = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/starships/${id}`);
                setStarship(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStarship();
    }, [id]);

    if (!starship) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail-container">
            <h1>{starship.name}</h1>
            <p><strong>Model:</strong> {starship.model}</p>
            <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
            {/* Add other details as needed */}
        </div>
    );
};

export default StarshipDetail;
