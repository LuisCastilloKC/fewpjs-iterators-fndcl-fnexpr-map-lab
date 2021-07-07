const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTutorial = tutorials.map(capitalize)
  return newTutorial
  // use the .map method on the tutorials to return a new array
}

function capitalize(str) {
  return str.split(' ').map( tutorial => tutorial.substring(0,1).toUpperCase() + tutorial.substring(1)).join(" ")
}