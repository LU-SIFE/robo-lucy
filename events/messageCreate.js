module.exports = {
	name: 'messageCreate',
	async execute(message) {

const triggerWords = [['im back', "i'm back", "I'm back", "IM BACK", "I'M BACK"],
	"the end is never",
	["I'm dead", "i'm dead", "im dead", "Im dead", "im ded", "Im ded"]
];

if (message.author.bot) return;
scan(message);

function scan(msg) {
	for (i = 0; i < triggerWords[0].length; i++) {
		if (msg.content.includes(triggerWords[0][i])) {
			msg.reply("Hi back, I'm Robo-Lucy!~");
			console.log('EXECUTED: DADJOKE');
			return;
		}
	}

	if (msg.content.includes(triggerWords[1])) {
		msg.reply("The end is never the end is nev- yes, we get it lol");
		console.log('EXECUTED: THE END');
		return;
	}

	for (i = 0; i < triggerWords[2].length; i++) {
		if (msg.content.includes(triggerWords[2][i])) {
			msg.reply(":skull:");
			console.log('EXECUTED: DEAD');
			return;
		}
	}
}
// LYRIC BOT LYRIC BOT
//
},
};