const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
dotenvExpand.expand(dotenv.config());

console.log('ETHEREUM_PRIVATE_KEY:', process.env.ETHEREUM_PRIVATE_KEY);
console.log('INFURA_PROJECT_ID:', process.env.INFURA_PROJECT_ID);

const BlockchainConnectorFactory = require('./BlockchainConnectorFactory');
const IoTGateway = require('./IoTGateway');
let config = require('../config.json');
const contractInfo = require('./contractInfo');

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'your-secret-encryption-key';

config = JSON.parse(JSON.stringify(config), (key, value) => {
  if (typeof value === 'string') {
    return value.replace(/\$\{([^}]+)\}/g, (_, envVar) => process.env[envVar] || '');
  }
  return value;
});

async function main() {
  try {
    const defaultPlatform = config.defaultPlatform || 'ethereum';
    const connector = BlockchainConnectorFactory.getConnector(
      defaultPlatform, 
      config.platforms[defaultPlatform]
    );
    await connector.connect(config.platforms[defaultPlatform]);

    const gateway = new IoTGateway(connector, ENCRYPTION_KEY);

    console.log('Deploying contract...');
    const contract = await connector.deployContract(contractInfo.abi, contractInfo.bytecode);
    console.log('Contract deployed at:', contract.options.address);

    console.log('Fetching, processing, and encrypting IoT data...');
    const { rawData, processedData, encryptedData, decryptedData } = await gateway.processAndStoreData();

    console.log('\nVerification:');
    console.log('1. Raw data:', rawData);
    console.log('2. Processed data:', processedData);
    console.log('3. Encrypted data:', encryptedData);
    console.log('4. Decrypted data:', decryptedData);
    console.log('5. Raw data matches decrypted data:', JSON.stringify(rawData) === JSON.stringify(decryptedData));
    console.log('6. Encrypted data is different from raw data:', encryptedData !== JSON.stringify(rawData));
    console.log('7. Length of encrypted data:', encryptedData.length);

    console.log('\nData processed and stored successfully');

    console.log('\nDetailed View:');
    console.log('1. Raw data:', JSON.stringify(rawData, null, 2));
    console.log('2. Processed data:', JSON.stringify(processedData, null, 2));
    console.log('3. Encrypted data:', encryptedData);
    console.log('4. Decrypted data:', JSON.stringify(decryptedData, null, 2));

    console.log('\nVerification:');
    console.log('5. Raw data matches decrypted data:', JSON.stringify(rawData) === JSON.stringify(decryptedData));
    console.log('6. Encrypted data is different from raw data:', encryptedData !== JSON.stringify(rawData));
    console.log('7. Length of encrypted data:', encryptedData.length);

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();