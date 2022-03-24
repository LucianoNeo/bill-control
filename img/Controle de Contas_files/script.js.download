var gastos = {nome:'',  tipo: '', valor:'' , data: ''}
var jan = [gastos]
var fev = [gastos]
var mes = [jan,fev ]


var novo = {nome:'peças', tipo: 'parcelado', valor: 150, data: '10/01' }
var novo1 = {nome:'internet', tipo: 'fixa', valor: 45, data: '15/01' }
var novo2 = {nome:'dom augustinho', tipo: 'lanches', valor: 25, data: '23/01' }
var novo3 = {nome:'farmacia', tipo: 'extras', valor: 50, data: '28/01' }
jan.push(novo,novo1,novo2,novo3)
var novo = {nome:'olga', tipo: 'parcelado', valor: 20, data: '05/01' }
var novo1 = {nome:'net', tipo: 'fixa', valor: 35, data: '17/02' }
var novo2 = {nome:'danidu', tipo: 'lanches', valor: 45, data: '18/02' }
var novo3 = {nome:'farmacia', tipo: 'extras', valor: 5, data: '23/02' }
fev.push(novo,novo1,novo2,novo3)



function escolheMes() {
    var escolha = document.getElementById('mes')
    if (escolha.value == 'jan') {
        desenhaTela(jan)
    } else{
        desenhaTela(fev)
  }
}


function filtraFixa(conta){
    return conta.tipo == 'fixa';
}

function filtraExtras(conta){
    return conta.tipo == 'extras';
}

function filtraParcelado(conta){
    return conta.tipo == 'parcelado';
}

function filtraLanches(conta){
    return conta.tipo == 'lanches';
}


function desenhaTela(mes) {
    var fixas = mes.filter(filtraFixa);
    var extras = mes.filter(filtraExtras);
    var parcelado = mes.filter(filtraParcelado);
    var lanches = mes.filter(filtraLanches);
    var res = document.getElementById('mostraFixas');
    var elemento ='';
    
    for (var i = 0; i < fixas.length; i++) {
        elemento += "<tr><td>" + fixas[i].data + " </td>";
        elemento += "<td>" + fixas[i].nome + "</td>";
        elemento += "<td>" + fixas[i].valor + "</td>";
        elemento += "<td>" + fixas[i].tipo + "</td></tr>";
    }
    res.innerHTML = elemento;

    
    var res = document.getElementById('mostraExtras');
    var elemento ='';
    for (var i = 0; i < extras.length; i++) {
        elemento += "<tr><td>" + extras[i].data + " </td>";
        elemento += "<td>" + fixas[i].nome + "</td>";
        elemento += "<td>" + extras[i].valor + "</td>";
        elemento += "<td>" + extras[i].tipo + "</td></tr>";
    }
    res.innerHTML = elemento;


    var res = document.getElementById('mostraLanches');
    var elemento ='';
    for (var i = 0; i < lanches.length; i++) {
        elemento += "<tr><td>" + lanches[i].data + " </td>";
        elemento += "<td>" + lanches[i].nome + "</td>";
        elemento += "<td>" + lanches[i].valor + "</td>";
        elemento += "<td>" + lanches[i].tipo + "</td></tr>";
    }
    res.innerHTML = elemento;

    var res = document.getElementById('mostraParcelado');
    var elemento ='';
    for (var i = 0; i < parcelado.length; i++) {
        elemento += "<tr><td>" + parcelado[i].data + " </td>";
        elemento += "<td>" + parcelado[i].nome + "</td>";
        elemento += "<td>" + parcelado[i].valor + "</td>";
        elemento += "<td>" + parcelado[i].tipo + "</td></tr>";
    }
    res.innerHTML = elemento;
}