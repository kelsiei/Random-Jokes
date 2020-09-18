/******************************************
project 2 - Quote Show
******************************************/


/*** 
 * `quotes` array 
 ***/

var quotes = [{
        quote: 'You will face many defeats in life, but never let yourself be defeated.',
        source: 'Maya Angelou'
    },
    {
        quote: 'Whenever you feel like criticizing anyone … just remember that all the people in this world haven’t had the advantages that you’ve had.',
        source: 'F. Scott Fitzgerald',
        citation: 'The Great Gatsby',
        year: '1925'
    },
    {
        quote: 'Keep smiling, because life is a beautiful thing and there\'s so much to smile about.',
        source: 'Marilyn Monroe'
    },
    {
        quote: 'Always remember that you are absolutely unique. Just like everyone else.',
        source: 'Margaret Mead'
    },
    {
        quote: 'Only those who will risk going too far can possibly find out how far one can go.',
        source: 'Harry Crosby',
        citation: 'Preface to Transit of Venus',
        year: '1931'
    },
    {
        quote: 'Sometimes I wish I had a thousand lifetimes. I don\'t know,Phil.Maybe it\'s not a curse.Just depends on how you look at it.',
        source: 'Rita Hanson',
        citation: 'Groundhog Day'
    },
    {
        quote: 'Understanding is a two-way street.',
        source: 'Arthur Richmond',
        citation: 'Modern Quotations for Ready Reference, p. 455',
        year: '1947'
    },
    {
        quote: 'Life was meant to be lived, and curiosity must be kept alive. One must never, for whatever reason, turn his back on life.',
        source: 'Eleanor Roosevelt',
        citation: 'The Autobiography of Eleanor Roosevelt',
        year: '1960'
    },
    {
        quote: 'The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents.',
        source: 'H. P. Lovecraft',
        citation: 'The Call of Cthulhu'
    },
    {
        quote: 'Life is never fair, and perhaps it is a good thing for most of us that it is not.',
        source: 'Oscar Wilde'
    }
];

/***
 * `getRandomQuote` function
 ***/

var getRandomQuote = () => {
    // 1. Create a variable that generates a random number
    // between zero and the last index in the `quotes` array
    const randomNo = Math.floor(Math.random() * quotes.length);

    // 2. Use the random number variable and bracket notation
    // to grab a random object from the `quotes` array, and
    // store it in a variable
    var randomQuote = quotes[randomNo];

    // 3. Return the variable storing the random quote object
    return randomQuote;
}

/***
 * `printQuote` function
 ***/

function printQuote() {
    // 1. Create a variable that calls the getRandomQuote() function
    let RandomQuote = getRandomQuote();

    // 2. Create a variable that initiates your HTML string with
    // the first two <p></p> elements, their classNames,
    // and the quote and source properties
    let PtoHTML1 = "<p class='quote'>" + RandomQuote.quote + "</p>" + "<p class='source'>" + RandomQuote.source;

    // 3. Use an if statement to check if the citation/year property
    // exists, and if it does, concatenate a <span></span>
    // element, appropriate className, and citation property to the HTML string

    if (RandomQuote.citation != null) {
        PtoHTML1 += "<span class='citation'>" + RandomQuote.citation + "</span>";
    }
    if (RandomQuote.year != null) {
        PtoHTML1 += "<span class='year'>" + RandomQuote.year + "</span>"
    }
    PtoHTML1 += "</p>";
    // 6. set the innerHTML of the quote-box div to equal the
    // complete HTML string}
    document.getElementById("quote-box").innerHTML = PtoHTML1;

    //console.log(document.getElementById("quote-box").innerHTML); Used to check for errors, by seeing how the HTML was written
    console.log(RandomQuote);
    console.log(RandomQuote.year);
    console.log(RandomQuote.source);
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);