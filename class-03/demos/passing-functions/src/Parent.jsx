import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Child from './Child';
import { useState } from 'react';
import mom from './assets/mom.jpg';

export default function Parent(props) {

  const [money, setMoney] = useState(30);
  const [billysMoney, setBillysMoney] = useState(0);

  function moneyRequest(amt) {
    const balance = money - amt;
    setMoney(balance); 
    setBillysMoney(billysMoney + amt);
    if(balance < 0) {
      props.onOverdraft();
    }
  }

  return (
    <CardGroup>
      <Card style={{ width: '18rem' }}>
        <Card.Img src={mom} />
        <Card.Body>
          <Card.Title>Parent</Card.Title>
          <Card.Text>I am the parent. I have { money } dollars.</Card.Text>
        </Card.Body>
      </Card>
      <Child billysMoney={billysMoney} askForMoney={moneyRequest} />
    </CardGroup>
  )
}
