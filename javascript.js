let y=0;
function afisareStart(){
    document.getElementById("button2").style.visibility="visible";
    document.getElementById("button3").style.visibility="visible";
    document.getElementById("button1").style.visibility="hidden";
    document.getElementById("button1").style.position="absolute";
}
function afisareC(){
    document.getElementById("text").innerHTML=" ";
    document.getElementById("TextBloc").style.visibility="visible";
    document.getElementById("button3").style.visibility="hidden";
    document.getElementById("button3").style.position="absolute";
    let x=Math.random()*11;
    console.log(y)
    switch(Math.floor(x)){
        case 0:
            document.getElementById("text").innerHTML="Dacă zâmbetul tău ar fi o monedă, ai fi banca centrală a fericirii.";
            break;
        case 1:
            document.getElementById("text").innerHTML="Ai o inimă mai mare decât oceanul..";
            break;
        case 2:
            document.getElementById("text").innerHTML="Ești mai rezistenta decât un diamant.";
            break;
        case 3:
            document.getElementById("text").innerHTML="Ești mai dulce decât mierea.";
            break;
        case 4:
            document.getElementById("text").innerHTML="Ai o minte mai ascuțită decât o sabie.";
            break;
        case 5:
            document.getElementById("text").innerHTML="Ești mai prețiosa decât toate comorile lumii.";
            break;
        case 6:
            document.getElementById("text").innerHTML="Dacă inteligența ar fi lumină, tu ai fi un far în noaptea întunecată.";
            break;
        case 7:
            document.getElementById("text").innerHTML="Sufletul tău vibrant aduce mai multă culoare în lumea mea decât un curcubeu după ploaie.";
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
function afisareS(){
    document.getElementById("text").innerHTML=" ";
    document.getElementById("TextBloc").style.visibility="visible";
    document.getElementById("button2").style.visibility="hidden";
    document.getElementById("button2").style.position="absolute";
    let x=Math.random()*11;
    console.log(y)
    switch(Math.floor(x)){
        case 0:
            document.getElementById("text").innerHTML="Frumusețea ta interioară și exterioară eclipsează chiar și cea mai splendidă operă de artă.";
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
            document.getElementById("text").innerHTML="Inteligența ta mă uimește în fiecare zi; ești mai înțeleaptă decât toate cărțile pe care le-am citit.";
            break;
        case 7:
            document.getElementById("text").innerHTML="Râsul tău este melodia mea preferată, nu mă satur niciodată să-l aud.";
            break;
        case 8:
            document.getElementById("text").innerHTML="Zâmbetul tău este mai strălucitor decât toate stelele pe cer noaptea.";
            break;
        case 9:
             document.getElementById("text").innerHTML="Dacă frumusețea ar fi timp, tu ai fi eternitatea.";
             break;
        case 10:
             document.getElementById("text").innerHTML="Bunătatea ta depășește granițele, întocmai ca o mare fără sfârșit.";
             break;
    } 
}