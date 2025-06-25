
let GiftedBoom = async (m, { Gifted, args }) => {
    let number = args[0]

    if (!number || !number.startsWith('254') || number.length < 10) {
        return Gifted.reply({ text: '❗ *Please provide a valid number starting with 254!*\n\nExample:\n.boom 254712345678' }, [], m)
    }

    let giftedButtons = [[
        { text: '💣 WaChannel', url: global.giftedWaChannel }
    ]];

    let boomMsg = `🎯 *Target Locked: number*💥 Initiating Strike...`;

    await Gifted.reply( image:  url: global.botPic , caption: boomMsg, parse_mode: 'Markdown' , giftedButtons, m)

    setTimeout(() => 
        Gifted.reply( text: '⏱ 3...' , [], m)
    , 1000)

    setTimeout(() => 
        Gifted.reply( text: '⏱ 2...' , [], m)
    , 2000)

    setTimeout(() => 
        Gifted.reply( text: '⏱ 1...' , [], m)
    , 3000)

    setTimeout(() => 
        Gifted.reply(
            image:  url: global.botPic ,
            caption: `💣 *BOOM!*🔥 Target *{number}* has been destroyed!`,
            parse_mode: 'Markdown'
        }, giftedButtons, m)
    }, 4000)
}

GiftedBoom.command = ['boom']
GiftedBoom.desc = 'Destroy'
GiftedBoom.category = ['fun']

module.exports = GiftedBoom
