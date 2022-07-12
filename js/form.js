
//add novo paciente

const botaoAdicionar = document.querySelector("#adicionar-paciente");

//escutando evento
botaoAdicionar.addEventListener("click", function (event) {

    //mantendo no form os dados preenchidos
    event.preventDefault();

    const form = document.querySelector("#form-adiciona");

    //extraindo informacoes do paciente em form
    const paciente = obtemPacienteDoFormulario(form)

    //criando tabela tr e td
    const pacienteTr = montaTr(paciente)

    //add paciente na tabela
    const tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    //limpando os dados preenchidos
    form.reset()

});

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