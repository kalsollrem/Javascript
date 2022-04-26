const quotes = [
    {
        quote : "삶은 바쁘다1",
        author : "작성한 이1"
    },
    {
        quote : "삶은 바쁘다2",
        author : "작성한 이2"
    },
    {
        quote : "삶은 바쁘다3",
        author : "작성한 이3"
    },
    {
        quote : "삶은 바쁘다4",
        author : "작성한 이4"
    },
    {
        quote : "삶은 바쁘다5",
        author : "작성한 이5"
    },
    {
        quote : "삶은 바쁘다6",
        author : "작성한 이6"
    }
]

const quote  = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];      //배열에 입력된 것을 랜덤출력.

quote.innerText  = todaysQoute.quote;
author.innerText = todaysQoute.author;ㅉ