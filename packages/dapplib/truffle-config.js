require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name recipe stereo equip hover kiwi slot giggle'; 
let testAccounts = [
"0x10dc3745ae0bd75e49a57f873fa88734052b71bd26525c9d98dc254985bc3f26",
"0x7ee16f0b3a88041c5b7621986df7b33e939d94a1a22effe065fc65aeafa2c180",
"0xb63868138eabac2c3ce9e1e34263d258d4b207564929b59561d0536c6ff57b29",
"0x1f0e887356ba1e9f871c08bd4dd16e2d40aaf51e7b92b13319659e6568ce58df",
"0xadcfcc1636cbc21dd98a1cb1c34bcf6d7610135f5aae703fce26ae0b38786b91",
"0xfefec111d2466b8a3a1d77bf9e916927b1bbac36e383e6915067f6412afc2a24",
"0x45f60c9eec6e533bf7bad4114dab23107aec048c867411330b2e0a2c49c5697b",
"0x41b4fb5cadc1b65067ab4fdbcd1d19f753496ae12cb8e3bc1038ad3f62efa12b",
"0xf3ead878044ffbdd4e3cf646440709b72d66d7d7b394482352bc1aaeacefff5b",
"0xe1788fa11535c0006981934d69775f7ab9afe962272c26ecdb31642905594085"
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

