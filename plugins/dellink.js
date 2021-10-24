const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const DELLINK_DESC = "Deletes The GROUP LINK [ ✅️ Official External Plugin ]"

Asena.addCommand({pattern: 'dellink', fromMe: false, desc: DELLINK_DESC}, (async (message, match) => {

  await message.chat.whatsapp.com .delete();

}));
