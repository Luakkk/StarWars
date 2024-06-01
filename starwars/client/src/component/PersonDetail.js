import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './PersonDetail.css';

const PersonDetail = () => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        const fetchPerson = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/people/${id}`);
                setPerson(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPerson();
    }, [id]);

    if (!person) {
        return <div>Loading...</div>;
    }

    return (
        <div className="detail-container">
            <h1>{person.name}</h1>
            <p><strong>Height:</strong> {person.height}</p>
            <p><strong>Mass:</strong> {person.mass}</p>
            <p><strong>Starships:</strong> {person.starships.join(', ')}</p>
            {/* Add other details as needed */}
        </div>
    );
};

export default PersonDetail;
