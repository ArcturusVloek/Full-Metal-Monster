const fichaBase = {
  jogador: { nome: "", idade: "", disponibilidade: "", ultimos4: "" },
  pivete: {
    nome: "", idade: "", arquetipo: "", quarto: "", objeto: "",
    caracteristica: "", poderes: [], especial: "", fraqueza: ""
  },
  cria: {
    nome: "", chassi: "", natureza: "", elemento: "",
    pecas: ["", "", ""], tecnicas: ["", "", ""],
    status: {
      durabilidade: 0, dano: 0, mira: 0,
      velocidade: 0, carapaca: 0, bateria: 0, memoria: 3
    }
  }
};

const chassiList = ["Shoto", "Shooter", "Beast", "Lancer"];
const elementoList = ["Água", "Fogo", "Terra", "Vento", "Elétrico", "Neutro"];
const naturezaList = [
  { nome: "Astuto", mod: { mira: 1, carapaca: -1 } },
  { nome: "Bruto", mod: { dano: 1, mira: -1 } },
  { nome: "Calmo", mod: { bateria: 1, velocidade: -1 } },
  { nome: "Tímido", mod: { velocidade: 1, dano: -1 } },
  { nome: "Humilde", mod: {} },
  { nome: "Cuidadoso", mod: { carapaca: 1, durabilidade: -1 } }
];

module.exports = (msg, fichas, numero) => {
  const rand = arr => arr[Math.floor(Math.random() * arr.length)];
  const ficha = JSON.parse(JSON.stringify(fichaBase));

  ficha.cria.chassi = rand(chassiList);
  ficha.cria.elemento = rand(elementoList);
  const natureza = rand(naturezaList);
  ficha.cria.natureza = natureza.nome;

  const base = () => Math.floor(Math.random() * 3) + 1;
  ficha.cria.status = {
    durabilidade: base(), dano: base(), mira: base(),
    velocidade: base(), carapaca: base(), bateria: base(), memoria: 3
  };

  for (const [k, v] of Object.entries(natureza.mod)) {
    ficha.cria.status[k] = Math.max(0, ficha.cria.status[k] + v);
  }

  fichas.set(numero, ficha);

  msg.reply(`📋 *Ficha criada com sucesso!*
Chassi: ${ficha.cria.chassi}
Elemento: ${ficha.cria.elemento}
Natureza: ${ficha.cria.natureza}

Use:
• !ficha para visualizar
• !set jogador nome Fulano`);
};
