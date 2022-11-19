module.exports = {
	name: 'messageCreate',
	async execute(message, client) {

if (message.author.bot) return;
scan(message);

function scan(msg) {

		if (msg.content.toLowerCase().includes("im back") || msg.content.toLowerCase().includes("i'm back")) {
			msg.reply("Hi back, I'm Robo-Lucy!~");
			console.log('EXECUTED: DADJOKE');
			return;
		}

	if (msg.content.toLowerCase().includes("im a fool") || msg.content.toLowerCase().includes("i'm a fool") ) {
		msg.reply("I know nothing~");
		console.log('no knowledge?');
		return;
	}

	if (msg.content.toLowerCase().includes("i know nothing")) {
		msg.reply("I may sound like a silly clowwwn~");
		console.log('silly clown');
		return;
	}

//repies to "I'm", but is really annoying
//	const args = msg.content.trim().split(/ +/g);
//	if((args[0].toLowerCase() == 'i\'m' || args[0].toLowerCase() == 'im')) {
//		msg.reply(`Hi ${args.slice(1).join(' ')}, I'm Robo-Lucy!~`);
//		console.log('EXECUTED: DADJOKE');
//		return;
//	}

	if (msg.content.includes("the end is never")) {
		msg.reply("The end is never the end is nev- yes, we get it lol");
		console.log('EXECUTED: THE END');
		return;
	}
}
// LYRIC BOT LYRIC BOT
//
},
};