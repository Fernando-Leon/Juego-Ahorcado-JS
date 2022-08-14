const listPharases = ["Hello world", "Java Script", "School Garden", "Love Programming", "Ingenier Developer", "Space X", "Elon Musk", "Indra Li", "I Love You Li"];//List of phrases
//Variables Globals
var keyboard = document.getElementById("abc-container");
var areaPlace = document.getElementById("container-zone-player");
var instrucctions = document.getElementById("intrucctions");
var btnReload = document.getElementById("btn-refresh");
btnReload.style.display = "none";
areaPlace.style.display = "none";
instrucctions.style.display = "none";
var modal = document.getElementById("modal");
keyboard.style.display = "none";
modal.style.visibility = "hidden";
var data = null;
var intenets = 0;

const generateZonePlay = () => {//Generate area play - return: data -> [phrase, [ids], phrase.length]
    let containerPhrase = document.getElementById("container-string");
    let phraseResult = document.getElementById("pharse-correct");
    const phrase = listPharases[Math.floor(Math.random() * (listPharases.length - 1) + 1)];
    let fragment = document.createDocumentFragment();
    let fragmentResult = document.createDocumentFragment();
    let listId = [];
    let numberChars = phrase.length;
    for(let i = 0; i < phrase.length; i++){
        let itemChar = document.createElement("DIV");
        let itemCharResult = document.createElement("DIV");
        itemChar.innerHTML = " ";
        itemCharResult.innerHTML = `${phrase[i].toUpperCase()}`;
        itemChar.setAttribute("id", `char-${i}`);
        listId.push( `char-${i}`);
        if(phrase[i] === " "){
            numberChars--; 
            itemChar.setAttribute("class", "space-char");
        }
        fragment.appendChild(itemChar);
        fragmentResult.appendChild(itemCharResult);
    }
    containerPhrase.appendChild(fragment);
    phraseResult.appendChild(fragmentResult);
    containerPhrase.style.gridTemplateColumns = `repeat(${phrase.length}, 1fr)`;
    phraseResult.style.gridTemplateColumns = `repeat(${phrase.length}, 1fr)`;
    return [phrase, listId, numberChars];
}

const checkToChart = (value) => {//Function to check char 
    let listId = data[1];
    let phrase = data[0].toUpperCase();
    let numberChars = data[2];
    let status = false;

    for(let i = 0; i < phrase.length; i++) {
        if (phrase[i] === value){
            document.getElementById(listId[i]).innerHTML = value;
            status = true;
            intenets++;
        }
    }

    if(status == false){intentFailed();}

    disableKey(value);

    if(counterFailed < 8){
        if(intenets === numberChars){modalShow(true, data[0])}
    }else {
        modalShow(false, data[0]);
    }
}

const disableKey = (value) => {//Function to disable keys
    let itemParent = document.getElementById(`key-${value}`).parentNode;
    itemParent.removeAttribute("class", "container-char");
    itemParent.setAttribute("class","char-disabled");
}

const inital = () => {//Funcrion to starter play
    data = generateZonePlay(); 
    keyboard.style.display = "grid";
    areaPlace.style.display = "grid";
    instrucctions.style.display = "inline";
    btnReload.style.display = "inline";
    let area = document.getElementById("container-main");
    area.style.width = "70%";
    area.style.height = "70%";
    area.style.gridTemplateRows = "15% 55% 20% 10%";
    document.getElementById("btn-inital").style.display = 'none';
}

const modalShow = (result, phrase) => {
    let msgResult = document.getElementById("msg-result");
    let msgMoreInformation = document.getElementById("more-info");
    if(result){
        msgResult.innerHTML = "GANASTE";
        msgResult.setAttribute("class", "winner");
        msgMoreInformation.innerHTML = `La palabra es: ${phrase}`;
        winnerCanvas();
    }
    else {
        msgResult.innerHTML = "PERDISTE";
        msgResult.setAttribute("class", "loser");
        msgMoreInformation.innerHTML = `La palabra era: ${phrase}`;
        loserCanvas();
    }

    modal.style.visibility = "visible";
}

