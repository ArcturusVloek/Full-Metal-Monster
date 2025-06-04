module.exports = (msg, texto) => {
  const expressao = texto.replace(/^!/, '').replace(/\s+/g, '');
  const regex = /([+-]?)(\d*)d(\d+)|([+-]?\d+)/gi;

  let total = 0;
  let partes = [];
  let match;

  while ((match = regex.exec(expressao)) !== null) {
    if (match[4]) {
      // Modificador puro (ex: +2 ou -3)
      const valor = parseInt(match[4]);
      total += valor;
      partes.push(`Mod: ${valor >= 0 ? '+' : ''}${valor}`);
    } else {
      const sinal = match[1] === '-' ? -1 : 1;
      const qtd = parseInt(match[2]) || 1;
      const faces = parseInt(match[3]);

      if (qtd > 100 || faces > 1000) return msg.reply("❌ Dados ou faces em excesso.");

      const rolagens = Array.from({ length: qtd }, () => Math.floor(Math.random() * faces) + 1);
      const subtotal = rolagens.reduce((a, b) => a + b, 0) * sinal;
      total += subtotal;

      partes.push(`${sinal === -1 ? '-' : ''}${qtd}d${faces}: [${rolagens.join(', ')}]`);
    }
  }

  if (partes.length === 0) return msg.reply("❌ Formato inválido. Exemplos válidos: !d20, !2d6+3, !2d4+1d6-2");

  const resposta = `🎲 *Rolagem* → \`${expressao}\`\n${partes.join('\n')}\n🎯 *Total:* ${total}`;
  msg.reply(resposta);
};
