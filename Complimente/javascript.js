function afisare(){
    document.getElementById("text").innerHTML=" ";
    let x=Math.random()*11;
    console.log(Math.floor(x))
    switch(Math.floor(x)){
        case 0:
            document.getElementById("text").innerHTML="Dacă zâmbetul tău ar fi o monedă, ai fi banca centrală a fericirii.";
            break;
        case 1:
            document.getElementById("text").innerHTML="Ești lumina zilelor mele, mereu aduci strălucire când te afli în preajmă.";
            break;
        case 2:
            document.getElementById("text").innerHTML="Zâmbetul tău este contagios, îmi încălzește inima de fiecare dată când îl văd.";
            break;
        case 3:
            document.getElementById("text").innerHTML="Ai o frumusețe interioară care strălucește chiar mai puternic decât cea exterioară.";
            break;
        case 4:
            document.getElementById("text").innerHTML="Prezența ta este cel mai mare cadou pe care îl puteam primi.";
            break;
        case 5:
            document.getElementById("text").innerHTML="Ești incredibil de talentată, mă impresionezi constant cu tot ceea ce faci.";
            break;
        case 6:
            document.getElementById("text").innerHTML="Dacă inteligența ar fi lumină, tu ai fi un far în noaptea întunecată.";
            break;
        case 7:
            document.getElementById("text").innerHTML="Râsul tău este melodia mea preferată, nu mă satur niciodată să-l aud.";
            break;
        case 8:
            document.getElementById("text").innerHTML="Ești ca o adiere de primăvară, proaspătă și plină de viață.";
            break;
        case 9:
             document.getElementById("text").innerHTML="Dacă frumusețea ar fi timp, tu ai fi eternitatea.";
             break;
        case 10:
             document.getElementById("text").innerHTML="Ești mai răcoritoare decât o limonadă într-o zi caniculară de vară.";
             break;
    } 
}