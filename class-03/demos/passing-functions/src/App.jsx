import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Parent from './Parent';
import OverdraftModal from './OverdraftModal';
import { useState } from 'react';

function App() {

  const [showOverdraftWarning, setShowOverdraftWarning] = useState(false);


  function overdraftHandler() {
    setShowOverdraftWarning(true);
  }

  function closeHandler() {
    setShowOverdraftWarning(false);
  }

  return (
    <div>
      <Header title='Billy is a teenager' />
      <Parent onOverdraft={overdraftHandler} />
      <OverdraftModal show={showOverdraftWarning} onClose={closeHandler} />
    </div>
  );
}

export default App;



