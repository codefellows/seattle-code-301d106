
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Beasts from "./components/Beasts";
import Container from 'react-bootstrap/Container';
import imageUrls from './data.json';

function App() {
  return (
    <Container>
      <Header title="Beast Judge" />
      <Beasts message="Make your Beast Opinion Known" imageUrls={imageUrls}  />
      <Footer text="Your opinion counts!" />
    </Container>
  );
}

export default App;
