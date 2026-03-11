//23

let nume;

const complimenteR = [
"Arăți atât de bine încât oglinda cere autograf.",
"Ești mai tare decât Wi-Fi-ul cu semnal maxim.",
"Dacă inteligența ar fi sport olimpic, ai lua aurul.",
"Ești dovada vie că perfecțiunea există.",
"Arăți atât de bine încât până și Google ar zice: «N-am rezultate mai bune».",
"Dacă zâmbetul tău ar fi energie, ar alimenta un oraș.",
"Ești ca update-ul la telefon: îmbunătățești tot.",
"Ești atât de cool încât frigiderul e gelos.",
"Dacă farmecul ar fi monedă, ai fi miliardar.",
"Ești mai strălucitor decât ecranul pe brightness maxim.",
"Arăți atât de bine încât soarele cere lecții de la tine.",
"Ești ca un cheat code în viață.",
"Ești atât de deștept încât chiar și Wikipedia te citează.",
"Ești motivul pentru care oglinzile zâmbesc.",
"Ești mai rapid decât internetul când apare drama.",
"Ești atât de carismatic încât până și plantele cresc mai repede lângă tine.",
"Dacă stilul ar fi materie la școală, ai avea 10 pe linie.",
"Ești atât de tare încât până și cafeaua te energizează pe tine.",
"Ești mai luminos decât un LED nou.",
"Ești atât de amuzant încât stand-up comedianții iau notițe.",
"Ești dovada că universul știe să creeze capodopere.",
"Ești atât de bun încât până și GPS-ul ar spune «destinație perfectă».",
"Ești ca bateria la 100%: rar și valoros."
];
//30
const complimenteA = [
"Ești atât de frumoasă încât telefonul meu vrea să te pună ca wallpaper.",
"Zâmbetul tău ar trebui declarat sursă de energie regenerabilă.",
"Ești atât de cool încât până și înghețata se topește de emoție.",
"Ești mai strălucitoare decât toate filtrele de pe Instagram.",
"Ești atât de drăguță încât până și pisicile vor să stea lângă tine.",
"Ești motivul pentru care oglinzile zâmbesc.",
"Ești atât de frumoasă încât soarele cere lecții de la tine.",
"Ești mai dulce decât cea mai bună prăjitură.",
"Ești atât de elegantă încât moda ia notițe de la tine.",
"Ești mai specială decât ultima felie de pizza.",
"Ești atât de carismatică încât până și florile înfloresc mai repede lângă tine.",
"Ești mai luminoasă decât telefonul pe brightness maxim.",
"Ești atât de amuzantă încât și glumele râd cu tine.",
"Ești mai rară decât bateria la 100%.",
"Ești atât de frumoasă încât până și Google ar spune «n-am rezultate mai bune».",
"Ești mai cool decât partea rece a pernei.",
"Ești atât de simpatică încât până și ploaia se oprește să te vadă.",
"Ești mai dulce decât ciocolata.",
"Ești atât de elegantă încât rochiile se simt onorate să fie purtate de tine.",
"Ești mai strălucitoare decât stelele într-o noapte senină.",
"Ești atât de drăguță încât și emoji-urile zâmbesc când te văd.",
"Ești mai tare decât playlistul perfect.",
"Ești atât de specială încât universul a pus extra atenție când te-a creat.",
"Ești mai frumoasă decât orice filtru de pe TikTok.",
"Ești atât de cool încât până și frigiderul e gelos.",
"Ești mai dulce decât clătitele cu ciocolată.",
"Ești atât de carismatică încât și plantele cresc mai repede lângă tine.",
"Ești mai stylish decât toate revistele de modă.",
"Ești atât de drăguță încât până și norii se dau la o parte pentru tine.",
"Ești mai strălucitoare decât un diamant."
];

