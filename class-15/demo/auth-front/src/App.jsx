import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import AuthButtons from './Auth/AuthButtons'

function App() {

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [requestResult, setRequestResult] = useState('Requires login');

  async function authRequest(url, method = 'GET') {
    const accessTokenSilently = await getAccessTokenSilently();

    const config = {
      headers: { "Authorization": `Bearer ${accessTokenSilently}` },
      baseURL: import.meta.env.VITE_SERVER_URL,
      url,
      method,
    };

    return await axios(config);
  }

  async function handleRequestClick() {
    try {
      const response = await authRequest('/ping');
      setRequestResult(response.data);
    } catch (error) {
      setRequestResult(error);
    }
  }

  return (
    <>
      <AuthButtons />
      {isAuthenticated && (
        <div>
          <h2>Profile</h2>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      )}
      <button onClick={handleRequestClick}>Ping</button>
      <p>Ping result: {requestResult}</p>
    </>
  )
}

export default App
