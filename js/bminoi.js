function szamitas(){
    var suly = document.getElementById("suly").value;
    var magassag = document.getElementById("magassag").value;
    
    var magassag2 = +magassag*+magassag;
    var osszeg = (suly / ((magassag * magassag) 
                                / 10000)).toFixed(2);

    document.getElementById("osszeg").innerHTML = osszeg 

    if (osszeg < 19.1 ) {
        document.getElementById("szoveg").innerHTML = "Sovány"
    } else if (osszeg >= 19.1 && osszeg < 27.3)  {
        
        document.getElementById("szoveg").innerHTML = "Normál testsúly"
    } else {
        document.getElementById("szoveg").innerHTML = "Túlsúly"
    }
}
