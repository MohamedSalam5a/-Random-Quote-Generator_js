
var Quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: " Oscar Wilde",
    },

    {
        quote: "“So many books, so little time.”",
        author: " Frank Zappa",
    },

    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "Albert Einstein",
    },

    {
        quote: "“A room without books is like a body without a soul.”",
        author: "Marcus Tullius Cicero",
    },

    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "Mae West",
    },

]
var repetitionQuote;
function clickQuote() {

    var box = "";

    var boxQuote = Math.floor(Math.random() * Quotes.length)

    while (repetitionQuote === boxQuote) {
        var boxQuote = Math.floor(Math.random() * Quotes.length)
    }

    repetitionQuote = boxQuote;


    box += `<p>${Quotes[boxQuote].quote}</p>
            <p>${Quotes[boxQuote].author}</p>`



    document.getElementById("text-quote").innerHTML = box;
}





