// Veriable delc

let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");
let saveEL = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let resetBtn = document.getElementById("reset-btn");


let count = 0



// fuction to add
function increment() {
    count += 1;
    countEl.textContent = count;
}

// function to Save
function save (){
    let conuntStr = count + " - ";
    saveEL.textContent += conuntStr;
    countEl.textContent = 0;
    count = 0;
}


// Function to reset
function reset() {
    count = 0;
    countEl.textContent = 0;
    saveEL.textContent = saveEL.innerText;
    
}

// Event lister

incrementBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", save);
resetBtn.addEventListener("click", reset);