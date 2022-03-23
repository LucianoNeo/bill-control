var gastos = {  tipo: '', valor:'' , data: ''}
var jan = [gastos]
var fev = [gastos]
var mes = [jan,fev ]


var novo = { tipo: 'parcelado', valor: 150, data: '10/01' }
var novo1 = { tipo: 'fixa', valor: 45, data: '15/01' }
var novo2 = { tipo: 'lanches', valor: 25, data: '23/01' }
var novo3 = { tipo: 'extras', valor: 50, data: '28/01' }
jan.push(novo,novo1,novo2,novo3)
var novo = { tipo: 'parcelado', valor: 20, data: '05/01' }
var novo1 = { tipo: 'fixa', valor: 35, data: '17/02' }
var novo2 = { tipo: 'lanches', valor: 45, data: '18/02' }
var novo3 = { tipo: 'extras', valor: 5, data: '23/02' }
fev.push(novo,novo1,novo2,novo3)



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