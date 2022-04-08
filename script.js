let jan = []
let fev = []
var mar = []
var abr = []
var mai = []
var jun = []
var jul = []
var ago = []
var set = []
var out = []
var nov = []
var dez = []

const meses = {jan,fev,mar,abr,mai,jun,jul,ago,set,out,nov,dez}
var campoTotalMes = document.getElementById('totalMes')
var id = Number(000)
var novo = {nomeMes:'jan',id:id++,nome:'produto',  tipo: 'fixa', valor:'25' , data: '21',parcela:'',totalParcela:''}
jan.push(novo)
var novo = {nomeMes:'jan',id:id++,nome:'produto2',  tipo: 'fixa', valor:'25' , data: '21',parcela:'',totalParcela:''}
jan.push(novo)
var novo = {nomeMes:'fev',id:id++,nome:'produto2',  tipo: 'fixa', valor:'25' , data: '21',parcela:'',totalParcela:''}
fev.push(novo)

function escolheMes() {
    var escolha = document.getElementById('mes')
    desenhaTela(meses[escolha.value])
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


function desenhaTela(meses) {
    var fixas = meses.filter(filtraFixa);
    var extras = meses.filter(filtraExtras);
    var parcelado = meses.filter(filtraParcelado);
    var lanches = meses.filter(filtraLanches);
    var res = document.getElementById('mostraFixas');
    var elemento ='';
    var total = Number(0)
    var totalMes = Number(0)
   
    campoTotalMes.innerHTML = '<p>Total do mês: <br></p>'
    //document.getElementById('rodape').style.position='absolute'
    for (var i = 0; i < fixas.length; i++) {
        elemento += "<tr><td>" + fixas[i].data + " </td>";
        elemento += "<td>" + fixas[i].nome + "</td>";
        elemento += "<td>R$" + fixas[i].valor + "</td>";
        total += Number(fixas[i].valor)
        elemento += "<td>" + "<button class='verde' onclick=''>📝</button>"+
        `<button class='vermelho' onclick='remove("${fixas[i].id}","${fixas[i].nomeMes}")'>❌</button></td></tr>`

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
        `<button class='vermelho' onclick='remove("${extras[i].id}","${extras[i].nomeMes}")'>❌</button></td></tr>`
        
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
        `<button class='vermelho' onclick='remove("${lanches[i].id}","${lanches[i].nomeMes}")'>❌</button></td></tr>`

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
        elemento += "<td>" + parcelado[i].nome + " " + parcelado[i].parcela +"/"+ parcelado[i].totalParcela+"</td>";
        elemento += "<td>R$" + parcelado[i].valor + "</td>";
        total += parcelado[i].valor
        elemento += "<td>" + "<button class='verde' onclick=''>📝</button>"+
        `<button class='vermelho' onclick='remove("${parcelado[i].id}","${parcelado[i].nomeMes}")'>❌</button></td></tr>`
        
    }
    res.innerHTML = elemento;
    res.innerHTML += `<td>TOTAL=</td><td></td><td><strong>R$${total}</strong></td></tr>`
    totalMes += total
    
    
    // document.getElementById('rodape').style.position='relative'
    // document.getElementById('rodape').style.width='103%'
    // document.getElementById('rodape').style.height='40px'
    // document.getElementById('rodape').style.bottom='-10px'
    campoTotalMes.style.display='block'
    campoTotalMes.innerText += `R$ ${totalMes}`
    gerenciar()
}


function mostraSecao(secao,desligar) {
    var ver = document.getElementById(secao)
    var apagar = document.getElementById(desligar)
    if(secao == 'cadastrar'){
        resetaTabelas()
        //document.getElementById('rodape').style.position='relative'
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
        for (const mes in meses){
        let novo = {nomeMes:mes,id:id++, nome:produto,tipo:tipoCad,valor:parseInt(valor),data:data,parcela:'',totalParcela:''}
        meses[mes].push(novo)
}
    alert('Cadastro realizado com sucesso!')
    mostraSecao('visualizar','cadastrar')
    gerenciar()
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
            meses[index].push(novo)
            //novo.id++
            gerenciar()
        }
            
            mostraSecao('visualizar','cadastrar')
    } else{
        switch (mesSel) {
            case "jan":
            novo.nomeMes='jan'
            jan.push(novo)
            alert('Cadastro realizado com sucesso!')
            gerenciar()
            mostraSecao('visualizar','cadastrar')
            break
            case "fev":
                novo.nomeMes='fev'
                fev.push(novo)
                alert('Cadastro realizado com sucesso!')
                gerenciar()
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


function remove(id,nomeMes) {
  
    console.log(meses[nomeMes])
    var indexToRemove = meses[nomeMes].findIndex(item => item.id ==id)
    meses[nomeMes].splice(indexToRemove,1)
    console.log(meses[nomeMes])
    desenhaTela(meses[nomeMes])
    gerenciar()
}


function gerenciar(){
    var resultado = document.getElementById("mostraGer");
    var elemento ='';
    for (const mes in meses){
        for (var i = 0; i < meses[mes].length; i++){
            elemento += "<tr><td>" +meses[mes][i].id + " </td>";
            elemento += "<td>" + meses[mes][i].nomeMes + " </td>";
            elemento += "<td>" + meses[mes][i].data + " </td>";
            elemento += "<td>" + meses[mes][i].nome + "</td>";
            elemento += "<td>R$" + meses[mes][i].valor + "</td>";
            elemento += "<td>" + meses[mes][i].tipo + "</td>";
            elemento += "<td>" + meses[mes][i].parcela + "</td>";
            elemento += "<td>" + meses[mes][i].totalParcela + "</td>";
            elemento += "<td>" + "<button class='verde' onclick=''>📝</button>"+
            `<button class='vermelho' onclick='remove("${meses[mes][i].id}","${meses[mes][i].nomeMes}")'>❌</button></td></tr>`
        }
    }
    resultado.innerHTML = elemento

}