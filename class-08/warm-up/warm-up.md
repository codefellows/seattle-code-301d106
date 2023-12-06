# Warm-Up Exercise

Read through this code as if you are the interpreter. Find each of the mistakes in this code and write down the correct syntax for each mistake.

## app.jsx

```
import useState from 'react';
import Header from 'header';

function App {

  const {counter, setCounter} = useState();

  const addCount = () => {
    counter += 1;
  };

  return(
    <button click={addCount}>Click Me</button>
    <p>counter<p>
    <Header title='the best counter app in the world!'>
  );
}

export App;
```

## header.jsx

```
export function Header() {
  return <h1>{props.title}</h1>
}
```
