//Retangulo ------------------------------------------------------

function limparRet(){
    document.getElementById("RespostaRetangulo").style.display = "none";
}

function mostrarArea(Area){
    document.getElementById("resultadoRetangulo").innerText = Area;
    document.getElementById("RespostaRetangulo").style.display = "flex";
}

function Retangulo(base, altura){
    this.base = base;
    this.altura = altura;
    this.CalcularAreaRet = function() {return base*altura};
}


function ResultadoArea() {
    limparRet();
    const data = ResultadoFormRetangulo();
    const Ret = new Retangulo(data.Base, data.Altura);
    mostrarArea(Ret.CalcularAreaRet());
}

function ResultadoFormRetangulo(){
    const form = document.getElementById('formRetangulo');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const ret = {
        Base: parseInt(document.getElementById('Base').value),
        Altura: parseInt(document.getElementById('Altura').value)
    }
    return (ret);
}

// Conta Corrente ------------------------------------------------
selecionarTipo();
var Contas = [];

function selecionarTipo(){
    const checkContaCorrente = document.getElementById("tipoCorrente");
    document.getElementById("divJuros").style.display = checkContaCorrente.checked ? "none" : "block";
    document.getElementById("divDataVenc").style.display = checkContaCorrente.checked ? "none" : "block";
    document.getElementById("divSaldoEspecial").style.display = checkContaCorrente.checked ? "block" : "none";
}

function Conta(){
    var nome;
    var banco;
    var numeroConta;
    var saldo;

    this.GetNome = function () {return nome;};
    this.SetNome = function (value) {nome = value;};

    this.GetBanco = function () {return banco;};
    this.SetBanco = function (value) {banco = value;};

    this.GetNumeroConta = function () {return numeroConta;};
    this.SetNumeroConta = function (value) {numeroConta = value;};

    this.GetSaldo = function () {return saldo;};
    this.SetSaldo = function (value) {saldo = value;};
}

function Corrente(){
    var saldoEspecial;

    this.GetSaldoEspecial = function () {return saldoEspecial;};
    this.SetSaldoEspecial = function (value) {saldoEspecial = value;};
}

function Poupanca(){
    var juros;
    var dataVencimento;

    this.GetJuros = function () {return juros;};
    this.SetJuros = function (value) {juros = value;};

    this.GetDataVencimento = function () {return dataVencimento;};
    this.SetDataVencimento = function (value) {dataVencimento = value;};
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

function CriarContas(){
    var data = ResultadoFormConta();
    const checkContaCorrente = document.getElementById("tipoCorrente");
    if (checkContaCorrente.checked){
        Contas.push(new Corrente());

        Contas[Contas.length - 1].SetNome(data.nome);
        Contas[Contas.length - 1].SetBanco(data.banco);
        Contas[Contas.length - 1].SetNumeroConta(data.numeroConta);
        Contas[Contas.length - 1].SetSaldo(data.saldo);
        Contas[Contas.length - 1].SetSaldoEspecial(data.saldoEspecial);
        mostrarConta(Contas[Contas.length - 1], "Conta Corrente");
    } else {
        Contas.push(new Poupanca());

        Contas[Contas.length - 1] = new Poupanca();
        Contas[Contas.length - 1].SetNome(data.nome);
        Contas[Contas.length - 1].SetBanco(data.banco);
        Contas[Contas.length - 1].SetNumeroConta(data.numeroConta);
        Contas[Contas.length - 1].SetSaldo(data.saldo);
        Contas[Contas.length - 1].SetJuros(data.juros);
        Contas[Contas.length - 1].SetDataVencimento(data.dataVencimento);
        mostrarConta(Contas[Contas.length - 1], "Conta Poupança");
    }
}

function mostrarConta(Contas, tipo){
    textoInicial = document.getElementById("resultadoConta").innerText;
    textoInicial += '\n' + '\n' +
        `Tipo: ${tipo}
         Nome: ${Contas.GetNome()}
         Banco: ${Contas.GetBanco()}
         Numero da Conta: ${Contas.GetNumeroConta()}
         Saldo: ${Contas.GetSaldo()}`;

    if (tipo == "Conta Corrente"){
        document.getElementById("resultadoConta").innerText = textoInicial + '\n' +
        `Saldo Especial: ${Contas.GetSaldoEspecial()}`;
    } else {
        document.getElementById("resultadoConta").innerText = textoInicial + '\n' +
        `juros: ${Contas.GetJuros()}
        Data Venc.: ${Contas.GetDataVencimento()}`;
    }

    
    
    document.getElementById("RespostaConta").style.display = "flex";
}

function limparContas(){
    Contas = [];
    document.getElementById("resultadoConta").innerText = "";
    document.getElementById("RespostaConta").style.display = "none";
}

function ResultadoFormConta(){
    const form = document.getElementById('formularioConta');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    const data = {
        nome: document.getElementById('nome').value,
        banco: document.getElementById('banco').value,
        numeroConta: document.getElementById('numeroConta').value,
        saldo: parseInt(document.getElementById('saldo').value),
        saldoEspecial: parseInt(document.getElementById('saldoEspecial').value),
        juros: parseInt(document.getElementById('juros').value),
        dataVencimento: document.getElementById('dataVenc').value
    }

    return (data);
}