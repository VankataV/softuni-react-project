import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Link } from 'react-router-dom'

function Theater() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>Theater Name</Card.Title>
                <Card.Text>
                    Theater Description
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Producer: </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link as={Link} to="/details">Details</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Theater;