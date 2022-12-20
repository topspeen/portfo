const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

exports.handler = async function() {
    try {
        let response = await CoinGeckoClient.coins.all();
        let data = await response.data;
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        }
    } catch (err) {
        console.error(err)
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message })
        }
    }
}