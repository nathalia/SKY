function abrirPag(valor){  
var url = valor;
xmlRequest.open("GET", url, true);  
xmlRequest.onreadystatechange = mudancaEstado;  
xmlRequest.send(null);  
if (xmlRequest.readyState == 1) {  
document.getElementById("home1").innerHTML = "<br><br><font style='color:#ffffff;'>Carregando...</font><img src='img/load.gif'>";  
}  
return url;  
}  
function mudancaEstado(){  
if (xmlRequest.readyState == 4){  
document.getElementById("home1").innerHTML = xmlRequest.responseText;
}  
}

function abrirPag1(valor1){  
var url1 = valor1;
xmlRequest.open("GET", url1, true);  
xmlRequest.onreadystatechange = mudancaEstado1;
xmlRequest.send(null);  
if (xmlRequest.readyState == 1) { 
document.getElementById("a_campanha").innerHTML = "<br><br><font style='color:#ffffff;'>Carregando...</font><img src='img/load.gif'>";  
}  
return url1;  
}  
function mudancaEstado1(){  
if (xmlRequest.readyState == 4){  
document.getElementById("a_campanha").innerHTML = xmlRequest.responseText;
}  
}  

function abrirPag2(valor2){  
var url2 = valor2;
xmlRequest.open("GET", url2, true);  
xmlRequest.onreadystatechange = mudancaEstado2;
xmlRequest.send(null);  
if (xmlRequest.readyState == 1) { 
document.getElementById("ranking").innerHTML = "<br><br><font style='color:#ffffff;'>Carregando...</font><img src='img/load.gif'>";  
}  
return url2;  
}  
function mudancaEstado2(){  
if (xmlRequest.readyState == 4){  
document.getElementById("ranking").innerHTML = xmlRequest.responseText;
}  
}  

function abrirPag3(valor3){  
var url3 = valor3;
xmlRequest.open("GET", url3, true);  
xmlRequest.onreadystatechange = mudancaEstado3;
xmlRequest.send(null);  
if (xmlRequest.readyState == 1) { 
document.getElementById("premios").innerHTML = "<br><br><font style='color:#ffffff;'>Carregando...</font><img src='img/load.gif'>";  
}  
return url3;
}  
function mudancaEstado3(){  
if (xmlRequest.readyState == 4){  
document.getElementById("premios").innerHTML = xmlRequest.responseText;
}  
}  

function abrirPag4(valor4){
var url4 = valor4;
xmlRequest.open("GET", url4, true);  
xmlRequest.onreadystatechange = mudancaEstado4;
xmlRequest.send(null);  
if (xmlRequest.readyState == 1) { 
document.getElementById("fale").innerHTML = "<br><br><font style='color:#ffffff;'>Carregando...</font><img src='img/load.gif'>";  
}  
return url4;
}  
function mudancaEstado4(){  
if (xmlRequest.readyState == 4){  
document.getElementById("fale").innerHTML = xmlRequest.responseText;
}  
}  

function abrirPag5(valor5){
var url5 = valor5;
xmlRequest.open("GET", url5, true);
xmlRequest.onreadystatechange = mudancaEstado5;
xmlRequest.send(null);  
if (xmlRequest.readyState == 1) { 
document.getElementById("perfil").innerHTML = "<br><br><font style='color:#ffffff;'>Carregando...</font><img src='img/load.gif'>";  
}  
return url5;
}  
function mudancaEstado5(){
if (xmlRequest.readyState == 4){  
document.getElementById("perfil").innerHTML = xmlRequest.responseText;
}  
}  

function abrirExtrato(valor6){
var url6 = valor6;
xmlRequest.open("GET", url6, true);
xmlRequest.onreadystatechange = mudancaEstado6;
xmlRequest.send(null);  
if (xmlRequest.readyState == 1) { 
document.getElementById("pop_extrato").innerHTML = "<br><br><font style='color:#ffffff;'>Carregando...</font><img src='img/load.gif'>";  
}  
return url6;
}  
function mudancaEstado6(){
if (xmlRequest.readyState == 4){  
document.getElementById("pop_extrato").innerHTML = xmlRequest.responseText;
}  
}  

function envia_email(){
var linq = "fale_envia.asp?assunto="+encodeURI(document.getElementById("assunto").value)+"&mensagem="+encodeURI(document.getElementById("mensagem").value);
xmlRequest.open("GET",linq,true);
xmlRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
xmlRequest.onreadystatechange = verificaestado;
xmlRequest.send(null);  
if (xmlRequest.readyState == 1) { 
//document.getElementById("perfil").innerHTML = "<br><br><font style='color:#ffffff;'>Carregando...</font><img src='img/load.gif'>";  
}  
return linq;
}  
function verificaestado(){
if (xmlRequest.readyState == 4){  
//document.getElementById("perfil").innerHTML = xmlRequest.responseText;
//alert(document.getElementById("assunto").value);
alert(xmlRequest.responseText);
document.getElementById("mensagem").value='';
document.getElementById("assunto").value='';
}  
}  

