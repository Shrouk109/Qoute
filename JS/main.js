var quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "-- Steve Jobs",
    imgSrc: "imgs/steve.jpeg",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "-- John Lennon",
    imgSrc: "imgs/john.jpeg",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "-- Lao Tzu",
    imgSrc: "imgs/lao.jpeg",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "-- Sam Levenson",
    imgSrc: "imgs/sam.jpeg",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "-- Albert Schweitzer",
    imgSrc: "imgs/albert.jpeg",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "-- Theodore Roosevelt",
    imgSrc: "imgs/theodore.jpeg",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "-- Confucius",
    imgSrc: "imgs/chinese-author.jpeg",
  },
];
var index = -1;
var quoteDisplay = document.querySelector(".quote-text");
var quoteAuthor = document.querySelector(".name-author");
var img = document.querySelector(".author-img");

document.querySelector("button").addEventListener("click", () => {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === index);

  img.src = quotes[randomIndex].imgSrc;
  quoteDisplay.innerHTML = quotes[randomIndex].text;
  quoteAuthor.innerHTML = quotes[randomIndex].author;

  index = randomIndex;
});
