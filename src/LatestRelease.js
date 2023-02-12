import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import scifiBooks from './esercizi/scifi.json';

function LatestRelease() {
    return (
        <Row xs={1} sm={2} md={2} lg={4} className="g-4 ml-0 mr-0">
        {scifiBooks.map((book, idx) => (
            <Col key={`${book.asin}_${idx}`} className="mb-2">
                <Card>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                        Asin {book.asin} - Prezzo {book.price}€
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
      );
}

export default LatestRelease;