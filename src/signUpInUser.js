import axios from 'axios';

async function signUpUser(user, bot) {
	try {
		const createUser = await axios.post(`${process.env.API_URL}/api/bot-users`, {
			"chatId": user.id,
			"firstName": user.first_name,
			"username": user.username
		});
		if(createUser.data.status === 200) {
			bot.telegram.sendMessage(user.id, 'Вы подписались на рассылку');
			console.log(`User was created with status: ${createUser.status}`);
		} else {
			bot.telegram.sendMessage(user.id, 'Вы вернулись');
		}
	} catch(e) {
		bot.telegram.sendMessage(user.id, 'Что-то пошло не так при регистрации');
		console.log('Error with saving User', e, 'Error with saving User');
	}
}

export default signUpUser;