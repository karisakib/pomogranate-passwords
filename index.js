const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
const numbers = '1234567890'.split('');
const symbols = `~!@#$%^*()_-+={[}]|\:;,.?/`.split('');

let pw = document.querySelector('.password-text');

const button = document.querySelector('.btn');
button.addEventListener('click', (e) => {
  e.preventDefault();
  eightGenerator();
})

const returnLower = (min = 0, max = lowerCase.length) => {
  let index = Math.floor(Math.random() * (max - min + 0));
  return lowerCase[index];
}

const returnUpper = (min = 0, max = upperCase.length) => {
  let index = Math.floor(Math.random() * (max - min + 0));
  return upperCase[index];
}

const returnNumber = (min = 0, max = numbers.length) => {
  let index = Math.floor(Math.random() * (max - min + 0));
  return numbers[index];
}

const returnSymbol = (min = 0, max = symbols.length) => {
  let index = Math.floor(Math.random() * (max - min + 0));
  return symbols[index];
}

const setGenerator = () => {
  let password = '';
  password += returnLower();
  password += returnUpper();
  password += returnNumber();
  password += returnSymbol();
  return password;
}

const eightGenerator = () => {
  pw.innerText =
    setGenerator() +
    setGenerator();
}

const twelveGenerator = () => {
  pw.innerHTML =
    setGenerator() +
    setGenerator() +
    setGenerator();
}

const sixteenGenerator = () => {
  pw.innerHTML =
    setGenerator() +
    setGenerator() +
    setGenerator() +
    setGenerator();
}