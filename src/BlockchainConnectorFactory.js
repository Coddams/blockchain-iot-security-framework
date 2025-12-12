const EthereumConnector = require('./connectors/EthereumConnector');
const HyperledgerFabricConnector = require('./connectors/HyperledgerFabricConnector');

class BlockchainConnectorFactory {
  static getConnector(platform, config) {
    switch (platform.toLowerCase()) {
      case 'ethereum':
        return new EthereumConnector(config);
      case 'hyperledger':
        return new HyperledgerFabricConnector(config);
      default:
        throw new Error(`Unsupported blockchain platform: ${platform}`);
    }
  }
}

module.exports = BlockchainConnectorFactory;