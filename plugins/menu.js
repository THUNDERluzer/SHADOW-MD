const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "💭",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*❯❯ SHADOW MD COMMAND LIST ❮❮*

> *╭──────────⚬➨*

> *│👨🏻‍💻 DOWNLOAD  COMMANDS*

*📍❮━━ꜱᴏɴɢ-ᴠɪᴅᴇᴏ-ᴄᴏᴏᴍᴀɴᴅ━━❯*📍
━━━━━━━━━━━━❯❯
*🗃️Command : song*

*💨Desc : song downlod*

*💆🏻‍♂️use : .song*
━━━━━━━━━━━━❯❯
*🗃️Command : video*

*💨Desc : video download*

*💆🏻‍♂️use : .video*
━━━━━━━━━━━━❯❯
*📌❮━ᴅᴏᴡɴʟᴏᴀᴅ-ᴄᴏᴏᴍᴀɴᴅ━❯📌*
━━━━━━━━━━━━❯❯
*🗃️Command : Facebook*

*💨Decs : Fb download*

*💆🏻‍♂️use : .fb*
━━━━━━━━━━━━❯❯
*🗃️Command : Tik Tok*

*💨Decs : tt download*

*💆🏻‍♂️use : .tt*
━━━━━━━━━━━━❯❯
*🗃️Command : Twitter*

*💨Decs : Twitter download*

*💆🏻‍♂️use : .twitter*
━━━━━━━━━━━━❯❯
*🗃️Command : mediafire*

*💨Decs : mediafire download*

*💆🏻‍♂️use : .mediafire*
━━━━━━━━━━━━❯❯
*🗃️Command : Google drive*

*💨Decs : google drive download*

*💆🏻‍♂️use : .gdrive*
━━━━━━━━━━━━❯❯
*📌❮━ ʙᴏᴛ-ꜱʏꜱᴛᴇᴍ-ᴄʜᴇᴄᴋ ━❯📌*
━━━━━━━━━━━━❯❯
*🗃️Command : Ping*

*💨Decs : ping check*

*💆🏻‍♂️use : .ping*
━━━━━━━━━━━━❯❯
*🗃️Command : System*

*💨Decs : system check*

*💆🏻‍♂️use .system*
━━━━━━━━━━━━❯❯
*📌❮━ ʙᴏᴛ- ʀᴇᴘᴏ - ᴄᴏᴏᴍᴀɴᴅ ━❯📌*
━━━━━━━━━━━━❯❯
*🗃️Command : Repo*

*💨Decs : repo link*

*💆🏻‍♂️use : .repo*
━━━━━━━━━━━━❯❯
*📌❮━ ᴏᴡɴᴇʀ -ᴄᴏᴏᴍᴀɴᴅ ━❯📌*
━━━━━━━━━━━━❯❯
*🗃️Command : owner*

*💨Decs : main owner ditels*

*💆🏻‍♂️use : .owner*
━━━━━━━━━━━━❯❯
*🗃️Command : shadow*

*💨Desc : my shadow photos*

*💆🏻‍♂️use : .shadow*
━━━━━━━━━━━━❯❯
*📌❮━ ꜱᴇᴛᴛɪɴɢꜱ -ᴄᴏᴏᴍᴀɴᴅ━❯📌*
━━━━━━━━━━━━❯❯
*🗃️Command : settings*

*💨Desc : how to settings edit bot*

*💆🏻‍♂️use : .settings*
━━━━━━━━━━━━❯❯

*📌❮━ ɢʀᴜᴘ-ᴄᴏᴏᴍᴀɴᴅ━❯📌*
━━━━━━━━━━━━❯❯
*🗃️command : kick*

*💨Desc : grup membars kick grup*

*💆🏻‍♂️use : .kick*
━━━━━━━━━━━━❯❯
*🗃️command : mute*

*💨Desc : chat mute the grup*

*💆🏻‍♂️use : .mute*
━━━━━━━━━━━━❯❯
*🗃️command : un mute*

*💨Desc : chat un mute the grupe*

*💆🏻‍♂️use : .unmute*
━━━━━━━━━━━━❯❯
*🗃️command : hide tag*

*💨Desc : chat ping*

*💆🏻‍♂️use : .htag*
━━━━━━━━━━━━❯❯
*🗃️command : promote*

*💨Desc : grup membars addmin*

*💆🏻‍♂️use : .promote*
━━━━━━━━━━━━❯❯
*🗃️command : welcome*

*💨Desc : new membars welcome*

*💆🏻‍♂️use : .setwelcome*
━━━━━━━━━━━━❯❯
*🗃️command : good bye*

*💨Desc : left grup membrs*

*💆🏻‍♂️use : .setgoodbye*
━━━━━━━━━━━━❯❯
*🗃️command : demote*

*💨Desc : grup membars addmin remove*

*💆🏻‍♂️use : .demote*
━━━━━━━━━━━━❯❯
*🗃️command : add*

*💨Desc : grup membars add*

*💆🏻‍♂️use : .add*
━━━━━━━━━━━━❯❯
*🗃️command : del*

*💨Desc : grup chat delet*

*💆🏻‍♂️use : .del*
━━━━━━━━━━━━❯❯
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱʜᴀᴅᴏᴡ-ᴍᴅ*

*╰───────────⚬➨*`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/1b18a9d5c6e02a9b1faa3.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
