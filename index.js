import 'dotenv/config'
import { Telegraf } from 'telegraf';
import helpUser from './src/helpUser.js';
import startBot from './src/startBot.js';
import deleteUser from './src/deleteUser.js';
import signUpUser from './src/signUpInUser.js';


const bot = new Telegraf(process.env.BOT_TOKEN);


bot.start((ctx) => {
	signUpUser(ctx.from, bot);
	startBot(bot);
});

bot.help((ctx) => {
	helpUser(ctx.from.id, bot);
});

bot.hears('/delete', (ctx) => {
	deleteUser(ctx.from.id, bot);
});

bot.launch();