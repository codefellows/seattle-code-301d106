/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
function Main() {
  const initialCount = 42;
  const [count, setCount] = useState(initialCount)

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
      <p>Let's keep track of things starting at {initialCount}.</p>
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

export default Main;
