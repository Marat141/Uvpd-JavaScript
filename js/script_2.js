function changeImage() {
    // Získání hodnoty z inputu
    let url = document.getElementById('imageUrl').value;
    // Změna src atributu obrázku
    document.getElementById('randomImage').src = url;
}

let i = 1;
function Add(){

    let input = document.getElementById("input"); 
    let output = document.getElementById("output");
    
    console.log("Hodnota v inputu je: ", input);
    
    console.log("Hodnota v outputu je: ", output); 

    output.innerHTML += "<br>"  +i+ "." + input.value ; 

    i++; 
}

function SMAZAT(){
    output.innerHTML = "";
    i=1;
}