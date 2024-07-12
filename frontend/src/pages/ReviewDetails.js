import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function ReviewDetails() {
    const { id } = useParams();
    const { loading, error, data } = useFetch('http://localhost:1337/api/reviews/' + id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const review = data.data.attributes;

    return (
        <div className="review-card">
            <div className="rating">{review.rating}</div>
            <h2>{review.title}</h2>

            <small>console list</small>

            <p>{review.body[0].children[0].text}</p>
        </div>
    );
}
