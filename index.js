const qrcode = require('qrcode-terminal');
const { Client, LegacySessionAuth, LocalAuth } = require('whatsapp-web.js');


const client = new Client({
    authStrategy: new LocalAuth({
        clientId: "client-one"
    })
});

// Save session values to the file upon successful auth
client.on('authenticated', (session) => {
    console.log('logged in', session)
});


client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    client.sendMessage("201020624331@c.us", 'DO NOT EDIT THIS LINE ' + getCurrentDate());

});

client.on('message', message => {
    if (message.body === 'السود عيونه') {
        // message.reply('pong');
        console.log('from', message.from)
        client.sendMessage(message.from, 'يا ولاه');
    }
});

client.initialize();

// (Optional)
function getCurrentDate() {
    // Set the timezone to Cairo/Africa
    const options = { timeZone: 'Africa/Cairo', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const today = new Date();
    return today.toLocaleString('en-US', options).replace(',', '');
}