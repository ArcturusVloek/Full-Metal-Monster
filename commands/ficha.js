module.exports = (msg, fichas, numero) => {
  const ficha = fichas.get(numero);
  if (!ficha) return msg.reply("❌ Você ainda não criou sua ficha.");
  const j = ficha.jogador, p = ficha.pivete, c = ficha.cria, s = c.status;

  const resposta = `
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
              ⃞🤖 FULL METAL MONSTER    ⃞🤖
     \\\\  𝚅𝙴𝙽𝙲𝙴𝚁 𝙴́ 𝙰 𝚂𝚄𝙰 𝚄𝙽𝙸𝙲𝙰 𝙴𝚂𝙲𝙾𝙻𝙷𝙰 \\\\
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

> [CONFIG] JOGADOR
▓ NOME: ${j.nome || "-"}
▓ IDADE: ${j.idade || "-"}
▓ DISPONIBILIDADE: ${j.disponibilidade || "-"}
▓ ULTIMOS 4 N°: ${j.ultimos4 || "-"}
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
> [CONFIG] PIVETE
▓ NOME: ${p.nome || "-"}
▓ IDADE: ${p.idade || "-"}
▓ ARQUÉTIPO: ${p.arquetipo || "-"}
▓ QUARTO: ${p.quarto || "-"}
▓ OBJETO: ${p.objeto || "-"}
▓ CARACTERÍSTICA: ${p.caracteristica || "-"}
▓ PODERES: ${(p.poderes?.length) ? p.poderes.join(", ") : "-"}
▓ ESPECIAL: ${p.especial || "-"}
▓ FRAQUEZA: ${p.fraqueza || "-"}
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
> [CONFIG] CRIA
▓ NOME: ${c.nome || "-"}
▓ CHASSI: ${c.chassi || "-"}
▓ NATUREZA: ${c.natureza || "-"}
▓ ELEMENTO: ${c.elemento || "-"}
▓ PEÇAS: ${(c.pecas?.length) ? c.pecas.join(", ") : "-"}
▓ TÉCNICAS: ${(c.tecnicas?.length) ? c.tecnicas.join(", ") : "-"}
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
> [STATUS] CRIA
▓ DURABILIDADE: ${s.durabilidade}
▓ DANO: ${s.dano}
▓ MIRA: ${s.mira}
▓ VELOCIDADE: ${s.velocidade}
▓ CARAPAÇA: ${s.carapaca}
▓ BATERIA: ${s.bateria}
▓ MEMÓRIA: ${s.memoria};
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓`

  msg.reply(resposta);
};
