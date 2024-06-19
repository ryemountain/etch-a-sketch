const container = document.querySelector(".container");

//Define the grid function
function resetGrid(gridSize) {

    const containerElements = container.querySelectorAll("*");

    containerElements.forEach(x => x.remove());

    for (let i = 0; i < gridSize; i++) {

        //create the columns
        const colDiv = document.createElement("div");
        colDiv.classList.add("column");
        container.appendChild(colDiv);
    
        //create the rows
        for (let i = 0; i < gridSize; i++) {
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("gridbox");
    
            rowDiv.addEventListener("mouseenter", () => {
                rowDiv.classList.add("gridbox-hovered");
            });
            colDiv.appendChild(rowDiv);
        }
    }
}

//Define the function for resetting the grid by clicking button

const btn = document.querySelector(".resetBtn");

btn.addEventListener("click", () => {
    const newSize = Number(prompt("Write the number of columns for your grid, for example 20 (the number " +
    "of rows will be the same)"));

    if (newSize > 100) {
        alert("The maximum size of the grid is 100x100!");
    }
    else
    {
        resetGrid(newSize)
    }
})

//Create the initial grid 
resetGrid(16);