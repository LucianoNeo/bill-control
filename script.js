var gastos = {id:'',nome:'',  tipo: '', valor:'' , data: '',parcela:'',totalParcela:''}
var jan = [gastos]
var fev = [gastos]
var mar = [gastos]
var abr = [gastos]
var mai = [gastos]
var jun = [gastos]
var jul = [gastos]
var ago = [gastos]
var set = [gastos]
var out = [gastos]
var nov = [gastos]
var dez = [gastos]

var mes = [jan,fev,mar,abr,mai,jun,jul,ago,set,out,nov,dez]
var campoTotalMes = document.getElementById('totalMes')
var id = 000

var novo = {id:id++,nome:'produto',  tipo: 'fixa', valor:'25' , data: '21',parcela:'',totalParcela:''}
jan.push(novo)


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
    var totalMes = Number(0)
    
    campoTotalMes.innerHTML = '<p>Total do mês: <br></p>'
    document.getElementById('rodape').style.position='absolute'
    for (var i = 0; i < fixas.length; i++) {
        elemento += "<tr><td>" + fixas[i].data + " </td>";
        elemento += "<td>" + fixas[i].nome + "</td>";
        elemento += "<td>R$" + fixas[i].valor + "</td>";
        total += Number(fixas[i].valor)
        elemento += "<td>" + "<button class='verde' onclick=''>📝</button>"+
        `<button class='vermelho' onclick='remove(${fixas[i].nome})'>❌</button></td></tr>`

    }
    res.innerHTML = elemento;
    res.innerHTML += `<td>TOTAL=</td><td></td><td><strong>R$${total}</strong></td></tr>` 
    totalMes += total


    var res = document.getElementById('mostraExtras');
    var elemento ='';
    var total = Number(0)
    for (var i = 0; i < extras.length; i++) {
        elemento += "<tr><td>" + extras[i].data + " </td>";
        elemento += "<td>" + extras[i].nome + "</td>";
        elemento += "<td>R$" + extras[i].valor + "</td>";
        total += Number(extras[i].valor)
        elemento += "<td>" + "<button class='verde' onclick=''>📝</button>"+
        "<button class='vermelho' onclick=''>❌</button>"+"</td>";
    }
    res.innerHTML = elemento;
    res.innerHTML += `<td>TOTAL=</td><td></td><td><strong>R$${total}</strong></td></tr>` 
    totalMes += total
    

    var res = document.getElementById('mostraLanches');
    var elemento ='';
    var total = Number(0)
    for (var i = 0; i < lanches.length; i++) {
        elemento += "<tr><td>" + lanches[i].data + " </td>";
        elemento += "<td>" + lanches[i].nome + "</td>";
        elemento += "<td>R$" + lanches[i].valor + "</td>";
        total += Number(lanches[i].valor)
        elemento += "<td>" + "<button class='verde' onclick=''>📝</button>"+
        "<button class='vermelho' onclick=''>❌</button>"+"</td></tr>";
    }
    res.innerHTML = elemento;
    res.innerHTML += `<td>TOTAL=</td><td></td><td><strong>R$${total}</strong></td></tr>` 
    totalMes += total

    var res = document.getElementById('mostraParcelado');
    var elemento ='';
    var total = Number(0)
    let parcela = document.getElementById('parcela').value
    let totalParcelas = document.getElementById('totalParcelas').value

    for (var i = 0; i < parcelado.length; i++) {
        elemento += "<tr><td>" + parcelado[i].data + " </td>";
        //elemento += "<td> (" + parcelado[i].parcela + " de " + parcelado[i].totalParcela+") " + parcelado[i].nome + "</td>";
        elemento += "<td>" + parcelado[i].nome + "</td>";
        elemento += "<td>R$" + parcelado[i].valor + "</td>";
        total += parcelado[i].valor
        elemento += "<td>" + "<button class='verde' onclick=''>📝</button>"+
        "<button class='vermelho' onclick=''>❌</button>"+"</td><tr>";
        
    }
    res.innerHTML = elemento;
    res.innerHTML += `<td>TOTAL=</td><td></td><td><strong>R$${total}</strong></td></tr>`
    totalMes += total
    
    
    document.getElementById('rodape').style.position='relative'
    document.getElementById('rodape').style.width='103%'
    document.getElementById('rodape').style.height='40px'
    document.getElementById('rodape').style.bottom='-10px'
    campoTotalMes.style.display='block'
    campoTotalMes.innerText += `R$ ${totalMes}`
}


