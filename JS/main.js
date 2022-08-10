const listPharases = ["Hello world", "Java Script", "School Garden", "Love Programming", "Ingenier Developer", "Space X", "Elon Musk", "Indra Li", "I Love You Li"];
const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']

const generatePharase = () => {
    let pharaseContent = document.getElementById("container-string"); 
    let pharase = listPharases[Math.floor(Math.random() * (listPharases.length - 0) + 0)];
    let fragmentMain = document.createDocumentFragment();

    for(let i = 0; i < pharase.length; i++) {
        let itemCharacter = document.createElement("DIV");
        itemCharacter.setAttribute("class", "div-character");
        (pharase[i] === " ") ? itemCharacter.innerHTML = "-": itemCharacter.innerHTML = pharase[i]; 
        fragmentMain.appendChild(itemCharacter);
    }

    pharaseContent.appendChild(fragmentMain);

    let numDiv = document.getElementsByClassName("div-character").length;
    document.getElementById("container-string").style.gridTemplateColumns = `repeat(${numDiv}, 1fr)`;
}

const generateAbc = () =>{
    let containerAbc = document.getElementById("abc-container");
    let fragmetAbc = document.createDocumentFragment();
    for(let i = 0; i < abc.length; i++){
        let containerDiv = document.createElement("div");
        containerDiv.setAttribute("class", "conatiner-char")
        let itemChar = document.createElement("div");
        itemChar.setAttribute("class", "char");
        itemChar.innerHTML = abc[i];

        containerDiv.appendChild(itemChar);
        fragmetAbc.appendChild(containerDiv);
    }
    containerAbc.appendChild(fragmetAbc);
} 
generateAbc();