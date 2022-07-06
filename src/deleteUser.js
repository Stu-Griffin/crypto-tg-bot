import axios from 'axios';

async function deleteUser(id, bot) {
	try {
		const deleteUser = await axios.delete(`${process.env.API_URL}/api/bot-users/${id}`);
		bot.telegram.sendMessage(id, 'Вы отписались от рассылки');
		console.log(`User was deleted with status: ${deleteUser.status}`);
	} catch(e) {
		bot.telegram.sendMessage(id, 'Что-то пошло не так при удалении пользователя');
		console.log('Error with deleting User', e.response, 'Error with deleting User');
	}
}

export default deleteUser;