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

// const titleCased = () => {}

// const newTitle = [];

// for (const title of tutorials) {
//   newTitle.push(title);
// };

// function titleCased(title) {
//   return title;
// }

// const newTitle = tutorials.map(titleCased);

// const titleCased = tutorials.map(function(title) {
//   return title;
// });

let titleCased = () => { return tutorials.map(tutorials => 
{let title = tutorials.split(' ') 

for (let i = 0; i < title.length; i++) {
  title[i] = title[i][0].toUpperCase() + title[i].substr(1);
} 
return title.join(' ')});
}
console.log(titleCased(tutorials))


// const titleCased = tutorials.map(tutorials => { 
//   let title = tutorials.split(' ') 
  
//   for (let i = 0; i < title.length; i++) {
//     title[i] = title[i][0].toUpperCase() + title[i].substr(1);
//   } 
//   return title.join(' ')});
  
//   console.log(titleCased)