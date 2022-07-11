
//add novo cliente

const botaoAdicionar = document.querySelector("#adicionar-paciente");

//escutando evento
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    //pegando valores do input
    const form = document.querySelector("#form-adiciona");

    const nome = form.nome.value;
    const peso = form.peso.value;
    const altura = form.altura.value;
    const gordura = form.gordura.value;

    //criando tabela
    const pacienteTr = document.createElement("tr");

    const nomeTd = document.createElement("td");
    const pesoTd = document.createElement("td");
    const alturaTd = document.createElement("td");
    const gorduraTd = document.createElement("td");
    const imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura);

    //colocando um elemento dentro do outro, ou seja, criando filhosF
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    const tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});