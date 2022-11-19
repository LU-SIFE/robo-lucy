const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('food')
        .setDescription('Find a random food image.'),
    async execute(interaction) {
        console.log('EXECUTED: FOOD');
        const embed = new MessageEmbed()
            .setTitle('Food')
            .setImage('https://source.unsplash.com/featured/?food')
            .setFooter('Powered by blebs.');
        return interaction.reply({ embeds: [embed] });
    }
}
