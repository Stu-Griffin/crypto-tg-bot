import W3CWebSocket from 'websocket';

const client = new W3CWebSocket.w3cwebsocket('wss://stream.binance.com:9443/stream?streams=usdtrub@miniTicker');

function binanceWebsocket() {
	client.onmessage = async function(event) {
		console.log(JSON.parse(event.data))
	};
	client.onerror = function() {
		console.log('There was an Error in binance connection');
	};
	client.onopen = function() {
		console.log('The connection was opened');
	};
	client.onclose = function() {
		console.log('The connection was closed');
	};
}

export default binanceWebsocket;