const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Perguntas substituídas por "teste" com números para diferenciar
const perguntas = [
    {
        enunciado: "Teste 1: Qual a sua cor favorita?",
        alternativas: [
            {
                texto: "Azul",
                afirmacao: "Você gosta de cores calmas e tranquilas."
            },
            {
                texto: "Vermelho",
                afirmacao: "Você prefere cores vibrantes e energéticas."
            }
        ]
    },
    {
        enunciado: "Teste 2: Qual seu clima preferido?",
        alternativas: [
            {
                texto: "Frio",
                afirmacao: "Você gosta de ambientes fresquinhos."
            },
            {
                texto: "Quente",
                afirmacao: "Você aprecia dias ensolarados e quentes."
            }
        ]
    },
    {
        enunciado: "Teste 3: Qual seu hobby favorito?",
        alternativas: [
            {
                texto: "Leitura",
                afirmacao: "Você gosta de passar tempo com livros e aprender."
            },
            {
                texto: "Esportes",
                afirmacao: "Você prefere atividades físicas e movimentadas."
            }
        ]
    },
    {
        enunciado: "Teste 4: Qual seu animal preferido?",
        alternativas: [
            {
                texto: "Gato",
                afirmacao: "Você gosta de animais independentes e tranquilos."
            },
            {
                texto: "Cachorro",
                afirmacao: "Você gosta de animais companheiros e enérgicos."
            }
        ]
    },
    {
        enunciado: "Teste 5: Qual sua estação do ano favorita?",
        alternativas: [
            {
                texto: "Primavera",
                afirmacao: "Você gosta de flores e clima ameno."
            },
            {
                texto: "Inverno",
                afirmacao: "Você prefere dias mais frios e aconchegantes."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado Final:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();