/* 
Abaixo de 17 Muito abaixo do peso
Entre 17 e 18,49 Abaixo do Peso
Entre 18,5 e 24,99 Peso Normal
Entre 25 e 29,99 Acima do Peso
*/

//peso/(altura*altura)

//o evento é passado por padrão pelo onsubmit
var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    //para não haver o refresh automático usamos:
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso/(altura*altura);
    imc = imc.toFixed(2);

    resultado = document.getElementById('resultado');

    if(imc<17){
        resultado.innerHTML = '<br/> Seu resultado é: ' + imc + '<br/> CUIDADO! Você está muito abaixo do peso.';
    }else if(imc>17 && imc <=18.49){
        resultado.innerHTML = '<br/> Seu resultado é: ' + imc + '<br/> Você está ABAIXO do peso.';
    }else if(imc>=18.5 && imc<24.99){
        resultado.innerHTML = '<br/> Seu resultado é: ' + imc + '<br/> Você está no peso IDEAL';
    }else if(imc>25 && imc<= 29.99){
        resultado.innerHTML = '<br/> Seu resultado é: ' + imc + '<br/> Você está ACIMA do peso';
    }else if(imc>=30){
        resultado.innerHTML = '<br/> Seu resultado é: ' + imc + '<br/> CUIDADO! Você está obeso.';
    }
    //para limpar os campos ao final do calculo
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}