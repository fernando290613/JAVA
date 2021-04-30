function carregaInfo(){
    var strUser = localStorage.getItem("userDASH");
    if (!strUser){
        window.location = "index.html";
        return;
    }

    fetch("http://localhost:8080/alarmes").then(resposta => resposta.json()).then(lista => preencher(lista));
}

function preencher(lista) {

    var relatorioSTR = `<table class="table table-hover" border="3">
    <thead>
       <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Descrição</th>
      </tr>
    </thead>
    <tbody>`;
    for (i = 0; i < lista.length; i++) {
        var alarme = lista[i];
        relatorioSTR = relatorioSTR + `<tr>
                                       <td>${alarme.id}</td>
                                       <td>${alarme.nome}</td>
                                       <td>${alarme.descricao}</td>
                                       </tr>`;

   }
    relatorioSTR += `     </tbody>
    </table>`;                                 

 
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