let Giftedd = async (m, { Gifted, text, fetchJson }) => {
    if (!text) {
        Gifted.reply({ text: `Provide Some Text ie ${global.prefix}gemini I Need Assistance.` }, m);
        return;
    }

    Gifted.reply({ text: giftechMess.wait }, m);

    let giftedButtons = [
        [
            { text: 'Ai Web', url: `${global.giftedApi}/aichat` },
            { text: 'WaChannel', url: global.giftedWaChannel }
        ]
    ];

    try {
        const aiResponse = await fetchJson(`${global.giftedApi}/ai/geminiai?apikey=${global.giftedKey}&q=${text}`);
        const giftedResponse = aiResponse.result;

        Gifted.reply({ text: giftedResponse}, giftedButtons, m);
    } catch (error) {
        console.error('Error occurred while fetching AI data:', error);
        Gifted.reply({ text: 'Gemini Ai is Unavailable Right Now.'}, giftedButtons, m);
    }
};

Giftedd.command = ['gemini', 'geminiai'];
Giftedd.desc = 'Gemini Ai Chat';
Giftedd.category = ['ai'];

module.exports = Giftedd;
