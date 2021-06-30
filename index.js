const nameInput= document.querySelector(".place-scale");
const startBtn= document.querySelector(".button-style");
startBtn.addEventListener('click', function(){
    const nameValue= nameInput.value
    
    localStorage.setItem("name", nameValue);
});
