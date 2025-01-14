import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import GlobalContext from '../contexts/globalContext';

export default function Detail() {
    const params = useParams();
    const [movie, setMovie] = useState({});
    const [review, setReview] = useState({ name: '', text: '', vote: '' });
    const { setIsLoading } = useContext(GlobalContext);

    useEffect(() => {
        fetchMovie();
    }, [params.id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReview((prevReview) => ({ ...prevReview, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetchReviews();
    };

    function fetchMovie() {
        setIsLoading(true);

        axios
            .get(`${import.meta.env.VITE_ENV_URI}/movies/${params.id}`)
            .then((res) => {
                setMovie(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    function fetchReviews() {
        axios
            .post(
                `${import.meta.env.VITE_ENV_URI}/movies/${params.id}/review`,
                review
            )
            .then((res) => {
                setReview({ name: '', text: '', vote: '' });
                fetchMovie();
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className="container mt-5">
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

            <div className="mb-4">
                <h2 className="mb-3">Abstract</h2>
                <p>{movie.abstract}</p>
            </div>

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

            <div className="mt-4">
                <h2>Add Your Review</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={review.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">
                            Review
                        </label>
                        <textarea
                            id="text"
                            name="text"
                            className="form-control"
                            rows="3"
                            value={review.text}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="vote" className="form-label">
                            Vote
                        </label>
                        <input
                            type="number"
                            id="vote"
                            name="vote"
                            className="form-control"
                            value={review.vote}
                            onChange={handleInputChange}
                            min="1"
                            max="5"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit Review
                    </button>
                </form>
            </div>
        </div>
    );
}
