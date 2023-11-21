import './square.css';

export default function Square(props) {
  render() {
    return <button className="square">{props.value}</button>
  }
}
