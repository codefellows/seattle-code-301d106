/* eslint-disable react/no-unescaped-entities */
import Alert from 'react-bootstrap/Alert';

export default function ResetAlert({ show, onClose, email }) {
  
  if (show) {
    return (
      <Alert variant="success" onClose={onClose} dismissible>
        <Alert.Heading>Form for {email} submitted!</Alert.Heading>
        <p>
          I imagine the entered info is going off to a server somewhere.
          </p> 
         <p>
          Actually, I don't. I just display an alert. Do one thing well is my mantra.
        </p>
      </Alert>
    );
  }
}
