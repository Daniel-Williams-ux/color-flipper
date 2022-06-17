const colors = ["green", "red", "rgb(133, 122, 200)", "#f15025"];

const btn = document.getElementById('btn-btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
 //get random number between 0 and 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber)
  document.body.style.backgroundColor = colors[randomNumber];
  color.texrContent = colors[randomNumber];
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}