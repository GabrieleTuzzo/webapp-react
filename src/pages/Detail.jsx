import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function Detail() {
    const params = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_ENV_URI}/movies/${params.id}`)
            .then((res) => {
                setMovie(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [params.id]);

    return (
        <div className="container mt-5">
            {/* Movie Details Section */}
            <div className="row mb-4">
                <div className="col-md-4">
                    <img
                        src={`${import.meta.env.VITE_ENV_URI}${movie.image}`}
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-8">
                    <h1 className="fw-bold">{movie.title}</h1>
                    <p>
                        <strong>Director:</strong> {movie.director}
                    </p>
                    <p>
                        <strong>Genre:</strong> {movie.genre}
                    </p>
                    <p>
                        <strong>Release Year:</strong> {movie.release_year}
                    </p>
                </div>
            </div>

            {/* Abstract Section */}
            <div className="mb-4">
                <h2 className="mb-3">Abstract</h2>
                <p>{movie.abstract}</p>
            </div>

            {/* Reviews Section */}
            <div>
                <h2 className="mb-3">Reviews</h2>
                <div className="list-group">
                    {movie.reviews &&
                        movie.reviews.map((review) => (
                            <div
                                key={review.id}
                                className="list-group-item list-group-item-action flex-column align-items-start shadow-sm mb-3"
                            >
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{review.name}</h5>
                                    <small>Rating: {review.vote}/5</small>
                                </div>
                                <p className="mb-1">{review.text}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
