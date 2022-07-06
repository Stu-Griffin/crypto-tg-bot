import advcash from 'advcash';

async function advCashApi(fromValue, toValue, type, amountValue) {
	try{
		const request = await advcash({
			password: process.env.PASSWORD_API,
			apiName: process.env.API_NAME,
			accountEmail: process.env.ACCOUNT_EMAIL
		});
		const response = await request.checkCurrencyExchange({
			from: fromValue,
			to: toValue,
			action: type,
			amount: amountValue
		});
		const result = await response;
		return result.rate;
	} catch(e) {
		console.log('Error with AdvCash', e, 'Error with AdvCash');
	}
}

export default advCashApi;