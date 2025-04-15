//your code here
let inputbox = document.getElementById("evaluatedText");
let letterCount = document.getElementById("letterCount");

inputbox.addEventListener('input',()=>{

	letterCount.textContent = inputbox.value.length;
})