var exo1 = 100;
console.log(tva(exo1));

function tva(prix){
    prix = prix * 1.20;
    return prix;
}

console.log(puissance(3,4));

function puissance(a,b){
    var c = a;
    for(var i = 1 ; i < b; i++){
        c = c * a
    }
    return c
}

// bissextile(2015);

function bissextile (année){
        if (année % 4 === 0 && année % 100 != 0) alert("cette année est bissextile")
        else if(année % 400 === 0) alert("cette année est bissextile")
        else alert("cette année n'est pas bissextile");
}

function factoriel(facto) {
    var result = 1;
    for(var i = 1; i < facto + 1; i++){
        var tempo = 1
        tempo = tempo * i;
        result = result * tempo;
    }
    return result;
}

function IS(CA) { 
    var result;
    var Mi;
    if (CA < 38000) {
        result = CA * 1.15;
    } else if ( CA >= 38000) {
        Mi = CA - 37999;
        result = (37999 * 0.15) + (Mi * 0.25);
    }
    return result;
}
bi = [];

for (var i = 1; i < 2011; i++ ) {
    if (i % 4 === 0 && i % 100 != 0) bi.push(i);
}
console.log(bi);