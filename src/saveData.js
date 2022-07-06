import axios from 'axios';

async function saveData(obj) {
	try {
		await axios.post(`${process.env.API_URL}/api/saved-data`, obj);
		console.log('Data was saved');
	} catch(e) {
		console.log('Error with saveData', e, 'Error with saveData')
	}
}

export default saveData;