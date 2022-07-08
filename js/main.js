//pega a classe titulo
const titulo = document.querySelector(".titulo");

//altera texto dentro da tag com a classe titulo
titulo.textContent = "Nutricionista";

//pega o id primeiro paciente
const paciente = document.querySelector("#primeiro-paciente");

//pega peso do primeiro-paciente
const tdPeso = paciente.querySelector(".info-peso");
const peso = tdPeso.textContent;

//pega altura do primeiro-paciente
const tdAltura = paciente.querySelector(".info-altura");
const altura = tdAltura.textContent;

//pegando o imc e exibindo no imc da tabela
const tdImc = paciente.querySelector(".info-imc");

//validacoes
let pesoEhValido = true;
let alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

//calculo do imc 
if (alturaEhValida & pesoEhValido) {
    const imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

