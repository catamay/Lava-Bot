module.exports.run = (client, message, args) => {
	const MarkovChain = require('markovchain');
	const fs = require('fs');
    const joke = new MarkovChain(fs.readFileSync('./data/jokes.txt', 'utf8'));
    const punchline = new MarkovChain(fs.readFileSync('./data/punchlines.txt', 'utf8'))
    var useUpperCase = function(wordList) {
        var tmpList = Object.keys(wordList).filter(function(word) {
          return word[0] >= 'A' && word[0] <= 'Z'
        })
        return tmpList[~~(Math.random()*tmpList.length)]
      }
    message.channel.send(`${joke.start(useUpperCase).end().process()}`);
    setTimeout(() =>{message.channel.send(`${punchline.start(useUpperCase).end().process()}`);}, 1000)
};


exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['joke'],
	botPerms: [],
	memberPerms: []
};

exports.help = {
	name: 'tellmeajoke',
	description: 'Tells you a joke (it probably won\'t be funny)',
	usage: 'tellmeajoke'
};