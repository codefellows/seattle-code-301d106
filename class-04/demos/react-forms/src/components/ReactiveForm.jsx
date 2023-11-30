import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default function ReactiveForm({setEmail, defaultEmail, onComplete}) {

  function handleFormSubmitted(event) {
    event.preventDefault();
    onComplete({
      email: event.target.formBasicEmail.value,
      password: event.target.formBasicPassword.value,
      notify: event.target.formBasicCheckbox.checked
    });
    // reset AFTER sending info
    event.target.reset();
  }

  function handleEmailInput(event) {
    if (event.target.value.length > 0) {
      setEmail(event.target.value);
    } else {
      setEmail(defaultEmail);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleFormSubmitted}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmailInput} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Receive notifications?" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}