function mostraSecao(secao,desligar) {
    var ver = document.getElementById(secao)
    var apagar = document.getElementById(desligar)
    if(secao == 'cadastrar'){
        resetaTabelas()
        document.getElementById('rodape').style.position='relative'
        campoTotalMes.style.display='none'
    }
    ver.style.display ='block'
    apagar.style.display ='none'
    document.getElementById('bv').style.display='none'
    resetaCadastro()
    
    }

function resetaTabelas() {
    var tableFixas = document.getElementById('mostraFixas')
    var tableLanches = document.getElementById('mostraLanches')
    var tableExtras = document.getElementById('mostraExtras')
    var tableParc = document.getElementById('mostraParcelado')

    tableFixas.innerHTML =''
    tableLanches.innerHTML =''
    tableExtras.innerHTML =''
    tableParc.innerHTML =''
}

$(document).ready(function(){
	//Data
	$("#data").mask("99/99");

	//Dinheiro
	$('#valor').mask('000.000.000.000.000,00' , { reverse : true});
});


function ligaParcelas() {
    var tipo = document.getElementById('tipo')
    if (tipo.value == 'parcelado')
    {
    document.getElementById('parcelas').style.display='flex'
    }else{
        document.getElementById('parcelas').style.display='none'
    }
    
}

function cadastrar() {

let mesSel = document.getElementById('mesCad').value
let tipoCad = document.getElementById('tipo').value
let data = document.getElementById('data').value
let produto =document.getElementById('produto').value
let valor = document.getElementById('valor').value
let parcela = document.getElementById('parcela').value
let totalParcelas = document.getElementById('totalParcelas').value
let novo = {id:id++, nome:produto,tipo:tipoCad,valor:parseInt(valor),data:data}

if(data =='' || produto =='' || valor =='' ){
    alert('Você deve preencher todos os campos!')
}else{
    if (tipoCad =='fixa'){
    
    for (let i = 0; i < mes.length; i++) {
        mes[i].push(novo)
    }
    alert('Cadastro realizado com sucesso!')
    mostraSecao('visualizar','cadastrar')
    }
    else if(tipoCad == 'parcelado'){
        let novo = {id:id++, nome:produto,tipo:tipoCad,valor:parseInt(valor),data:data,parcela:parcela,totalParcela:totalParcelas}
        let indice 
        switch (mesSel) {
            case "jan":
            indice = Number(0)
            break
            case "fev":
                indice = Number(1)
                break
            case "mar":
                indice = Number(2)
                break    
        }
        for (let index = indice; index < Number(totalParcelas); index++ ) {
            mes[index].push(novo)
            alert(`Cadastro realizado com sucesso! MES ${index}`)
        }
            
            mostraSecao('visualizar','cadastrar')
    } else{
        switch (mesSel) {
            case "jan":
            jan.push(novo)
            alert('Cadastro realizado com sucesso!')
            mostraSecao('visualizar','cadastrar')
            break
            case "fev":
                fev.push(novo)
                alert('Cadastro realizado com sucesso!')
                mostraSecao('visualizar','cadastrar')
                break
            case "mar":
                mar.push(novo)
                break    
         
            case "abr":
                abr.push(novo)
                break
            case "mai":
                mai.push(novo)
                break
            case "jun":
                jun.push(novo)
                break
            case "jul":
                jul.push(novo)
                break
            case "ago":
                ago.push(novo)
                break
            case "set":
                set.push(novo)
                break 
            case "out":
                out.push(novo)
                break
            case "nov":
                nov.push(novo)
                break
            case "dez":
                dez.push(novo)
                break   
        }
}

}
}



function resetaCadastro(){
    let mesSel = document.getElementById('mesCad')
    let tipo = document.getElementById('tipo')
    let data = document.getElementById('data')
    let produto =document.getElementById('produto')
    let valor = document.getElementById('valor')
    let parcela = document.getElementById('parcela')
    let totalParcelas = document.getElementById('totalParcelas')
    mesSel.value=''
    tipo.value=''
    data.value=''
    produto.value=''
    valor.value=''
    parcela.value=''
    totalParcelas.value=''
}


function remove(nomeInd) {
    //console.log(nomeInd)
    //console.log(mes.indexOf(nome))
}