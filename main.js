const list = document.querySelector(".list")[0];
const pencil = document.querySelector('#pencil');
const inputText = document.querySelector('#inputText');
const allItems = document.querySelector('#allItems');

pencil.addEventListener('click' , function(){
    allItems.innerHTML = ""
})
inputText.addEventListener('keydown', function(event){
    if(event.key == "Enter"){
        showText()
    }
})
function showText(){
    let h2 = document.createElement('h2');
    h2.innerHTML = "- " + inputText.value;

    h2.addEventListener('click' , function(){
        h2.style.textDecoration = "line-through"
    })

    allItems.insertAdjacentElement('beforeend' , h2)
    inputText.value = "";
}