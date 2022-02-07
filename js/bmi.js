// var suly = Number(prompt("Súly:"))
// var magassag = Number(prompt("Magasság:"))

// var magassag2 = +magassag*+magassag;
// var osszeg = Math.ceil(+suly/magassag2);

// alert(osszeg)

// if (osszeg < 18.5) {
//     alert("Sovány")
// } else if (osszeg >= 18.5){
//     alert("Normál testsúly")
// } else if (osszeg >= 25) {
//     alert("Túlsúly")
// }

function szamitas(){
    var suly = document.getElementById("suly").value;
    var magassag = document.getElementById("magassag").value;
    
    var magassag2 = +magassag*+magassag;
    var osszeg = (suly / ((magassag * magassag) 
                                / 10000)).toFixed(2);

    document.getElementById("osszeg").innerHTML = osszeg 

    if (osszeg < 20.7 ) {
        document.getElementById("szoveg").innerHTML = "Sovány"
    } else if (osszeg >= 20.7 && osszeg < 27.3)  {
        
        document.getElementById("szoveg").innerHTML = "Normál testsúly"
    } else {
        document.getElementById("szoveg").innerHTML = "Túlsúly"
    }
}
