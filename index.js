const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

let i = 0;
client.on('ready', () => {
    console.log('Client is ready!');
    setInterval(()=>{
        i++;
        console.log('sent interval '+ i);
        client.sendMessage("201020624331@c.us", 'ازيك يا اشرف '+ Date.now());
    },1000*30)
});
client.on('message', message => {
	if(message.body === '!ping') {
		// message.reply('pong');
        console.log('from',message.from)
        client.sendMessage(message.from, 'pong');
	}
});

client.initialize();