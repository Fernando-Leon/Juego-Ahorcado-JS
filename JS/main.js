const listPharases = ["Hello world", "Java Script", "School Garden", "Love Programming", "Ingenier Developer", "Space X", "Elon Musk", "Indra Li", "I Love You Li"];

const generateZonePlay = () => {
    let containerPhrase = document.getElementById("container-string");
    const phrase = listPharases[Math.floor(Math.random() * (listPharases.length - 1) + 1)];
    let fragment = document.createDocumentFragment();
    let listId = [];
    let numberChars = phrase.length;

    for(let i = 0; i < phrase.length; i++){
        if(phrase[i] === " "){
            numberChars--;
        }
        let itemChar = document.createElement("DIV");
        itemChar.innerHTML = " ";
        itemChar.setAttribute("id", `char-${i}`);
        fragment.appendChild(itemChar);
        listId.push( `char-${i}`);
    }
    containerPhrase.appendChild(fragment);

    containerPhrase.style.gridTemplateColumns = `repeat(${phrase.length}, 1fr)`;

    console.log(listId)
    console.log(numberChars);
    return [phrase, listId, numberChars];
}

const checkToChart = (value) => {
    let listId = data[1];
    let phrase = data[0].toUpperCase();
    let numberChars = data[2];
    let intenets = 0;
    let status = false;
    for(let i = 0; i < phrase.length; i++) {
        if (phrase[i] === value){
            status = true;
            document.getElementById(listId[i]).innerHTML = value;
            disableKey(value);
        }
    }  
    if(intenets === numberChars){alert("Felicidades has encontrado la palabra completa")}
}

const disableKey = (value) => {
    let itemKey = document.getElementById(`key-${value}`);
    let char = `"${value}"`;
    itemKey.removeAttribute("onclick", `${checkToChart(char)}`);
    let itemParent = document.getElementById(`key-${value}`).parentNode;
    itemParent.removeAttribute("class", "container-char");
    itemParent.setAttribute("class","char-disabled");
}

const deleteValues = () => {
    frase = null;
    let deletePhrase = document.getElementById('container-string');
    while (deletePhrase.firstChild) { deletePhrase.removeChild(deletePhrase.firstChild) }
}

const reloadPlay = () => {
    deleteValues();
    statusInital = true;
    inital();
} 
//Logic Buttons 

//Button to: inital play
var statusInital = true;
var data = null;
const inital = () => {
    if(statusInital){
        data = generateZonePlay(); 
        document.getElementById("btn-inital").style.visibility = 'hidden';
        statusInital = false;
    }else{
        document.getElementById("btn-inital").style.visibility = 'hidden';
    }
}

//https://drive.google.com/file/d/182TswNCEcrtWvnU9Itn-wscvyy-HfKm1/view