function envia_email_home(){
if(document.getElementById("dc_nome").value==''){
	alert("Digite seu nome.");
	return false;
}else if(document.getElementById("dc_email").value==''){
	alert("Digite seu email.");
	return false;
}else if(document.getElementById("dc_mensagem").value==''){
	alert("Digite uma mensagem.");
	return false;
}

var linq = "fale_envia_home.asp?dc_nome="+encodeURI(document.getElementById("dc_nome").value)+"&dc_email="+encodeURI(document.getElementById("dc_email").value)+"&dc_mensagem="+encodeURI(document.getElementById("dc_mensagem").value);
xmlRequest.open("GET",linq,true);
xmlRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
xmlRequest.onreadystatechange = verificaestado3;
xmlRequest.send(null);  
if (xmlRequest.readyState == 1) { 
//document.getElementById("perfil").innerHTML = "<br><br><font style='color:#ffffff;'>Carregando...</font><img src='img/load.gif'>";  
}  
return linq;
}  
function verificaestado3(){
if (xmlRequest.readyState == 4){  
//document.getElementById("perfil").innerHTML = xmlRequest.responseText;
//alert(document.getElementById("assunto").value);
alert(xmlRequest.responseText);
document.getElementById("dc_nome").value='';
document.getElementById("dc_email").value='';
document.getElementById("dc_mensagem").value='';
}  
}  

function envia_senha(dc_email){
var linq = "envia_senha.asp?dc_email="+encodeURI(document.getElementById("dc_email").value);
xmlRequest.open("GET",linq,true);
xmlRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
xmlRequest.onreadystatechange = verificaestado1;
xmlRequest.send(null);  
if (xmlRequest.readyState == 1) { 
//document.getElementById("perfil").innerHTML = "<br><br><font style='color:#ffffff;'>Carregando...</font><img src='img/load.gif'>";  
}  
return linq;
}  
function verificaestado1(){
if (xmlRequest.readyState == 4){  
//document.getElementById("perfil").innerHTML = xmlRequest.responseText;
//alert(document.getElementById("assunto").value);
alert(xmlRequest.responseText);
document.getElementById("dc_email").value='';
}  
}  

function verifica_cad_email(dc_email){
var linq = "cad_verifica_email.asp?dc_email="+encodeURI(document.getElementById("dc_email").value);
xmlRequest.open("GET",linq,true);
xmlRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
xmlRequest.onreadystatechange = verificaestado2;
xmlRequest.send(null);  
if (xmlRequest.readyState == 1) { 
//document.getElementById("perfil").innerHTML = "<br><br><font style='color:#ffffff;'>Carregando...</font><img src='img/load.gif'>";  
}  
return linq;
}  
function verificaestado2(){
if (xmlRequest.readyState == 4){  
//document.getElementById("perfil").innerHTML = xmlRequest.responseText;
//alert(document.getElementById("assunto").value);
var mensagem = xmlRequest.responseText;
	if (mensagem="1"){
		document.getElementById("dc_email").value='';
		alert('Email já cadastrado. Por favor, informe outro email.');
		return false;
	}
//document.getElementById("dc_email").value='';
}  
}

function abrirPag7(valor7,reques){
//alert(valor7);
if(reques==1){
	if ((document.getElementById("dc_nome_ranking").value=='') && (document.getElementById("dc_ranking_nivel").value=='')){
		alert("Selecione uma opção de nível ou digite um nome.");
		return false;
	}
}else{
	}
var url7 = valor7+'&valor='+document.getElementById("dc_nome_ranking").value+"&nivel="+document.getElementById("dc_ranking_nivel").value;
//alert(url7);
xmlRequest.open("GET",url7, true);
xmlRequest.onreadystatechange = mudancaEstado7;
xmlRequest.send(null);  
if (xmlRequest.readyState == 1) { 
document.getElementById("rank").innerHTML = "<br><br><font style='color:#ffffff;'>Carregando...</font><img src='img/load.gif'>";  
}  
return url7;
}  
function mudancaEstado7(){
if (xmlRequest.readyState == 4){  
document.getElementById("rank").innerHTML = xmlRequest.responseText;
}  
}  

// JavaScript Document