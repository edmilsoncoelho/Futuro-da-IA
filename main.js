const caixaPricipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      {
        texto: "Isso me dá medo!",
        afirmacao: "No início ficou com muito medo, pois algo não-vivo que pode interagir com um humano como se fosse um deles é assustador!"
      },
      {
        texto: "Isso é muito bom para ser verdade!",
        afirmacao: "Já fiquei animado logo de cara, pois achei interessante poder interagir com algo não-humano que pode me ajudar nas tarefas do dia-a-dia!"
      }  
    ]
  },
  {
    enunciado:
      "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      {
        texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
        afirmacao: "Logo de inicio eu já fui procurar saber mais sobre o assunto e usei a própria ferramenta para me explicar melhor como ela funcionada."
      },
      {
        texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
        afirmacao: "Fiquei com receio de utilizar a ferramenta de IA para as tarefas, apesar das pesquisas que fiz, ainda não tive confiança para tal."
      }
    ]
  },
  {
    enunciado:
      "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas: [
      {
        texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
        afirmacao: "Buscando informações sobre o tema, descobri que apesar de trazer inúmeras possibilidades, a IA ainda assim precisa de uma mente humana para produzir seus prompts, e revisar seu trabalho."
      },
      {
        texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
        afirmacao: "Não me senti confortável em pensar que a IA pode substituir diversas funções que hoje são desenvolvidas por pessoas reais."
      }  
    ]    
  },
  {
    enunciado:
      "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
      {
        texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
        afirmacao: "Fico preocupado com os direitos autorais das imagens e outras coisas criadas pela IA, pois ela na verdade apenas reproduz com base em padrões, a criatividade deixa a desejar."
      },
      {
        texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
        afirmacao: "A facilidade com que a IA cria imagens e outras coisas pode faciliar o trabalho criativo de alguns designers e assim melhorar a qualidade e diminuir o tempo gasto para tais tarefas."
      }  
    ]
  },
  {
    enunciado:
      "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
      {
        texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
        afirmacao: "Podemos confiar segamente na IA? Temos que ter cuidado com dados sensíveis e também ao copiar e colar todo conteúdo gerado pela IA. O ideal é revisar e procurar as fontes onde a informação foi retirada para evitar erros."
      },
      {
        texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
        afirmacao: "Manter a atenção a dados sensíveis e revisar os trabalhos feitos por IA são essenciais, pois da mesma maneira que um humano pode errar, a IA também é suscetível a erros."
      }  
    ]
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length){
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativas of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativas.texto;  
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativas))
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada){
      const afirmacoes = opcaoSelecionada.afirmacao;
      historiaFinal += afirmacoes + " ";
      atual++;
      mostraPergunta();
    }

function mostraResultado(){
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();

