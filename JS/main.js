const listPharases = ["Hello world", "Java Script", "School Garden", "Love Programming", "Ingenier Developer", "Space X", "Elon Musk", "Indra Li", "I Love You Li"];

const generateZonePlay = () => {
    let containerPhrase = document.getElementById("container-string");
    const phrase = listPharases[Math.floor(Math.random() * (listPharases.length - 1) + 1)];
    let fragment = document.createDocumentFragment();

    for(let i = 0; i < phrase.length; i++){
        let itemChar = document.createElement("DIV");
        itemChar.innerHTML = " ";
        fragment.appendChild(itemChar);
    }
    containerPhrase.appendChild(fragment);

    containerPhrase.style.gridTemplateColumns = `repeat(${phrase.length}, 1fr)`;

    return console.log("La palabra es"+phrase);
}

const checkToChart = (value) => {
    alert(`Seleccionaste la letra: ${value}`);
}
//Logic Buttons 

//Button to: inital play
var statusInital = true;
const inital = () => {
    if(statusInital){
        generateZonePlay();
        document.getElementById("btn-inital").style.visibility = 'hidden';
        statusInital = false;
    }else{
        document.getElementById("btn-inital").style.visibility = 'hidden';
    }
}

//https://drive.google.com/file/d/182TswNCEcrtWvnU9Itn-wscvyy-HfKm1/view