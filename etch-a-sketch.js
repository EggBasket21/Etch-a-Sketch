let currentSize = 16

let container = document.querySelector(".board") 

function populateBoard(size) {
    container.innerHTML = "";

    const squareSize = 800 / size;

    for (let i = 0; i < (size * size); i++) {
        let div = document.createElement("div")
        div.classList.add("square")

        div.style.width = `${squareSize}px`;
        div.style.height =`${squareSize}px`;

        container.appendChild(div)

        div.addEventListener('mouseenter', ()=> {
            div.style.background = "yellow";
        });
    }
}

function changeSize(input) {
    if(input >= 2 && input <= 100) {
        currentSize = input;
        populateBoard(currentSize);
    } else {
        console.log("Too many squares")
    }
}

populateBoard(currentSize)

const sizeInput = document.querySelector("input")

sizeInput.addEventListener("change", ()=> {
    let newSize = parseInt(sizeInput.value);
    changeSize(newSize)
})

const resetButton = document.querySelector("button")

resetButton.addEventListener("click", ()=> {
    populateBoard(currentSize)
})