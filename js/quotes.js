const quotes = [
  {
    quote:"When you go through hardships and decide not to surrender, that is strength.",
    author:"Arnold Schwarzenegger"
  },
  {
    quote:"Tough times never last, but tough people do.",
    author:"Robert H. Schuller"
  },
  {
    quote:"Never accept the world as it appears to be, dare to see it for what it could be",
    author:"Dr.Harold. Winston"
  },
  {
    quote:"But I know, somehow, that only when it is dark enough can you see the stars.",
    author:"Martin Luther King, Jr"
  },
  {
    quote:"Some people dream of success, while other people get up every morning and make it happen",
    author:"Wayne Huizenga"
  },
  {
    quote:"The only thing worse than starting something and failing is not starting something.",
    author:"Seth Godin"
  },
  {
    quote:"If you really want to do someting, you'll find a way. If you do not, you'll find an excuse.",
    author:"Jim Rohn"
  },
  {
    quote:"You can not change what you are, only what you do.",
    author:"Philip Pullman"
  },
  {
    quote:"They always say thime chagnes things, but you actually have to change them yourself.",
    author:"Andy Warhol"
  },
  {
    quote:"Only I can change my life. No one can do it for me.",
    author:"Carol Burnett"
  },
  {
    quote:"Courage doesn't always roar. Sometimes courage is the little voice at the end of the day that says I'll try again tomorrow.",
    author:"Mary Anne"
  },
  {
    quote:"You're braver than you believe, and stronger than you seem, and smarter than you think.",
    author:"A.A.Milne"
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;