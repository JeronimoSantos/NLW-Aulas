const perguntas = [
  {
    pergunta: "O que é considerado um evento de calor extremo?",
    respostas: [
      "A) Temperaturas acima de 30°C",
      "B) Temperaturas acima da média sazonal",
      "C) Temperaturas acima de 40°C"
    ],
    correta: 2
  },
  {
    pergunta: "Quais são os principais impactos do calor extremo na saúde humana?",
    respostas: [
      "A) Aumento do apetite",
      "B) Insolação e desidratação",
      "C) Melhoria na imunidade"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o principal gás de efeito estufa responsável pelo aumento das temperaturas globais?",
    respostas: [
      "A) Metano",
      "B) Dióxido de carbono",
      "C) Óxido nitroso"
    ],
    correta: 1
  },
  {
    pergunta: "Como o calor extremo pode afetar ecossistemas?",
    respostas: [
      "A) Estimula o crescimento de plantas",
      "B) Causa morte de animais e plantas",
      "C) Não tem impacto nos ecossistemas"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a principal recomendação para se proteger durante períodos de calor extremo?",
    respostas: [
      "A) Usar agasalhos pesados",
      "B) Permanecer ao ar livre durante o dia",
      "C) Hidratação adequada e busca de locais frescos"
    ],
    correta: 2
  },
  {
    pergunta: "O que é uma ilha de calor urbana?",
    respostas: [
      "A) Área com muita vegetação",
      "B) Região com temperaturas mais baixas",
      "C) Aumento de temperatura em áreas urbanas"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a relação entre mudanças climáticas e eventos de calor extremo?",
    respostas: [
      "A) Não há relação",
      "B) As mudanças climáticas não afetam o calor extremo",
      "C) Aumento da frequência e intensidade de eventos de calor extremo"
    ],
    correta: 2
  },
  {
    pergunta: "Como o calor extremo pode impactar a agricultura?",
    respostas: [
      "A) Melhora o crescimento das plantas",
      "B) Causa estresse hídrico e redução na produção",
      "C) Não tem efeito na agricultura"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a importância da adaptação urbana para lidar com o calor extremo?",
    respostas: [
      "A) Não tem importância",
      "B) Reduz a poluição do ar",
      "C) Ajuda a minimizar os impactos nas cidades"
    ],
    correta: 2
  },
  {
    pergunta: "Quais são os grupos populacionais mais vulneráveis durante eventos de calor extremo?",
    respostas: [
      "A) Jovens adultos",
      "B) Idosos, crianças e pessoas com condições de saúde preexistentes",
      "C) Atletas profissionais"
    ],
    correta: 1
  }
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      
      if(estaCorreta){
        corretas.add(item)
      }
      
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
    }

  quizItem.querySelector('dl').appendChild(dt)
}

//para remover a pergunta A
quizItem.querySelector('dl dt').remove()

//colocar a pergunta na tela
  quiz.appendChild(quizItem)
}