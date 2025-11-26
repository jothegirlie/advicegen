const one = document.querySelector(".one");
const button= document.querySelector("button");
const q = document.querySelector(".qui");
const span=document.querySelector("span")

fetch('https://dummyjson.com/quotes/random')
.then(res => res.json())
.then(data => console.log(data.quote));





button.addEventListener("click", function(){
    q.innerHTML=""
fetch('https://dummyjson.com/quotes/random')
.then(res => res.json())
.then(data => q.innerHTML=data.quote);
span.innerHTML=Math.floor(Math.random() * 10);



})

