function validaUser() {
    var userStr = localStorage.getItem("userDASH");
    if (!userStr) {
        window.location = "index.html";
        return;
    }
}

function gerarRelatorio() {
    /*
    - recuperar os valores digitados nos campos de data
    - montar a URL para acessar esse back end
    - ao receber a resposta, extrair o JSON dela e montar o relatório
    */

    var txtIni = document.getElementById("txtDataInicio").value;
    var txtFim = document.getElementById("txtDataFim").value;
    var msgBody = { inicio: txtIni, fim: txtFim }
    var cabecalho = { method: "POST", body: JSON.stringify(msgBody), headers: { "content-type": "application/json" } }
    var url = `http://localhost:8080/eventosporperiodo`;

    fetch(url, cabecalho).then(resposta => resposta.json()).then(lista => preencheRelatorio(lista));
}

function preencheRelatorio(lista) {

    var strTable = `<table class="table table-hover" border="3">
   <thead>
      <tr>
         <th>#</th>
         <th>Data</th>
         <th>Alarme</th>
         <th>Equipamento</th>
         <th>IP</th>
     </tr>
   </thead>
   <tbody>`;
    for (i = 0; i < lista.length; i++) {
        var evento = lista[i];
        strTable = strTable + `<tr>
                                 <td>${evento.numSeq}</td>
                                 <td>${evento.data}</td>
                                 <td>${evento.alarme.nome}</td>
                                 <td>${evento.equipamento.hostname}</td>
                                 <td>${evento.equipamento.ipaddr}</td>
                              </tr>`;
    }


    strTable += `     </tbody>
   </table>`;

    document.getElementById("relatorio").innerHTML = strTable;
}

function botaoVoltar() {
    window.location = "relatorio.html";
    return;
}

function imprimir(){
       window.print();

}