const reload = () => {location.reload();}//Reload Page

//Global vars to canvas
var c = document.getElementById("canvas-ahorcado");
var context = c.getContext("2d");
var counterFailed = 0;
//Coordinates fillRect(x, y, width, heigth)
const intentFailed = () => {//Function to generate canvas item ahorcado
    counterFailed++;
    context.fillStyle = "#0A3871";
    if(counterFailed === 1){context.fillRect(10, 145, 90, 1);}//Item - 1
    if(counterFailed === 2){context.fillRect(50, 5, 2, 140);}//Item - 2
    if(counterFailed === 3){context.fillRect(50, 5, 126, 1);}//Item - 3
    if(counterFailed === 4){context.fillRect(174, 5, 2, 18);}//Item - 4
    if(counterFailed === 5){context.strokeStyle = "#0A3871";context.strokeRect(155, 23, 40, 16);}//Item - 5 - HEAD
    if(counterFailed === 6){context.fillRect(174, 39, 2, 50);}//Item - 6 - body
    if(counterFailed === 7){// Item - 7 hands
        context.beginPath();
        context.moveTo(175, 39);
        context.lineTo(145, 60);
        context.stroke();
        context.beginPath();
        context.moveTo(175, 39);
        context.lineTo(205, 60);
        context.stroke();
    }
    if(counterFailed === 8){//Item 8 Legs
        context.beginPath();
        context.moveTo(175, 89);
        context.lineTo(145, 110);
        context.stroke();
        context.beginPath();
        context.moveTo(175, 89);
        context.lineTo(205,110);
        context.stroke();
        context.strokeStyle = "#0A3871";
    }
}

var cr = document.getElementById("canvas-result-ahorcado");
var contextr = cr.getContext("2d");

const winnerCanvas = () => {
    contextr.fillStyle = "#FFFFFF";
    contextr.beginPath();
    contextr.strokeStyle = "#0A3871";
    contextr.strokeRect(155, 23, 40, 16);
    contextr.beginPath();
    contextr.fillStyle = "#0A3871";
    contextr.fillRect(174, 39, 2, 50);
    contextr.beginPath();
    contextr.moveTo(175, 39);
    contextr.lineTo(145, 60);
    contextr.stroke();
    contextr.beginPath();
    contextr.moveTo(175, 39);
    contextr.lineTo(205, 60);
    contextr.stroke();
    contextr.beginPath();
    contextr.moveTo(175, 89);
    contextr.lineTo(145, 110);
    contextr.stroke();
    contextr.beginPath();
    contextr.moveTo(175, 89);
    contextr.lineTo(205,110);
    contextr.stroke();
    contextr.strokeStyle = "#0A3871";
}

const loserCanvas = () => {
    contextr.fillStyle = "#0A3871";
    contextr.fillRect(10, 145, 90, 1);
    contextr.fillRect(50, 5, 2, 140);
    contextr.fillRect(50, 5, 126, 1);
    contextr.fillRect(174, 5, 2, 18);
    contextr.beginPath();
    contextr.strokeStyle = "#0A3871";
    contextr.strokeRect(155, 23, 40, 16);
    contextr.beginPath();
    contextr.fillStyle = "#0A3871";
    contextr.fillRect(174, 39, 2, 50);
    contextr.beginPath();
    contextr.moveTo(175, 39);
    contextr.lineTo(145, 60);
    contextr.stroke();
    contextr.beginPath();
    contextr.moveTo(175, 39);
    contextr.lineTo(205, 60);
    contextr.stroke();
    contextr.beginPath();
    contextr.moveTo(175, 89);
    contextr.lineTo(145, 110);
    contextr.stroke();
    contextr.beginPath();
    contextr.moveTo(175, 89);
    contextr.lineTo(205,110);
    contextr.stroke();
    contextr.strokeStyle = "#0A3871";
}

console.log(data);