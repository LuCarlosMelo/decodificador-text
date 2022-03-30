var botaoDescriptografar = document.querySelector('.descriptografar__botao');
var botaoCopiar = document.querySelector('.copiar__botao')

botaoDescriptografar.addEventListener('click', function(){
    var inputDescripto = document.querySelector('.descriptografar__entrada');
    var conteudoDescripto = inputDescripto.value;

    var inputCripto = document.querySelector('.criptografar__entrada');
    var y = renomearDescripto(conteudoDescripto);

    var letras = conteudoDescripto;
    var i=0;

    while (i <= letras.length){
         
        if (letras == letras.toLowerCase()){
            inputCripto.value = y;    
            break;

        } else{
            alert('Por favor, digite apenas letras em minúsculo');
            break;
        }

        i++;
    } 
    
      
})

function renomearDescripto(conteudoDescripto){

    var resultadoDescripto = conteudoDescripto.replace(/enter/gi, 'e')
    .replace(/imes/gs, 'i')
    .replace(/ai/gs, 'a')
    .replace(/ober/gs, 'o')
    .replace(/ufat/gs, 'u');

    return resultadoDescripto;
}

botaoCopiar.addEventListener('click', function(){
    var copiarTexto = document.querySelector('.descriptografar__entrada');
    copiarTexto.select();
    document.execCommand('copy');
})  