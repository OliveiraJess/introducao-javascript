
//add novo paciente

const botaoAdicionar = document.querySelector("#adicionar-paciente");

//escutando evento
botaoAdicionar.addEventListener("click", function (event) {

    //mantendo no form os dados preenchidos
    event.preventDefault();

    const form = document.querySelector("#form-adiciona");

    //extraindo informacoes do paciente em form
    const paciente = obtemPacienteDoFormulario(form)



    //menagem erro
    const erros = validaPaciente(paciente)

    //validacao form
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    //adicionando paciente na tabela
    adicionaPacienteNaTabela(paciente)

    //limpando os dados preenchidos
    form.reset()

    //limpa as mensagens de erro apos o envio
    const mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = ""

});


function adicionaPacienteNaTabela(paciente) {
    //criando tabela tr e td
    const pacienteTr = montaTr(paciente)

    //add paciente na tabela
    const tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}



function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;

}

//criando tr
function montaTr(paciente) {

    //criando tr
    const pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //colocando um elemento dentro do outro, ou seja, criando filhos e add o monta td
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//criando td, add classe e passando o valor
function montaTd(dado, classe) {

    const td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function exibeMensagensDeErro(erros) {
    const ul = document.querySelector("#mensagens-erro")

    //apaga o li, limpa as mensagens de erro
    ul.innerHTML = ""

    erros.forEach(function (erro) {
        const li = document.createElement("li")
        li.textContent = erro;

        ul.appendChild(li)
    })
}

//validacao form

function validaPaciente(paciente) {

    const erros = [];

    if (paciente.nome.length == 0) {
        erros.push("Prencha o campo nome.");
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("O peso é inválido.");
    }
    if (paciente.peso.length == 0) {
        erros.push("Prencha o campo peso.");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("A altura é inválida.");
    }
    if (paciente.altura.length == 0) {
        erros.push("Prencha o campo altura.");
    }
    if (paciente.gordura.length == 0) {
        erros.push("Prencha o campo gordura.");
    }

    return erros
}