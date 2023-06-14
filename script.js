const link = "https://type.fit/api/quotes";

const generateButton = document.querySelector('[data-generate-button]')
const quote = document.querySelector('[data-quote-output]')

generateButton.addEventListener("click",fetchQuote);

function fetchQuote(){
    fetch(link)
    .then(response => response.json())
    .then(data => {
      const randomQuoteIndex = Math.round(Math.random()*data.length);
      quote.innerHTML = data[randomQuoteIndex].text;
      (data[randomQuoteIndex]);
    });
}
fetchQuote();