import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import CustomCard from '../components/CustomCard';
import GlobalContext from '../contexts/globalContext';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const { setIsLoading } = useContext(GlobalContext);

    function fetchMovies() {
        axios
            .get(`${import.meta.env.VITE_ENV_URI}/movies`)
            .then((res) => {
                console.log(res.data);
                setMovies(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    useEffect(() => {
        setIsLoading(true);

        fetchMovies();

        setIsLoading(false);
    }, []);

    return (
        <Container>
            <Row className="mt-5">
                {movies.map((movie, i) => (
                    <Col key={i}>
                        <Link to={`/${movie.id}`}>
                            <CustomCard
                                title={movie.title}
                                image={movie.image}
                                abstract={movie.abstract}
                            ></CustomCard>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
