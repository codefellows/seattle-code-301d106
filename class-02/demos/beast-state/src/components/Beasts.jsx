import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BeastImage from './BeastImage';

function Beasts(props) {
  return (
    <div>
      <h2>{props.message}</h2>
      <Container>
        <Row>
          <Col>
            <BeastImage image_url={props.imageUrls[0].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={props.imageUrls[1].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={props.imageUrls[2].image_url} />
          </Col>
        </Row>
        <Row>
          <Col>
            <BeastImage image_url={props.imageUrls[3].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={props.imageUrls[4].image_url} />
          </Col>
          <Col>
            <BeastImage image_url={props.imageUrls[5].image_url} />
          </Col>
        </Row>

      </Container>
    </div>
  );
}


export default Beasts;