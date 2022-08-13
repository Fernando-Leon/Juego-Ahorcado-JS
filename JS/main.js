const listPharases = ["Hello world", "Java Script", "School Garden", "Love Programming", "Ingenier Developer", "Space X", "Elon Musk", "Indra Li", "I Love You Li"];//List of phrases
//Variables Globals
var keyboard = document.getElementById("abc-container");
var modal = document.getElementById("modal");
keyboard.style.visibility = "hidden";
modal.style.visibility = "hidden";
var data = null;
var intenets = 0;

const generateZonePlay = () => {//Generate area play - return: data -> [phrase, [ids], phrase.length]
    let containerPhrase = document.getElementById("container-string");
    const phrase = listPharases[Math.floor(Math.random() * (listPharases.length - 1) + 1)];
    let fragment = document.createDocumentFragment();
    let listId = [];
    let numberChars = phrase.length;
    for(let i = 0; i < phrase.length; i++){
        let itemChar = document.createElement("DIV");
        itemChar.innerHTML = " ";
        itemChar.setAttribute("id", `char-${i}`);
        listId.push( `char-${i}`);
        if(phrase[i] === " "){
            numberChars--; 
            itemChar.setAttribute("class", "space-char");
        }
        fragment.appendChild(itemChar);
    }
    containerPhrase.appendChild(fragment);
    containerPhrase.style.gridTemplateColumns = `repeat(${phrase.length}, 1fr)`;
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

    if(counterFailed < 9){
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
    keyboard.style.visibility = "visible";
    document.getElementById("btn-inital").style.visibility = 'hidden';
}

const modalShow = (result, phrase) => {
    let msgResult = document.getElementById("msg-result");
    let msgMoreInformation = document.getElementById("more-info");
    if(result){
        msgResult.innerHTML = "Ganaste";
        msgResult.setAttribute("class", "winner");
        msgMoreInformation.innerHTML = `La palabra es: ${phrase}`;
        winnerCanvas();
    }
    else {
        msgResult.innerHTML = "Perdiste";
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
    if(counterFailed === 1){context.fillRect(10, 145, 90, 5);}//Item - 1
    if(counterFailed === 2){context.fillRect(50, 5, 10, 140);}//Item - 2
    if(counterFailed === 3){context.fillRect(50, 5, 130, 5);}//Item - 3
    if(counterFailed === 4){context.fillRect(170, 5, 10, 20)}//Item - 4
    if(counterFailed === 5){context.fillRect(174, 25, 1, 8);}//Item - 5
    if(counterFailed === 6){context.fillRect(155, 32, 40, 16);}//Item - 6
    if(counterFailed === 7){context.fillRect(174, 44, 2, 55);}//Item - 7
    if(counterFailed === 8){context.fillRect(125, 60, 100, 0.7)}//Item - 8
    if(counterFailed === 9){
        //Item 9 - leg left
        context.beginPath();
        context.moveTo(175, 99);
        context.lineTo(140, 125);
        context.stroke();
        //Item 10 - leg rigth
        context.beginPath();
        context.moveTo(175, 99);
        context.lineTo(210,125);
        context.stroke();
    }
}

var cr = document.getElementById("canvas-result-ahorcado");
var contextr = cr.getContext("2d");

const winnerCanvas = () => {
    contextr.fillStyle = "#FFFFFF";
    contextr.fillRect(155, 32, 40, 16);
    contextr.fillRect(174, 44, 2, 55);
    contextr.fillRect(125, 60, 100, 0.7);
    contextr.beginPath();
    contextr.strokeStyle = "#FFFFFF";
    contextr.moveTo(175, 99);
    contextr.lineTo(140, 125);
    contextr.stroke();
    contextr.beginPath();
    contextr.strokeStyle = "#FFFFFF";
    contextr.moveTo(175, 99);
    contextr.lineTo(210,125);
    contextr.stroke();
}

const loserCanvas = () =>{
    contextr.fillStyle = "#FFFFFF";
    contextr.fillRect(10, 145, 90, 5);
    contextr.fillRect(50, 5, 10, 140);
    contextr.fillRect(50, 5, 130, 5);
    contextr.fillRect(170, 5, 10, 20);
    contextr.fillRect(174, 25, 1, 8);
    contextr.fillRect(155, 32, 40, 16);
    contextr.fillRect(174, 44, 2, 55);
    contextr.fillRect(125, 60, 100, 0.7);
    contextr.beginPath();
    contextr.strokeStyle = "#FFFFFF";
    contextr.moveTo(175, 99);
    contextr.lineTo(140, 125);
    contextr.stroke();
    contextr.beginPath();
    contextr.strokeStyle = "#FFFFFF";
    contextr.moveTo(175, 99);
    contextr.lineTo(210,125);
    contextr.stroke();
}