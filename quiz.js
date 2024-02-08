const perguntas = [
    {
        pergunta: "Qual é a função principal do JavaScript?",
        respostas: [
            "Manipulação de bancos de dados",
            "Estilização de páginas web",
            "Programação do lado do servidor",
            "Programação do lado do cliente",
        ],
        correta: 3
    },
    {
        pergunta: "Como se declara uma variável em JavaScript?",
        respostas: [
            "let myVar = 10;",
            "const myVar = 10;",
            "var myVar = 10;",
            "variable myVar = 10;",
        ],
        correta: 1
    },
    {
        pergunta: "O que é um callback em JavaScript?",
        respostas: [
            "Uma função que retorna um valor",
            "Um loop executado assincronamente",
            "Uma função passada como argumento para outra função",
            "Um método de manipulação de strings",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
        respostas: [
            "for (i < 5; i++)",
            "for (i = 0; i < 5; i++)",
            "loop (i = 0; i < 5)",
            "foreach (i in [0, 1, 2, 3, 4])",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Um tipo de variável",
            "Uma biblioteca popular",
            "Uma linguagem de programação",
            "Uma representação estruturada de documentos HTML",
        ],
        correta: 3
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: [
            "print()",
            "log()",
            "console.log()",
            "display()",
        ],
        correta: 2
    },
    {
        pergunta: "Como se faz uma requisição assíncrona em JavaScript?",
        respostas: [
            "Usando a palavra-chave 'sync'",
            "Com o método 'asyncRequest'",
            "Utilizando a função 'fetch'",
            "Apenas com callbacks",
        ],
        correta: 2
    },
    {
        pergunta: "O que é JSON em JavaScript?",
        respostas: [
            "Uma biblioteca de animações",
            "Um formato de dados",
            "Um método de ordenação de arrays",
            "Uma função de manipulação de strings",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "Nenhuma, ambos são iguais",
            "Um compara apenas valores, o outro compara valores e tipos",
            "Um é utilizado para strings, o outro para números",
            "São operadores lógicos diferentes",
        ],
        correta: 1
    },
    {
        pergunta: "O que é hoisting em JavaScript?",
        respostas: [
            "Uma técnica de otimização de código",
            "O ato de elevar uma variável ou função ao topo do seu contexto de execução",
            "Um tipo de erro de compilação",
            "Um recurso avançado de programação",
        ],
        correta: 2
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop de repetição
for( const item of perguntas) {
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta

for( const resposta of item.respostas){
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute  ('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta

    corretas.delete(item)
    if (estaCorreta) {
        corretas.add(item)
    }
mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

  }
  quizItem.querySelector('dl').appendChild(dt)
}

quizItem.querySelector('dl dt').remove()




//coloca a pergunta na tela
quiz.appendChild(quizItem)

}