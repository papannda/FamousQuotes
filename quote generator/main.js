'use strict'
const lang = document.querySelector('html').lang;

if(lang === 'ja') {
    document.querySelector('option[value="index.html"]').selected = true;
    
} else if(lang === 'en') {
    document.querySelector('option[value="index-en.html"]').selected = true;   
    
    
} 
document.getElementById('lang').onchange = function() {
    location.href = document.getElementById('lang').value;
}
const quotes=[
    {text : "Nothing is impossible", person:"by Audrey Hepburn"},
    {text :"Life is like riding a bicucle", person : "by Albert Einstein"},
    {text:"You must be the change you wish to see in the world", person :"by Gandhi"},
    {text : "If you want happiness for an hour — take a nap. If you want happiness for a day — go fishing.If you want happiness for a year — inherit a fortune. If you want happiness for a life time — help someone else.",person:" by Chinese proverb",className: "no-margin"},
    {text :"Challenges are what make life interesting and overcoming them is what makes life meaningful.",person: "by Joshua J. Marine"}
    
];
const quoteElement = document.getElementById('quote');
const quotePersonElement = document.getElementById('quote-person');
const newQuoteButton = document.getElementById('new-quote');



function displayquote(){
    const randomIndex =Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    quoteElement.textContent = selectedQuote.text;
    quotePersonElement.textContent=selectedQuote.person;
    quoteElement.className=selectedQuote.className;
}
function resetQuote(){
    quoteElement.textContent="";
    quotePersonElement.textContent="";
    //quoteimageElement.src="";

}

newQuoteButton.addEventListener('click',displayquote);


resetQuote();



