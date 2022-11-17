module.exports = {
	name: 'messageCreate',
	async execute(message, client) {

if (message.author.bot) return;
scan(message);

function scan(msg) {

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