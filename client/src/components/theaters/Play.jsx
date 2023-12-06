import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './Play.module.css'

import { Link } from 'react-router-dom'

function Play({
    _id,
    title,
    producer,
    theater,
    imageUrl,
    isAuthenticated,
}) {
    return (
        <Card style={{ width: '18rem', display: 'inline-block', marginLeft: '30px', marginRight: '30px', marginBottom: '50px' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Producer: {producer}</ListGroup.Item>
            </ListGroup>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Theatre: {theater}</ListGroup.Item>
            </ListGroup>
            {isAuthenticated && (
                <Card.Body>
                    <Card.Link as={Link} to={`/plays/${_id}`}>Details</Card.Link>
                </Card.Body>
            )}
        </Card>
    );
}

export default Play;