let i = 1;
function Add(){

    let input = document.getElementById("input"); // Propojujeme proměnou input s inputem v html pomocí jeho ID.
    let output = document.getElementById("output"); // Propojujeme proměnou output s <p> v html pomocí jeho ID.
    
    // Console.log vypisuje terminálové zprávy v prohlížeči, který najdete pokud dáte prozkoumat prvek a následně console.
    console.log("Hodnota v inputu je: ", input); // Zde si pro změnu controlujeme v consoli v prohlížeči, co se nám skutečně ukládá do proměné input.
    
    console.log("Hodnota v outputu je: ", output); // Pozor, zde jednotlivé datové typy oddělujeme "," jako v pythonu u print().

    output.innerHTML += "<br>"  +i+ "." + input.value ; // Řetězec zde spojujeme +, můžeme takto combinovat různé datové typy. Též můžete vypisovat i elementy jako je například <br>.

    i++; // Zkrácený zápis pro přidání jedné hodnoty pro i, respektive i = i+1;
}

//function Add1(){
//    let output = document.getElementById("output");
//    output.innerHTML += i + ". " + ":D" + " " ;
//    i++;
//}
//
//function Add2(){
//    let output = document.getElementById("output");
//    output.innerHTML += i + ". " + ":P" + "<br>" ;
//    i++;
//}
//
//function Add3(){
//    let output = document.getElementById("output");
//    output.innerHTML += i + ". " + "XD" + "<br>" ;
//    i++;
//}
//
//function SMAZAT(){
//    let output = document.getElementById("output");
//    output.innerHTML = "";
//    i=1;
//}

function SMAZAT(){
    output.innerHTML = "";
    i=1;
}

function Add_emoji(parametr){
    output.innerHTML+=" " + parametr;
    
}