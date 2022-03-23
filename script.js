var gastos = {  tipo: '', valor:'' , data: ''}
var jan = [gastos]
var fev = [gastos]
var mes = [jan,fev ]


var novo = { tipo: 'parcelado', valor: 150, data: '23/01' }
jan.push(novo)
var novo = { tipo: 'fixa', valor: 35, data: '23/02' }
fev.push(novo)



function escolheMes() {
    var escolha = document.getElementById('mes')
    if (escolha.value == 'jan') {
        desenhaTela(jan)
    } else{
        desenhaTela(fev)
  }
}
  

function desenhaTela(mes) {
    var res = document.getElementById('mostraFixas');
var elemento ='';
for (var i = 0; i < mes.length; i++) {
    elemento += "<tr><td>" + mes[i].data + " </td>";
    elemento += "<td>" + mes[i].valor + "</td>";
    elemento += "<td>" + mes[i].tipo + "</td></tr>";
  }
res.innerHTML = elemento;
}