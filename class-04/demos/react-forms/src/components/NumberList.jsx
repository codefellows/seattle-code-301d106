import ListGroup from "react-bootstrap/ListGroup";

export default function NumberList(props) {

    return (
      <ListGroup>
        {props.numbers.map(numeral => (
          <ListGroup.Item key={numeral}>{numeral}</ListGroup.Item>
        ))}
      </ListGroup>
    )
  
}