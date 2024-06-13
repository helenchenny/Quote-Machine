
const newQuoteBtn = document.getElementById("new-quote")
const text = document.getElementById("text")
const author = document.getElementById("author")
const tweet = document.getElementById("tweet-quote")
const body = document.querySelector("body")
const i = document.querySelector("i")
const button = document.querySelector("button")

const colours = ["#923434", "#d07f3c", "#36c13f","#e7e312","#12e784","#33a587","#3bb6d7","#673bd7","#cb6be8","#eb4881","#e63131"]

async function getQuote() {
    const url = "https://api.api-ninjas.com/v1/quotes?category&X-Api-Key=xXvdNnoyzCDnZiLzQzzUOA==X4EXwA7N6UWoeiNG"
    const response = await fetch(url)
    const data = await response.json()

    const newAuthor = data[0].author
    const newQuote = data[0].quote

    text.innerHTML = `"${newQuote}"`;
    author.innerHTML = `-${newAuthor}`;
    tweet.href = `https://x.com/intent/post?hashtags=quotes&related=freecodecamp&text=%22${newQuote}%22+${newAuthor}`

    const randomColour = colours[Math.floor(Math.random() * colours.length)]
    
    text.style.color = randomColour;
    author.style.color = randomColour;
    body.style.background = randomColour;
    i.style.background = randomColour;
    button.style.background = randomColour;

}

getQuote()


newQuoteBtn.addEventListener("click",()=>{
    getQuote()
})

