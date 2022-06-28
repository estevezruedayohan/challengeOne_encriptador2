
// función para encriptar un texto
function encriptarTexto(texto){
    var text1 = normalizarTexto(texto);
    var text2 = text1.toLowerCase();
    var textoEncriptado = "";

    for( var i = 0; i < text2.length; i++){
        var letra = text2[i];
        
        if(letra == "a"){
            letra = "ai";
        }if(letra == "e"){
            letra = "enter";
        }if(letra == "i"){
            letra = "imes";
        }if(letra == "o"){
            letra = "ober";
        }if(letra == "u"){
            letra = "ufat";
        }
        textoEncriptado = textoEncriptado+letra;
    }
    return textoEncriptado;
}