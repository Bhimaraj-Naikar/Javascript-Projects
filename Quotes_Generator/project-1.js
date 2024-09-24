let btn = document.querySelector('#new-btn')
let quote = document.querySelector('.quote');
let author = document.querySelector('.author')  

const newQuotes = [{
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
},
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },{
        quote: "Believe you can and you're halfway there.",
        author: 'dont know'
    },{
        quote: "The only way to do great work is to love what you do.",
        author: 'Steve Jobs'
    
    },{
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: 'Confucius'
    },{
        quote: "Success is not final, a failure is not fatal: It is the courage to continue that counts.",
        author: 'Winston Churchill'
    },{
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: 'Sam Levenson'
    },{
        quote: "You miss 100% of the shots you don't take.",
        author: 'Wayne Gretzky'
    },{
        quote: "I have not failed. I've just found 10,000 ways that won",
        author: 'Thomas Edison'
    
    },{
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: 'C.S. Lewis'
    },{
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: 'Nelson Mandela'
    },{
        quote: "Do something today that your future self will thank you for.",
        author: 'Unknown'
    },{
        quote: "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
        author: 'Albus Dumbledore'
    },{
        quote: "Do not let what you cannot do interfere with what you can do.",
        author: 'John Wooden'
    },{
        quote: "You don't have to be great to start, but you have to start to be great.",
    },{
        quote: "Keep your eyes on the stars, and your feet on the ground.",
        author: 'Theodore Roosevelt'
    },{
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: 'C.S. Lewis'
    },{
        quote: "The biggest risk is not taking any risk.",
        author: 'Mark Zuckerberg'
    } 
];

btn.addEventListener('click',function(){

    let random = Math.floor(Math.random() * newQuotes.length)


quote.textContent = newQuotes[random].quote
author.textContent = newQuotes[random].author
});