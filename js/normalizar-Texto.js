// funcion para eliminar tildes o acentos 
function normalizarTexto(texto){
    var text1 = texto.replace(/ñ/gi,"#");
    var text2 = text1.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    var textoNormalizado = text2.replace(/#/gi,"ñ");
    return textoNormalizado;
}