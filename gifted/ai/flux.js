let Giftedd = async (m, { Gifted, text, fetchJson }) => {
    if (!text) {
        Gifted.reply({ text: `Provide Some Text ie ${global.prefix}flux A Cute Cat` }, m);
        return;
    }
  
  Gifted.reply({ text: giftechMess.wait }, m);

    let giftedButtons = [
        [
            { text: 'WaChannel', url: global.giftedWaChannel }
        ]
    ];

    try {
        const giftedRes = await fetchJson(`${global.giftedApi}/ai/fluximg?apikey=${global.giftedKey}&prompt=${text}`);
        Gifted.downloadAndSend({ image: giftedRes.result, caption: giftechMess.done}, giftedButtons, m);
    } catch (error) {
        console.error('Error occurred while fetching AI data:', error);
        Gifted.reply({ text: 'Flux is Unavailable Right Now.'}, giftedButtons, m);
    }
};

Giftedd.command = ['flux', 'fluximg'];
Giftedd.desc = 'Flux Image Generator';
Giftedd.category = ['ai'];

module.exports = Giftedd;

