module.exports = (msg, fichas, numero) => {
  const atributo = msg.body.trim().split(" ")[1]?.toLowerCase();
  const ficha = fichas.get(numero);

  if (!ficha || !ficha.cria?.status) return msg.reply("❌ Você ainda não criou sua ficha.");

  const status = ficha.cria.status;
  if (!status.hasOwnProperty(atributo)) {
    return msg.reply("❌ Atributo inválido. Use: !teste mira, !teste carapaca...");
  }

  const bonus = parseInt(status[atributo]) || 0;
  const d20 = Math.floor(Math.random() * 20) + 1;
  const total = d20 + bonus;

  let resposta = `🧪 *Teste de ${atributo.toUpperCase()}*
🎲 1d20: ${d20}
📈 Bônus: +${bonus}
🎯 Total: *${total}*\n`;
  if (d20 === 20) resposta += `✨ CRÍTICO! Sucesso automático.`;
  if (d20 === 1) resposta += `💥 Falha crítica...`;

  return msg.reply(resposta);
};
