import { Card } from 'react-bootstrap';

export default function CustomCard({ title, image, abstract }) {
    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={`${import.meta.env.VITE_ENV_URI}${image}`}
            ></Card.Img>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{abstract}</Card.Text>
            </Card.Body>
        </Card>
    );
}
