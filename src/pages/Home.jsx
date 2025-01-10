import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomCard from '../components/CustomCard';

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_ENV_URI}/movies`)
            .then((res) => {
                console.log(res.data);
                setMovies(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <Container>
            <Row className="mt-5">
                {movies.map((movie, i) => (
                    <Col key={i}>
                        <CustomCard
                            title={movie.title}
                            image={movie.image}
                            abstract={movie.abstract}
                        ></CustomCard>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
