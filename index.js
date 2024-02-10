const perguntas = [
  {
    pergunta: "Qual é um dos benefícios das atividades físicas para a saúde?",
    respostas: [
      "Aumento do estresse",
      "Melhora da saúde cardiovascular",
      "Diminuição da qualidade do sono"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a recomendação geral de tempo de atividade física para adultos por semana?",
    respostas: [
      "15 minutos",
      "60 minutos",
      "120 minutos"
    ],
    correta: 1
  },
  {
    pergunta: "Quais são exemplos de atividades aeróbicas?",
    respostas: [
      "Levantamento de peso",
      "Caminhada rápida, corrida e ciclismo",
      "Yoga e Pilates"
    ],
    correta: 1
  },
  {
    pergunta: "O que é importante para evitar lesões durante atividades físicas?",
    respostas: [
      "Ignorar o aquecimento",
      "Utilizar equipamento inadequado",
      "Realizar um aquecimento adequado"
    ],
    correta: 2
  },
  {
    pergunta: "Quais são os componentes do treinamento de resistência?",
    respostas: [
      "Flexibilidade e equilíbrio",
      "Força muscular e resistência cardiovascular",
      "Agilidade e potência"
    ],
    correta: 1
  },
  {
    pergunta: "O que é importante para uma recuperação adequada após o exercício?",
    respostas: [
      "Ingerir apenas alimentos ricos em gordura",
      "Descansar e hidratar-se",
      "Evitar o consumo de água"
    ],
    correta: 1
  },
  {
    pergunta: "Quais são os benefícios do alongamento regular?",
    respostas: [
      "Redução da flexibilidade",
      "Melhora da postura e prevenção de lesões",
      "Diminuição da circulação sanguínea"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a importância da atividade física na prevenção de doenças crônicas?",
    respostas: [
      "Não possui impacto na prevenção",
      "Reduz o risco de diversas doenças",
      "Aumenta a probabilidade de doenças crônicas"
    ],
    correta: 1
  },
  {
    pergunta: "O que é o treinamento intervalado de alta intensidade (HIIT)?",
    respostas: [
      "Exercícios leves e prolongados",
      "Alternância entre períodos de esforço intenso e descanso",
      "Treinamento focado apenas em resistência muscular"
    ],
    correta: 2
  },
  {
    pergunta: "Quais são os benefícios psicológicos das atividades físicas?",
    respostas: [
      "Aumento do estresse e ansiedade",
      "Melhora do humor e redução do estresse",
      "Nenhum impacto psicológico"
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