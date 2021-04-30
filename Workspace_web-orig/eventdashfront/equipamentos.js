function carregaInfo(){
    var strUser = localStorage.getItem("userDASH");
    if (!strUser){
        window.location = "index.html";
        return;
    }

    fetch("http://localhost:8080/equipamento").then(resposta => resposta.json()).then(lista => preencher(lista));
}

function preencher(lista){
    var relatorioSTR = "";

    for (i=0; i<lista.length; i++){
        var equipamento = lista[i];

        relatorioSTR += `<div class="row">
                            <div class="col-1"> ${equipamento.id} </div>
                            <div class="col-4"> ${equipamento.hostname} </div>
                            <div class="col-7"> ${equipamento.ipaddr} </div>
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