console.log('First task:');

const string1 = 'Hello';
const string2 = 'World!';

console.log(`${string1} ${string2}`);

console.log('Second task:');

multiply = (num1 = 1, num2 = 1) => num1 * num2;

console.log(multiply(4));

console.log('Third task:');

average = (...params) => {
  return (
    [...params].reduce((prevV, currV) => prevV + currV) / [...params].length
  );
};

console.log(average(2, 8, 3, 4));

console.log('Third task:');

const grades = [4, 5, 3, 5, 3, 3, 4, 5, 5, 5, 3, 1];

console.log(average(...grades));

console.log('Fourth task:');

const dataArray = [1, 4, 'Iwona', false, 'Nowak'];

const [, , firstName, , lastName] = dataArray;

console.log(`First name: ${firstName}\nLast name: ${lastName}`);
