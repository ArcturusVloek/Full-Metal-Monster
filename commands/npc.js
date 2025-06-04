module.exports = (msg, numero, adminNumber) => {
  if (numero !== adminNumber) return;
  msg.reply("🤖 *NPC gerado!*\n(gerador em construção)");
};
