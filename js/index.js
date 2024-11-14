var quotes = [
  `“Be yourself; everyone else is already taken.”
`,
  `“If you tell the truth, you don't have to remember anything.”
`,
  `“A friend is someone who knows all about you and still loves you.”
`,
  `“Live as if you were to die tomorrow. Learn as if you were to live forever.”
`,
  `“It is better to be hated for what you are than to be loved for what you are not.”
`,
  `“A room without books is like a body without a soul.”
`,
];

var author = [
  "― Oscar Wilde",
  "― Mark Twain",
  "― Elbert Hubbard",
  "― Mahatma Gandhi",
  "― Andre Gide, Autumn Leaves",
  "― Marcus Tullius Cicero",
];

var oldNum;
function getRandom() {
  var newNum;
  do 
  {
    newNum = Math.floor(Math.random() * 6);
  } 
  while (newNum === oldNum);
  
  oldNum=newNum;
  return newNum;
}

function getQuote() {
  var container = "";
  var num = getRandom();

  container += `
    <p>${quotes[num]}</p>
        <span> ${author[num]}</span>`;

  document.getElementById("quote").innerHTML = container;
}
