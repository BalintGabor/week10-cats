const googleSearchButton = document.querySelector ("#btn-google-search");

googleSearchButton.addEventListener("click", function(event){
    event.preventDefault(); // gomb klikkeseményre default, hogy a formot elküldi
    const form = document.querySelector("#form-google-search");
    const searchTerm = form.querySelector('input[name="q"]').value;

    if (searchTerm === "") {
        alert("Írj már be valamit");
    } else {
        form.submit(); // elküldi a formot
    }
})