let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let movie = document.querySelector(".movie");

const quotes = [
  {
    quote: '"May the force be with you."',
    movie: "Star Wars",
  },
  {
    quote: '"You\'re gonna need a bigger boat."',
    movie: "Jaws",
  },
  {
    quote: '"To infinity and beyond."',
    movie: "Toy Story",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  movie.innerText = quotes[random].movie;
});
