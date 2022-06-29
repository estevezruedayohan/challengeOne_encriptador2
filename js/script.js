
var text_aencriptar = document.querySelector(".acodificar__text");
var text_encriptado = document.querySelector(".codificado__text");

var btn_reiniciar = document.querySelector("#reiniciar-Textos");
var btn_encriptar = document.querySelector(".btn__encriptar");
var btn_desencriptar = document.querySelector(".btn__desencriptar");

var img_codificado = document.querySelector(".aviso__codificado");
var tit1_codificado = document.querySelector(".titulo1-codificado");
var tit2_codificado = document.querySelector(".titulo2-codificado");

var msj_copiado = document.querySelector("#msj_copiar");
var btn_copiar = document.querySelector(".btn__Copiar");


// evento asignado al click del botón encriptar
btn_encriptar.addEventListener("click", function(){
    var texto = text_aencriptar.value;
    var esValido = verificarTexto(texto);
    
    if(esValido){
        img_codificado.classList.remove("visible");
        text_encriptado.classList.remove("invisible");
        tit1_codificado.classList.remove("visible");
        tit2_codificado.classList.remove("visible");
        btn_copiar.classList.remove("invisible");
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

    setTimeout(function(){
        msj_copiado.classList.add("visible");
        setTimeout(function(){
            msj_copiado.classList.add("fadeOut");
            msj_copiado.classList.remove("visible");
            text_encriptado.textContent = "";
        },1500);
        msj_copiado.classList.remove("fadeOut");    
    },500); 
    
    text_aencriptar.focus();
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

// evento para borrar el contenido de las cajas de texto
btn_reiniciar.addEventListener("click", function(){
    text_encriptado.textContent = "";
    text_aencriptar.value = "";
    img_codificado.classList.add("visible");
    text_encriptado.classList.add("invisible");
    tit1_codificado.classList.add("visible");
    tit2_codificado.classList.add("visible");
    btn_copiar.classList.add("invisible");
});

