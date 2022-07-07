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

//calculo do imc 
const imc = peso / (altura * altura); // 100 / 2.0 x 2.0 = 100 / 4 =>>>>>>> 25

console.log(imc);
