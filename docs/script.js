var pontuacao = {
    pontuacaoJogador: 0,
    pontuacaoComputador: 0,
    atualizarPontuacao: function (resultado) {
        switch (resultado) {
            case 'Você Ganhou!':
                this.pontuacaoJogador += 1;
                break;
            case 'Você Perdeu!':
                this.pontuacaoComputador += 1;
                break;
        }
    }
};

const jokenpo = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
    verificarResultado: function (escolhaJogador, escolhaComputador) {
        if (escolhaJogador == escolhaComputador)
            return 'Empate!';
        else {
            if (escolhaComputador == jokenpo[escolhaJogador])
                return 'Você Ganhou!';
            else
                return 'Você Perdeu!'
        }
    },
    escolherComputador: function () {
        const rdn = Math.floor(Math.random() * 3);
        switch (rdn) {
            case 0:
                return 'rock';
            case 1:
                return 'paper';
            case 2:
                return 'scissors';
        }
    }
};

const iconJogador = "<spam style=\"display: inline-block;\" id=\"icone-computador\"> <i class=\"fas fa-hand-rock fa-rotate-90\"></i> </spam>";
const iconComputador = iconJogador.slice(0, 5) + " class=\"fa-flip-horizontal\" " + iconJogador.slice(5);
const tela = {
    animar: function (resultado, escolhaJogador, escolhaComputador) {

        document.getElementById('resultado-jogador').innerHTML = iconJogador;
        document.getElementById('resultado-computador').innerHTML = iconComputador;
        document.getElementById('resultado').innerHTML = '&nbsp';

        document.getElementById('resultado-computador').animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(90deg)' },
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(90deg)' },
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(90deg)' },
            { transform: 'rotate(0deg)' }
        ], {
            duration: 2500
        });

        document.getElementById('resultado-jogador').animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(-90deg)' },
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(-90deg)' },
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(-90deg)' },
            { transform: 'rotate(0deg)' }
        ], {
            duration: 2500
        });

        setTimeout(function () { 
            document.getElementById('resultado').innerHTML = resultado; 
            document.getElementById('resultado-jogador').innerHTML = iconJogador.replace("rock", escolhaJogador);
            document.getElementById('resultado-computador').innerHTML = iconComputador.replace("rock", escolhaComputador);
            document.getElementById('pontuacaoJogador').innerText = pontuacao.pontuacaoJogador;
            document.getElementById('pontuacaoComputador').innerText = pontuacao.pontuacaoComputador;
        }, 2500);
       


        return 0;
    },
};

const jogar = function (escolhaJogador) {
    const escolhaComputador = jokenpo.escolherComputador();
    const resultado = jokenpo.verificarResultado(escolhaJogador, escolhaComputador);
    pontuacao.atualizarPontuacao(resultado);
    tela.animar(resultado, escolhaJogador, escolhaComputador);
};

document.getElementById("btn-pedra").onclick = function () {
    jogar('rock');
}
document.getElementById("btn-papel").onclick = function () {
    jogar('paper');
}
document.getElementById("btn-tesoura").onclick = function () {
    jogar('scissors');
}

/*alert(jokenpo.jogar('pedra', 'tesoura'));
alert(pontuacao.pontuacaoComputador);
alert(jokenpo.escolherComputador());*/