let container = document.querySelector(".board") 

function populateBoard(size) {
    for (let i = 0; i < (size * size); i++) {
        let div = document.createElement("div")
        div.classList.add("square")
        container.appendChild(div)
        div.addEventListener('mouseenter', ()=> {
            div.style.background = "blue";
        });
    }
}

populateBoard(16)

