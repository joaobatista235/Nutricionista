var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta)

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            })
        }else{
            console.log(xhr.status);
            console.log(xhr.response);
        }

    })

    xhr.send();
})