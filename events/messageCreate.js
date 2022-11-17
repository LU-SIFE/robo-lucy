module.exports = {
	name: 'messageCreate',
	async execute(message, client) {

if (message.author.bot) return;
scan(message);

function scan(msg) {

	const triggerWords = ['im back', "i'm back", "I'm back", "IM BACK", "I'M BACK"];

	for (i = 0; i < triggerWords.length; i++) {
		if (msg.content.includes(triggerWords[i])) {
			msg.reply("Hi back, I'm Robo-Lucy!~");
			console.log('EXECUTED: DADJOKE');
			return;
		}
	}

	const args = msg.content.trim().split(/ +/g);
	if((args[0].toLowerCase() == 'i\'m' || args[0].toLowerCase() == 'im')) {
		msg.reply(`Hi ${args.slice(1).join(' ')}, I'm Robo-Lucy!~`);
		console.log('EXECUTED: DADJOKE');
		return;
	}

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