/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';

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

function Header(props) {
  return (
    <header>
      <h1>{props.heading}</h1>
    </header>
  )
}

function Main() {
  const [count, setCount] = useState(0)

  function add() {
    setCount(count + 1);
  }

  function subtract() {
    setCount(count - 1);
  }

  function randomize() {
    setCount(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <main>
      <p>Let's keep track of things.</p>
      <section>
        <button onClick={subtract}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>
      </section>
      <p>If you're favorite number is {count} raise your hand.</p>
      <button onClick={randomize}>random</button>
    </main>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Tracking things since &copy;{props.copyright}</p>
    </footer>
  )
}

