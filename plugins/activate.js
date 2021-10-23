*/ 
const KingDinuka = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const con = require('../config');
let WorkType = con.WORKTYPE == 'public' ? false : true

const SEWA = "Output \n Hello All" // Add here To Output === send to spam

KingDinuka.newcmdaddtosew({pattern: 'spam1', //
                                 fromMe: WorkType, 
                                 desc: 'sent spam' //
}, (async (message, match) => {
await message.client.sendMessage(message.jid, SEWA, MessageType.text);
}));
