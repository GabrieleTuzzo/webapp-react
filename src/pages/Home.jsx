import { useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_ENV_URI}/movies`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <>
            <h1>Hello Home</h1>
        </>
    );
}
