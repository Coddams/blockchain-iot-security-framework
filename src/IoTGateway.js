const IoTDataSource = require('./IoTDataSource');
const Encryptor = require('./Encryptor');

class IoTGateway {
  constructor(blockchainConnector, encryptionKey) {
    this.blockchainConnector = blockchainConnector;
    this.dataSource = new IoTDataSource();
    this.encryptor = new Encryptor(encryptionKey);
  }

  async processAndStoreData() {
    const rawData = await this.dataSource.getData();
    const processedData = this.processData(rawData);
    const encryptedData = this.encryptData(processedData);
    await this.storeData(encryptedData);
    const decryptedData = this.decryptData(encryptedData);
    return { rawData, processedData, encryptedData, decryptedData };
  }

  processData(data) {
    // Here you can add any data processing logic
    return data;
  }

  encryptData(data) {
    return this.encryptor.encrypt(data);
  }

  decryptData(encryptedData) {
    return this.encryptor.decrypt(encryptedData);
  }

  async storeData(encryptedData) {
    console.log('Storing encrypted data on blockchain. Length of encrypted string:', encryptedData.length);
   // await this.blockchainConnector.sendTransaction(encryptedData);
  }
}

module.exports = IoTGateway;