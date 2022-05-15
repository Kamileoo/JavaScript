let el_id = 0;

let box_container = document.getElementsByClassName("box")[0];

document.getElementById("add-button").onclick = function() {
    // alert(remove_button[0]);
    let newRow = document.createElement("div");
    // newRow.className("box_row");
    newRow.classList.add('box-row');

    let row1 = document.createElement("label");
    row1.className = "col-l-2 col-m-0 col-s-0 sep-block";
    newRow.appendChild(row1);

    let row2 = document.createElement("input");
    row2.type = "text";
    row2.className = "col-l-2 col-m-3 col-s-12 title";
    newRow.appendChild(row2);

    let row3 = document.createElement("input");
    row3.type = "text";
    row3.className = "col-l-2 col-m-3 col-s-6 genre";
    newRow.appendChild(row3);

    let row4 = document.createElement("input");
    row4.type = "text";
    row4.className = "col-l-2 col-m-3 col-s-6 year";
    newRow.appendChild(row4);

    let buttons = document.createElement("div");
    buttons.className = "col-l-2 col-m-3 col-s-12 mods";

    let save = document.createElement("button");
    save.className = "button-save";
    save.innerHTML = "Save";
    save.addEventListener('click', save_button)
    buttons.appendChild(save);

    let remove = document.createElement("button");
    remove.className = "button-remove";
    remove.innerHTML = "Remove";
    remove.addEventListener('click', remove_button);
    buttons.appendChild(remove);

    newRow.appendChild(buttons);

    let row5 = document.createElement("label");
    row5.className = "col-l-2 col-m-0 col-s-0 sep-block";
    newRow.appendChild(row5);

    box_container.appendChild(newRow);
}

update_remove();


function remove_button(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
}

function save_button(event) {
    let parent = event.target.parentElement.parentElement;
    let button = event.target;
    
    let oldRow1 = parent.getElementsByClassName("title")[0];
    let newRow1 = document.createElement("p");
    newRow1.className = "col-l-2 col-m-3 col-s-12 title";
    newRow1.innerHTML = oldRow1.value;
    parent.replaceChild(newRow1, oldRow1);

    let oldRow2 = parent.getElementsByClassName("genre")[0];
    let newRow2 = document.createElement("p");
    newRow2.className = "col-l-2 col-m-3 col-s-6 genre";
    newRow2.innerHTML = oldRow2.value;
    parent.replaceChild(newRow2, oldRow2);

    let oldRow3 = parent.getElementsByClassName("year")[0];
    let newRow3 = document.createElement("p");
    newRow3.className = "col-l-2 col-m-3 col-s-6 year";
    newRow3.innerHTML = oldRow3.value;
    parent.replaceChild(newRow3, oldRow3);

    button.className = "button-edit";
    button.innerHTML = "Edit";
    button.removeEventListener('click', save_button);
    button.addEventListener('click', edit_button);
}

function edit_button(event) {
    let parent = event.target.parentElement.parentElement;
    let button = event.target;

    let oldRow1 = parent.getElementsByClassName("title")[0];
    let newRow1 = document.createElement("input");
    newRow1.type = "text";
    newRow1.className = "col-l-2 col-m-3 col-s-12 title";
    newRow1.value = oldRow1.innerHTML;
    parent.replaceChild(newRow1, oldRow1);

    let oldRow2 = parent.getElementsByClassName("genre")[0];
    let newRow2 = document.createElement("input");
    newRow2.type = "text";
    newRow2.className = "col-l-2 col-m-3 col-s-6 genre";
    newRow2.value = oldRow2.innerHTML;
    parent.replaceChild(newRow2, oldRow2);

    let oldRow3 = parent.getElementsByClassName("year")[0];
    let newRow3 = document.createElement("input");
    newRow3.type = "text";
    newRow3.className = "col-l-2 col-m-3 col-s-6 year";
    newRow3.value = oldRow3.innerHTML;
    parent.replaceChild(newRow3, oldRow3);

    button.className = "button-save";
    button.innerHTML = "Save";
    button.removeEventListener('click', edit_button);
    button.addEventListener('click', save_button);
}



function update_remove() {
    let remove_button = document.getElementsByClassName("button-remove");
    for (let i = 0; i < remove_button.length; i++) {
        let button = remove_button[i];
        button.addEventListener('click', function(event) {
            let buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.remove();
        })
    }
}