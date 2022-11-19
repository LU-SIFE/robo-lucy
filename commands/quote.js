const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('gives a random quote~'),
	async execute(interaction, client, message, channels) {

		const quotes = require('../quotes.js');

		let Picked = quotes[Math.floor(Math.random() * quotes.length)];

		console.log("Quote~");
		return interaction.reply(Picked);
	},
};