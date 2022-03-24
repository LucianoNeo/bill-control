var gastos = {nome:'',  tipo: '', valor:'' , data: ''}
var jan = [gastos]
var fev = [gastos]
var mes = [jan,fev ]


var novo = {nome:'peças', tipo: 'parcelado', valor: Number(150), data: '10/01' }
var novo1 = {nome:'internet', tipo: 'fixa', valor: Number(45), data: '15/01' }
var novo2 = {nome:'dom augustinho', tipo: 'lanches', valor: Number(25), data: '23/01' }
var novo3 = {nome:'farmacia', tipo: 'extras', valor: Number(50), data: '28/01' }
var novo4 = {nome:'verduras', tipo: 'extras', valor: Number(25), data: '28/01' }
var novo5 = {nome:'distrib', tipo: 'extras', valor: Number(35), data: '28/01' }
jan.push(novo,novo1,novo2,novo3,novo4,novo5)
var novo = {nome:'olga', tipo: 'parcelado', valor: Number(20), data: '05/01' }
var novo1 = {nome:'net', tipo: 'fixa', valor: Number(35), data: '17/02' }
var novo2 = {nome:'danidu', tipo: 'lanches', valor: Number(60), data: '18/02' }
var novo3 = {nome:'farmacia', tipo: 'extras', valor: Number(5), data: '23/02' }
var novo4 = {nome:'recanto', tipo: 'lanches', valor: Number(300), data: '18/02' }
var novo5 = {nome:'garage20', tipo: 'lanches', valor: Number(80), data: '18/02' }
fev.push(novo,novo1,novo2,novo3,novo4,novo5)






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
    var total = Number(0)
    for (var i = 0; i < fixas.length; i++) {
        elemento += "<tr><td>" + fixas[i].data + " </td>";
        elemento += "<td>" + fixas[i].nome + "</td>";
        elemento += "<td>R$" + fixas[i].valor + ",00</td>";
        total += Number(fixas[i].valor)
        elemento += "<td>" + "<button class='verde' onclick=''>📝</button>"+
        "<button class='vermelho' onclick=''>❌</button>"+"</td></tr>";
    }
    res.innerHTML = elemento;
    res.innerHTML += `<td>TOTAL=</td><td></td><td><strong>R$${total},00</strong></td></tr>` 
    
    var res = document.getElementById('mostraExtras');
    var elemento ='';
    var total = Number(0)
    for (var i = 0; i < extras.length; i++) {
        elemento += "<tr><td>" + extras[i].data + " </td>";
        elemento += "<td>" + extras[i].nome + "</td>";
        elemento += "<td>R$" + extras[i].valor + ",00</td>";
        total += Number(extras[i].valor)
        elemento += "<td>" + "<button class='verde' onclick=''>📝</button>"+
        "<button class='vermelho' onclick=''>❌</button>"+"</td>";
    }
    res.innerHTML = elemento;
    res.innerHTML += `<td>TOTAL=</td><td></td><td><strong>R$${total},00</strong></td></tr>` 
    

    var res = document.getElementById('mostraLanches');
    var elemento ='';
    var total = Number(0)
    for (var i = 0; i < lanches.length; i++) {
        elemento += "<tr><td>" + lanches[i].data + " </td>";
        elemento += "<td>" + lanches[i].nome + "</td>";
        elemento += "<td>R$" + lanches[i].valor + ",00</td>";
        total += Number(lanches[i].valor)
        elemento += "<td>" + "<button class='verde' onclick=''>📝</button>"+
        "<button class='vermelho' onclick=''>❌</button>"+"</td></tr>";
    }
    res.innerHTML = elemento;
    res.innerHTML += `<td>TOTAL=</td><td></td><td><strong>R$${total},00</strong></td></tr>` 


    var res = document.getElementById('mostraParcelado');
    var elemento ='';
    var total = Number(0)
    for (var i = 0; i < parcelado.length; i++) {
        elemento += "<tr><td>" + parcelado[i].data + " </td>";
        elemento += "<td>" + parcelado[i].nome + "</td>";
        elemento += "<td>R$" + parcelado[i].valor + ",00</td>";
        total += parcelado[i].valor
        elemento += "<td>" + "<button class='verde' onclick=''>📝</button>"+
        "<button class='vermelho' onclick=''>❌</button>"+"</td><tr>";
        
    }
    res.innerHTML = elemento;
    res.innerHTML += `<td>TOTAL=</td><td></td><td><strong>R$${total},00</strong></td></tr>`
    document.getElementById('rodape').style.position='relative'
    document.getElementById('rodape').style.width='103%'
}


function mostraSecao(secao,desligar) {
    var ver = document.getElementById(secao)
    var apagar = document.getElementById(desligar)
    ver.style.display ='block'
    apagar.style.display ='none'
    document.getElementById('bv').style.display='none'
    if(secao == 'cadastro'){
        document.getElementById('rodape').style.position='relative' 
    }
    
    }



$(document).ready(function(){
	//Telefone
	$("#fone").mask("(00) 00000-0000");

	//CEP
	$("#cep").mask("99999-999");

	//CPF
	$("#cpf").mask("999.999.999-99");

	//CNPJ
	$("#cnpj").mask("99.999.999/9999-99");

	//Data
	$("#data").mask("99/99");

	//Dinheiro
	$('#dinheiro1').mask('000.000.000.000.000,00' , { reverse : true});

	$('#valor').mask("#.##0,00" , { reverse:true});
});