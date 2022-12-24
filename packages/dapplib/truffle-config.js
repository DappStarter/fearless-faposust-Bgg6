require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain slow idea knee tail travel'; 
let testAccounts = [
"0x552648a1b0ffc3b0cced55e98dd83e27c9c77192363d38cc9c717ef246cb6671",
"0x3962d45260bbb867a03a55c073a306340d8e032a0fb735c766a039acb6c63fda",
"0xb1739a2a31ebcbd825225945c8d1965fe337891b836cd3f6d6797a61b42cd5ea",
"0x1f54f2d98573f6a6e4b6ea2d463efd69d015592590d2d5f3ba80cdb8b237d829",
"0x5eda4a31e673973a4622de4f07816d98f8f4bc7a4d42a32251b169b123f1ffc9",
"0x0112ee931784b6b03e9caa32cbf2fbf424b815b5b4d68e65784cb99d6c41d085",
"0xad72c2a893edaf4458a71223321069a1814987701de92274780666bfdc1f4608",
"0xa157a4fd9bb32d5f362c0c392d81f9963eb61479407239f60ddd099758038802",
"0x5171b1efc890d2d17b897ed2f5ba44656a741905b4e1a69a6999656d88f701aa",
"0xc63e4a6a56eb6ded181a8f24ca20aea2e4006ab7a9d6fc68305b2c1839248ddb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

