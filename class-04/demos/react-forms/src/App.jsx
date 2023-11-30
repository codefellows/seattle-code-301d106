import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ResetAlert from './components/ResetAlert.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NumberFilter from './components/NumberFilter.jsx';
import ReactiveForm from './components/ReactiveForm.jsx';

function App() {

  const defaultEmail = 'anonymous';
  const [email, setEmail] = useState(defaultEmail);
  const [showAlert, setShowAlert] = useState(false);

  function handleComplete(info) {
    console.log(info);
    setShowAlert(true)
  }

  return (
    <Container>
      <header>
        <h1>Fun with Forms</h1>
        <p>The classic example is a login form</p>
      </header>
      <ReactiveForm
        email={email}
        setEmail={setEmail}
        defaultEmail={defaultEmail}
        onComplete={handleComplete} />
      <ResetAlert show={showAlert} onClose={() => setShowAlert(false)} email={email} />
      <p>But you can use form inputs on their own too</p>
      <NumberFilter />
    </Container>
  )
}

export default App;
