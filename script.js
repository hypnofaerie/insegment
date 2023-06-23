// 
const button_title = document.querySelector("[name='dropdown-button']")

button_title.addEventListener('click', (event) => {
    if (event.target.tagName != "LI") {
        return;
    }

    button_title.firstElementChild.innerText = event.target.innerText;
    button_title.blur();
});