import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router';

export default function Detail() {
    const params = useParams();

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_ENV_URI}/movies/${params.id}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [params.id]);

    return (
        <>
            <h1>Hello detail</h1>
        </>
    );
}
