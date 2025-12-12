// src/Encryptor.js

const CryptoJS = require('crypto-js');

class Encryptor {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  encrypt(data) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
  }

  decrypt(encryptedData) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
}

module.exports = Encryptor;