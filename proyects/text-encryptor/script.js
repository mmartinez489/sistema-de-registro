const textArea = document.querySelector(".text-area");
const textAreaOutput = document.querySelector(".text-area-output");
const copy = document.querySelector(".copyBtn");
copy.style.display = "none"


function checkInput (){
    let inputText = document.querySelector(".text-area").value;
    let check = inputText.match(/^[a-z]*$/);

    if(!check || check === 0) {
        alert("Only lowercase letters and no accents")
        location.reload();
        return true;
    }
}


function encryptBtn(){
    if(!checkInput()) {
        const encryptedText = encrypt(textArea.value)
        textAreaOutput.value = encryptedText
        textAreaOutput.style.backgroundImage = "none"
        textArea.value = "";
        copy.style.display = "block"
    
    }
}


function encrypt(stringEncrypted){
    let arrayCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncrypted = stringEncrypted.toLowerCase()

    for (let i=0; i < arrayCode.length; i++){
        if(stringEncrypted.includes(arrayCode[i][0])){ 
            stringEncrypted = stringEncrypted.replaceAll(arrayCode[i][0], arrayCode[i][1])
        }

    }
    return stringEncrypted
}

function decryptBtn(){
    const encryptedText = decrypt(textArea.value)
    textAreaOutput.value = encryptedText
    textArea.value = "";
    
}
  
    
function decrypt(stringDecrypted){
    let arrayCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDecrypted = stringDecrypted.toLowerCase()

    for (let i=0; i < arrayCode.length; i++){
        if(stringDecrypted.includes(arrayCode[i][1])){ 
            stringDecrypted = stringDecrypted.replaceAll(arrayCode[i][1], arrayCode[i][0])
        }

    }
    return stringDecrypted
}


function copyText(){
    textAreaOutput.select();
    navigator.clipboard.writeText(textAreaOutput.value)
    textAreaOutput.value = "";
    alert("Text Copied")
}