var text_aencriptar = document.querySelector(".acodificar__text");
var text_encriptado = document.querySelector(".codificado__text");
var btn_encriptar = document.querySelector(".btn__encriptar");
var btn_desencriptar = document.querySelector(".btn__desencriptar");
var btn_copiar = document.querySelector(".btn__Copiar");


// evento asignado al click del botón encriptar
btn_encriptar.addEventListener("click", function(){
    var texto = text_aencriptar.value;
    var esValido = verificarTexto(texto);
    
    if(esValido){
        var textoEncriptado = encriptarTexto(texto);
        text_encriptado.textContent = textoEncriptado;
    }else{
        alertify.alert('Texto Inválido', 'Debe ingresar algún texto!');
    }
    
});

// evento asignado al click del botón copiar
btn_copiar.addEventListener("click", function (){
    text_encriptado.select();
    document.execCommand('Copy');
    alertify.alert('Copiado!');
});

// evento asignado al click del botón desencriptar
btn_desencriptar.addEventListener("click", function(){
    var texto = text_aencriptar.value;
    var esValido = verificarTexto(texto);

    if(esValido){
        var textoDesencriptado = desencriptarTexto(texto);
        text_encriptado.textContent = textoDesencriptado;
    }else{
        alertify.alert('Texto Inválido', 'Nada a desencriptar!');
    }
});

