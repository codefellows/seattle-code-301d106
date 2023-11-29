import teen from './assets/teen.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Child(props) {

  function askForTenDollars() {
    props.askForMoney(10);
  }

  function askForTwentyDollars() {
    props.askForMoney(20);
  }

  return (
    <Card>
      <Card.Img variant="top" src={teen} />
      <Card.Body>
        <Card.Title>Billy</Card.Title>
        <Card.Text>
          I am the Billy. I have {props.billysMoney} dollars.
        </Card.Text>
        <Button onClick={askForTenDollars} variant="primary">Ask parent for 10 dollars</Button>
        <Button onClick={askForTwentyDollars} variant="primary">Ask parent for 20 dollars</Button>
      </Card.Body>
    </Card>
  )
}
