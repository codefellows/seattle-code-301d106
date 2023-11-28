import Image from 'react-bootstrap/Image'
import { useState } from 'react';

export default function BeastImage(props) {

  const [status, setStatus] = useState('Yay');

  function handleClick() {
    
    // if(status === 'Yay') {
    //   setStatus('Nay');
    // } else {
    //   setStatus('Yay');
    // }

    // alternately
    setStatus(status === 'Nay' ? 'Yay' : 'Nay');
  }

  return (
    <div onClick={handleClick}>
      <Image src={props.image_url} alt="some horned beast" rounded fluid></Image>
      <h3>{status}</h3>
    </div>
  );
}