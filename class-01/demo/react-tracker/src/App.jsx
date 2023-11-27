import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header heading="React Tracker" />
      <Main />
      <Footer copyright="2023" />
    </>
  )
}

export default App;
