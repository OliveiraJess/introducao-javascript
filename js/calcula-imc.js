//pega a classe titulo
const titulo = document.querySelector(".titulo");

//altera texto dentro da tag com a classe titulo
titulo.textContent = "Nutricionista";

//pega os pacientes
const pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);

    let paciente = pacientes[i];

    //pega peso do primeiro-pacientes
    const tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;

    //pega altura do primeiro-paciente
    const tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;

    //pegando o imc e exibindo no imc da tabela
    const tdImc = paciente.querySelector(".info-imc");

    //validacoes
    let pesoEhValido = validaPeso(peso)
    let alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    //calculo do imc 
    if (alturaEhValida & pesoEhValido) {
        const imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }


}

//valida peso
function validaPeso(peso) {

    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

//valida altura

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false
    }
}

function calculaImc(peso, altura) {

    let imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}