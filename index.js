const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Inicializa o bot com autenticação local
const client = new Client({ authStrategy: new LocalAuth() });

// Banco de fichas em memória
const fichas = new Map();
const adminNumber = "5513991488574@c.us"; // <- Substitua pelo seu número com DDI/DDD

// Importa os comandos
const ajuda = require('./commands/ajuda');
const criarFicha = require('./commands/criarFicha');
const setCampo = require('./commands/set');
const ficha = require('./commands/ficha');
const rolagem = require('./commands/rolagem');
const teste = require('./commands/teste');
const npc = require('./commands/npc');
const chefe = require('./commands/chefe');

// Evento de leitura do QR Code
client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
  console.log("📲 Escaneie o QR Code com seu WhatsApp.");
});

// Evento de prontidão
client.on('ready', () => {
  console.log("✅ Bot de RPG FULL METAL CRIA conectado com sucesso!");
});

// Lógica de mensagens
client.on('message', async msg => {
  const texto = msg.body.trim();
  const numero = msg.from;

  // Comandos
  if (texto === '!ajuda') return ajuda(msg);
  if (texto === '!criar ficha') return criarFicha(msg, fichas, numero);
  if (texto === '!ficha') return ficha(msg, fichas, numero);
  if (texto.startsWith('!set ')) return setCampo(msg, fichas, numero);
  if (texto.startsWith('!d')) return rolagem(msg, texto);
  if (texto.startsWith('!teste ')) return teste(msg, fichas, numero);
  if (texto === '!npc') return npc(msg, numero, adminNumber);
  if (texto === '!chefe') return chefe(msg, numero, adminNumber);
});

// Inicia o cliente
client.initialize();
