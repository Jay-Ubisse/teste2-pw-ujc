

function runScript() {
    const form = document.getElementById("form");

    form.onsubmit = (e)=>{
        e.preventDefault();
    }

    let requiredFields = document.getElementsByClassName("required");
    let labels = document.getElementsByTagName("label");
    let fieldsEmpty = [];
    let listOfFildsEmpy = "";
   for (let i = 0; i < requiredFields.length; i++) {
        if(requiredFields[i].value.length === 0) {
            fieldsEmpty[i] = requiredFields[i].name;
            listOfFildsEmpy = " " + listOfFildsEmpy + fieldsEmpty[i] + ", ";

            requiredFields[i].style.backgroundColor = "red";
            document.getElementById("messageArea").innerHTML = "Por favor, preencha os seguintes campos vazios:" + listOfFildsEmpy;
            document.getElementById("popup").style.backgroundColor = "#e8b15f";
            document.getElementById("popup").style.display = "block";
        } else {
            requiredFields[i].style.backgroundColor = "green";
            document.getElementById("messageArea").innerHTML = "Todos os campos foram preenchidos!";
            document.getElementById("popup").style.backgroundColor = "#93b087";
            document.getElementById("popup").style.display = "block";
        }
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}