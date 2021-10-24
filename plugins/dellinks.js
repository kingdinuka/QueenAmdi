const jid = '1234@s.whatsapp.net' // can also be a group
const response = await conn.sendMessage (jid, 'hello!', MessageType.text) // send a message

await conn.deleteMessage (jid, {id: response.messageID, remoteJid: jid, fromMe: true}) // chat.whatsapp.com
await conn.clearMessage (jid, {id: response.messageID, remoteJid: jid, fromMe: true}) // not allowed group link in this group 
