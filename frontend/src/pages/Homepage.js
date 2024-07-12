import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function Homepage() {
    const { data, loading, error } = useFetch('http://localhost:1337/api/reviews');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // Ensure data structure is correct before mapping
    if (!data || !data.data) return <p>No reviews available</p>;

    return (
        <div>
            {data.data.map(review => (
                <div key={review.id} className="review-card">
                    <div className="rating">{review.attributes.rating}</div>
                    <h2>{review.attributes.title}</h2>
                    <p>{review.attributes.body[0].children[0].text.substring(0, 200)}...</p>
                    <Link to={`/details/${review.id}`}>Read more</Link>
                </div>
            ))}
        </div>
    );
}
