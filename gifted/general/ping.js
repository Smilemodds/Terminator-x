let Giftedd = async (m, { Gifted }) => {
  const startTime = Date.now(); 

  let giftedButtons = [
    [
      { text: 'WaChannel', url: global.giftedWaChannel }
    ]
  ];

  await new Promise(resolve => setTimeout(resolve, 100)); 

  const endTime = Date.now(); 
  const speed = endTime - startTime; 
  const giftedMess = `Pong: *${speed} ms*`;

  Gifted.reply({ text: giftedMess, parse_mode: 'Markdown' }, giftedButtons, m);
};

Giftedd.command = ['ping', 'speed'];
Giftedd.desc = 'Show Bot Speed';
Giftedd.category = ['general'];

module.exports = Giftedd;
