import Form from 'react-bootstrap/Form'

export default function OptionSelecter(props) {

  const handleChange = (event) => {
    const selection = event.target.value;
    props.onSelect(selection);
  }

  return (
      <Form.Select onChange={handleChange}>
        <option value="all">All</option>
        <option value="odd">Odds</option>
        <option value="even">Evens</option>
      </Form.Select>
  )
}