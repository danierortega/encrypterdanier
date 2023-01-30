const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"

const semilla = 13;

function btnEncriptar(){
        const textoEncriptado = cifrar(textArea.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
}

//CIFRAR
function cifrar(c){
    let cifrado = ''
    for (var i=0; i<c.length; i++){
        console.log(c.charAt(i).charCodeAt());
        cifrado += (c.charCodeAt(i)+semilla).toString() + '&';
    }

    console.log(cifrado)
    return cifrado
}

function btnDesencriptar(){
    const textoEncriptado = descifrar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}


//DESCIFRAR
function descifrar(d){
    let descifrado = d.split('&');
    let descifradoFinal = '';
    
    for(let i=0; i<descifrado.length; i++){
        let descifrado2 = 0;
        descifrado2 = (Math.floor(descifrado[i])-semilla);
        descifradoFinal += String.fromCharCode(descifrado2);
    }

    descifradoFinal = descifradoFinal.slice(0,-1);
    console.log(descifradoFinal);
    return descifradoFinal
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
