import { useState } from 'react';
import OptionSelecter from './OptionSelecter';
import NumberList from './NumberList';


const allNumerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function NumberFilter() {

  const [numerals, setNumerals] = useState(allNumerals);

  const handleSelect = (choice) => {

    let updatedNumerals;

    if (choice === 'odd') {

      updatedNumerals = allNumerals.filter(num => num % 2 === 1);

    } else if (choice === 'even') {

      updatedNumerals = allNumerals.filter(num => num % 2 === 0);

    } else {

      updatedNumerals = allNumerals;
    }

    setNumerals(updatedNumerals);
  }

  return (
    <div>
      <h2>Number Filter</h2>
      <OptionSelecter onSelect={handleSelect} />
      <NumberList numbers={numerals} />
    </div>
  )
}