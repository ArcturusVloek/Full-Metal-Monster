module.exports = (msg, numero, adminNumber) => {
  if (numero !== adminNumber) return;
  msg.reply("👹 *Chefe criado!*\n(gerador em construção)");
};
