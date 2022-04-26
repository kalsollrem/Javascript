const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
]

const changeimages = images[Math.floor(Math.random() * images.length)];      //배열에 입력된 것을 랜덤출력.


const bgImage = document.createElement("img");

bgImage.src = `img/${changeimages}`;

document.body.appendChild(bgImage);