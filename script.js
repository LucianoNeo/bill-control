var gastos = {  tipo: 'lanche', valor: 15, data: '23/01'}
var jan = [gastos]
var fev = [gastos]
var mes = [jan,fev ]


var novo = { tipo: 'parcelado', valor: 150, data: '23/01' }
jan.push(novo)
var novo = { tipo: 'fixa', valor: 35, data: '23/01' }
fev.push(novo)



function escolheMes() {
    var escolha = document.getElementById('mes')
    if (escolha.value == 'jan') {
        var res = document.getElementById('mostraFixas');
var elemento ='';
for (var i = 0; i < jan.length; i++) {
    elemento += "<tr><td>" + jan[i].data + " </td>";
    elemento += "<td>" + jan[i].valor + "</td>";
    elemento += "<td>" + jan[i].tipo + "</td></tr>";
  }
res.innerHTML = elemento;
    }else{
        var res = document.getElementById('mostraFixas');
var elemento ='';
for (var i = 0; i < fev.length; i++) {
    elemento += "<tr><td>" + fev[i].data + " </td>";
    elemento += "<td>" + fev[i].valor + "</td>";
    elemento += "<td>" + fev[i].tipo + "</td></tr>";
  }
res.innerHTML = elemento;
    }
    
}




  