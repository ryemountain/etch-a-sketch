const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {

    //create the columns
    const colDiv = document.createElement("div");
    colDiv.classList.add("column");
    container.appendChild(colDiv);

    //create the rows
    for (let i = 0; i < 16; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("gridbox");
        colDiv.appendChild(rowDiv);
    }
}