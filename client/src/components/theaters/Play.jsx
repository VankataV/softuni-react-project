import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Link } from 'react-router-dom'

function Play({
    title,
    producer,
    theater,
    imageUrl,
    description
}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Producer: {producer}</ListGroup.Item>
            </ListGroup>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Theater: {theater}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link as={Link} to="/details">Details</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Play;