const bitcoin = require('bitcoinjs-lib');
const bip39 = require('bip39');

const mnemonics =
  'train endless bike absent gown almost already expect month shop exotic spend';

export function createBitcoinWallet() {
  const seedHex = bip39.mnemonicToSeedSync(mnemonics);
  console.log('seed from mnemonics', seedHex.toString('hex'));
  let root = bitcoin.bip32.fromSeed(seedHex, bitcoin.networks['mainnet']);
  console.log('root is ', root);
  const path = "m/49'/1'/0'/0/0";
  const child = root.derivePath(path);
  let WIF = child.toWIF();
  console.log('wif is ', WIF);
   
}
