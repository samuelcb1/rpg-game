import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Link from 'next/link';

function CardCharacter({ res }: any) {



  return (
    <div className="d-flex justify-content-around row" style={{ minHeight: "100%", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundImage: "url(/images/background/background.jpg)", paddingTop: "1rem", gap: '20px', maxWidth: "100%" }}>
      {res.map((res, index) => {
        return (
          <Card className='' style={{ width: '18rem', border: "1px solid red" }}>
            <Col xl md="auto">
              <Card.Img variant="top" src={res.image_card.url} />
            </Col>
            <Card.Body>
              <Card.Title>{res.name[0].text}</Card.Title>
              <Card.Text>
                {res.description[0].text}
              </Card.Text>
              <Link href={`/characters/${res.image_card.alt}`}>
                <Button variant="primary">Ver mais...</Button>
              </Link>
            </Card.Body>
          </Card>
        )
      })}
    </div>


  );
}

export default CardCharacter;