function afisareStart(){

    Titlu.style.padding = "0";
    document.getElementById("button2").style.visibility="visible";
    document.getElementById("button3").style.visibility="visible";
    document.getElementById("button1").style.visibility="hidden";
    document.getElementById("button1").style.position="absolute";
    document.getElementById("button4").style.visibility="visible";
    document.getElementById("input").style.position="absolute";
}
function afisareC(){
    document.getElementById("text").innerHTML=" ";
    document.getElementById("TextBloc").style.visibility="visible";
    document.getElementById("button3").style.visibility="hidden";
    document.getElementById("button3").style.position="absolute";
    document.getElementById("button4").style.visibility="hidden";
    document.getElementById("button4").style.position="absolute";
    document.getElementById("input").style.visibility="hidden";
    document.getElementById("input").style.position="absolute";
    document.getElementById("Arrow").style.visibility="visible";
    document.getElementById("ArrowBloc").style.visibility="visible";

    let x = Math.floor(Math.random() * complimenteR.length);
    console.log(x)
    document.getElementById("text").innerHTML=complimenteR[x];
}
function afisareS(){
    document.getElementById("text").innerHTML=" ";
    document.getElementById("TextBloc").style.visibility="visible";
    document.getElementById("button2").style.visibility="hidden";
    document.getElementById("button2").style.position="absolute";
    document.getElementById("button4").style.visibility="hidden";
    document.getElementById("button4").style.position="absolute";
    document.getElementById("Arrow").style.visibility="visible";
    document.getElementById("input").style.visibility="hidden";
    document.getElementById("input").style.position="absolute";
    document.getElementById("ArrowBloc").style.visibility="visible";
    let y = Math.floor(Math.random() * complimenteA.length);
    console.log(y);
    document.getElementById("text").innerHTML=complimenteA[y];
}
function back(){
    document.getElementById("TextBloc").style.visibility="hidden";
    document.getElementById("button3").style.visibility="visible";
    document.getElementById("button2").style.visibility="visible";
    document.getElementById("button4").style.visibility="visible";
    document.getElementById("button4").style.position="initial";
    document.getElementById("Arrow").style.visibility="hidden";
    document.getElementById("ArrowBloc").style.visibility="hidden";
    document.getElementById("button2").style.position="initial";
    document.getElementById("button3").style.position="initial";
    document.getElementById("input").style.visibility="hidden";
    document.getElementById("input").style.position="absolute";
    document.getElementById("text").innerHTML="";  
}
function afisareP(){
     let nume = document.getElementById("input").value;

const complimenteP = [
`${nume} are un zâmbet care poate lumina toată ziua.`,
`${nume} are un stil pe care nu-l poate copia nimeni.`,
`${nume} are o energie care face lumea mai bună.`,
`${nume} are o personalitate care atrage oamenii.`,
`${nume} are un simț al umorului genial.`,
`${nume} are un vibe pozitiv care se simte imediat.`,
`${nume} are o carismă naturală.`,
`${nume} are o inteligență care impresionează.`,
`${nume} are un farmec care nu poate fi explicat.`,
`${nume} are un zâmbet care face oamenii să zâmbească și ei.`,
`${nume} are o prezență care schimbă atmosfera în bine.`,
`${nume} are o energie mai bună decât cafeaua dimineața.`,
`${nume} are o personalitate care rămâne în minte.`,
`${nume} are o bunătate rară.`,
`${nume} are o combinație perfectă de inteligență și umor.`,
`${nume} are un stil care iese în evidență.`,
`${nume} are un vibe care face orice zi mai bună.`,
`${nume} are un talent natural de a face oamenii fericiți.`,
`${nume} are o carismă care atrage atenția.`,
`${nume} are un zâmbet care merită premiu.`,
`${nume} are o energie pozitivă molipsitoare.`,
`${nume} are un farmec care face conversațiile interesante.`,
`${nume} are o personalitate care face lumea mai colorată.`,
`${nume} are o prezență care aduce bună dispoziție.`,
`${nume} are un stil care nu poate trece neobservat.`,
`${nume} are un vibe care face totul mai plăcut.`,
`${nume} are o energie care ridică moralul oricui.`,
`${nume} are un zâmbet care ar putea opri traficul.`,
`${nume} are o personalitate care face orice loc mai interesant.`,
`${nume} are o carismă pe care nu o vezi în fiecare zi.`
];

    document.getElementById("input").style.visibility="visible";
    document.getElementById("input").style.position="initial";
    document.getElementById("button2").style.visibility="hidden";
    document.getElementById("button2").style.position="absolute";
    document.getElementById("button3").style.visibility="hidden";
    document.getElementById("button3").style.position="absolute";
    document.getElementById("button4").style.visibility="visible";
    document.getElementById("button4").style.position="initial";
    document.getElementById("TextBloc").style.visibility="visible";
    document.getElementById("Arrow").style.visibility="visible";
    document.getElementById("ArrowBloc").style.visibility="visible";

    if(nume === ""){
        alert("Te rog să introduci un nume pentru a primi complimente personalizate! ☺️");
        return;
    }

    let z = Math.floor(Math.random() * complimenteP.length);

    console.log(z);

    document.getElementById("text").innerHTML=complimenteP[z];  
}
