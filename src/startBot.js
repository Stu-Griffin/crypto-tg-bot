import axios from 'axios';
import saveData from './saveData.js';
import binanceApi from './binanceApi.js';
import advCashApi from './advCashApi.js';

function startBot(bot) {
	setInterval(async () => {
		try {
			const binance = await binanceApi();
			const advCash = await advCashApi("USDT_TRC20", "RUR", "SELL", 1.00);
			if(binance && advCash) {
				console.log('got data')
				const result = advCash - binance;
				const request = await axios.get(`${process.env.API_URL}/api/bot-users`);
				const date = Date.now();
				saveData({
					binance:binance,
					advcash:advCash,
					result:result
				});
				if(result >= 0.15) {
					request.data.map(el => {
						const string = `Разница(AdvCash > Binance): ${result} \nЦена на AdvCahs: ${advCash} \nЦена на Binance: ${binance} \nВремя: ${date} \n\n`;
						bot.telegram.sendMessage(el.chatId, string);
					})
				}
			}
		} catch(e) {
			console.log('Error with startBot', e, 'Error with startBot');
		}
	}, 60000);
}

export default startBot;