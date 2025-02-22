const TronWeb = require('tronweb');
const tronWeb = new TronWeb({
    fullHost: 'http://127.0.0.1:8090'
});

async function getAccount(address) {
    try {
        const account = await tronWeb.trx.getAccount(address);
        console.log('Account:', account);
    } catch (error) {
        console.error('Error querying account:', error);
    }
}

const address = '41e552f6487585c2b58bc2c9bb4492bc1f17132cd0';

getAccount(address);