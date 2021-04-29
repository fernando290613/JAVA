function carregaInfo(){
    var strUser = localStorage.getItem("userDASH");
    if (!strUser){
        window.location = "index.html";
        return;
    }

    fetch("http://localhost:8080/alarmes").then(resposta => resposta.json()).then(lista => preencher(lista));
}

function preencher(lista){
    var relatorioSTR = "";

    for (i=0; i<lista.length; i++){
        var alarme = lista[i];

        relatorioSTR += `<div class="row">
                            <div class="col-1"> ${alarme.id} </div>
                            <div class="col-4"> ${alarme.nome} </div>
                            <div class="col-7"> ${alarme.descricao} </div>
                         </div>`;
    }
    document.getElementById("relatorio").innerHTML = relatorioSTR;
}

function imprimir(){
    document.getElementById("botao").style = "visibility:hidden";
    window.print();
    document.getElementById("botao").style = "visibility:visible";
}

function botaoVoltar(){
    window.location = "relatorio.html";
    return;
}