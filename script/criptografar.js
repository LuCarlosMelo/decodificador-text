var botaoCriptografar = document.querySelector('.botao__criptografar');

botaoCriptografar.addEventListener('click', function(){
    var inputCripto = document.querySelector('.criptografar__entrada');
    var conteudoCripto = inputCripto.value;

    var x = renomearCripto(conteudoCripto);
        
    var inputDescripto = document.querySelector('.descriptografar__entrada');

    var strings = conteudoCripto;
    var i=0;
    
    while (i <= strings.length){
        
        if (strings == strings.toLowerCase()){
            inputDescripto.value = x;

            inputCripto.value = '';     
            i++;
            break;
        } else{
            alert('Por favor, digite apenas letras em minúsculo');
            break;
        }
    }    
})

function renomearCripto(conteudoCripto){

    var resultadoCripto = conteudoCripto.replace(/e/gi, 'enter')
    .replace(/i/gi, 'imes')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat');

    return resultadoCripto;
}
       