const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "check up time",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 
let status =,┌─────────────────────── 
    *├ ⏳Uptime:-  ${runtime(process.uptime())}*    
    *├ 📟Ram usage:- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
    *├ ⚙️HostName:- ${os.hostname()}*
    *├ 👨‍💻Owner:- shadow-md*   
    *├ 🤖version: 1.5.0*
    └───────────────────────
    𝚙𝚘𝚠𝚎𝚛𝚍 𝚋𝚢 𝚜𝚑𝚊𝚍𝚘𝚠 𝚖𝚍
'
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
