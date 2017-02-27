var result = document.getElementById("svar");

document.getElementById("submit").onclick = function() {
    /*spørsmål 1*/
    var sporsmal1 = (document.getElementById("spm1-1"));
    var correctAnswers = 0;
    if (sporsmal1.checked){
        correctAnswers++;
    }
    
    /*spørsmål 2*/
    var sporsmal2 = Number(document.getElementById("spm2").value);
    if (sporsmal2 === 3){
        correctAnswers++;
    }
    
    /*spørsmål 3*/
    var sporsmal3 = (document.getElementById("spm3").value);
    if (sporsmal3 === "nei"){
        correctAnswers++;
    }
    
    /*spørsmål 4*/
    var sporsmal41 = (document.getElementById("spm4-1"));
    var sporsmal42 = (document.getElementById("spm4-2"));
    var sporsmal43 = (document.getElementById("spm4-3"));
    var sporsmal44 = (document.getElementById("spm4-4"));
    var sporsmal45 = (document.getElementById("spm4-5"));
    
    if ((sporsmal41.checked) && (sporsmal43.checked) && (sporsmal42.checked == false) && (sporsmal44.checked == false) && (sporsmal45.checked == false)){
        correctAnswers++;
    }
    
    /*spørsmål 5*/
    var sporsmal5 = document.getElementById("spm5");
    var strUser = sporsmal5.options[sporsmal5.selectedIndex].text;
    if (strUser === "H1"){
        correctAnswers++;
    }
        
    result.innerHTML = "Du fikk " + correctAnswers + " av 5 riktige";
    
}