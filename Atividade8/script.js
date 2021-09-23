class Pessoa {
    constructor(idade, sexo, opiniao) {
        this.idade = idade;
        this.sexo = sexo;
        this.opiniao = opiniao;
    }
}

var pessoas = [];

const encerrar = function () {
    let media = 0;
    var idades = [];
    let pessoaMaisVelha;
    let pessoaMaisNova;
    let qtdePessimo = 0;
    let qtdeOtimoEBom = 0;
    let qtdeMulheres = 0;
    let qtdeHomens;

    for (var i = 0; i < pessoas.length; i++) {
        media += pessoas[i].idade;
        idades.push(pessoas[i].idade);
        qtdePessimo += ((pessoas[i].opiniao == 1) ? 1 : 0);
        qtdeOtimoEBom += ((pessoas[i].opiniao >= 3) ? 1 : 0);
        qtdeMulheres += ((pessoas[i].sexo.toUpperCase() == 'F') ? 1 : 0);
    }
    media /= pessoas.length;
    pessoaMaisVelha = Math.max.apply(Math, idades);
    pessoaMaisNova = Math.min.apply(Math, idades);
    qtdeHomens = pessoas.length - qtdeMulheres;
    qtdeOtimoEBom = (qtdeOtimoEBom / pessoas.length) * 100;

    alert(
        `Média de idade: ${media}\n` +
        `Idade da pessoa mais velha: ${pessoaMaisVelha}\n` +
        `Idade da pessoa mais nova: ${pessoaMaisNova}\n` +
        `Pessoas que responderam péssimo: ${qtdePessimo}\n` +
        `Porcentagem ótimo e bom: ${qtdeOtimoEBom}%\n` +
        `Número de mulheres: ${qtdeMulheres}\n` +
        `Número de homens: ${qtdeHomens}\n`
    );

}

const adicionarPessoa = function () {
    pessoas.push(new Pessoa(
        parseInt(document.getElementById('fidade').value),
        document.getElementById('fsexo').value,
        parseInt(document.getElementById('fopiniao').value)
    ));
    document.getElementById('textoInicial').innerText = 'Insira os dados da ' + (pessoas.length + 1) + 'ª Pessoa:';
    //alert(pessoas[0].idade + pessoas[0].sexo + pessoas[0].opiniao);
}

document.getElementById("btnEnvUsuario").onclick = function () {
    adicionarPessoa();
}

document.getElementById("btnEncerrar").onclick = function () {
    encerrar();
}

