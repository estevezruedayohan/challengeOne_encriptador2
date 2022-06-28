//función para desencriptar un texto
function desencriptarTexto(texto){
    var text1 = normalizarTexto(texto);
    var textoDesencriptado = text1.replace(/ai/gi, "a").replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi, "u");
    return textoDesencriptado;
}