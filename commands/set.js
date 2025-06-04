module.exports = (msg, fichas, numero) => {
  const [ , categoria, campo, ...valorParts ] = msg.body.trim().split(" ");
  const valor = valorParts.join(" ");
  const ficha = fichas.get(numero);

  if (!ficha || !ficha[categoria] || typeof ficha[categoria][campo] === "undefined") {
    return msg.reply("❌ Campo inválido. Use: !set jogador nome Fulano");
  }

  ficha[categoria][campo] = valor;
  return msg.reply(`✅ Atualizado: ${categoria}.${campo} = ${valor}`);
};
