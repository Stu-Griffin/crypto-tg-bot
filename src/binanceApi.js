import axios from 'axios';

async function binanceApi() {
	try{
		const request = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=USDTRUB`);
		return(request.data.price);
	} catch(e) {
		console.log('Error with Binance', e, 'Error with Binance');
	}
}

export default binanceApi;