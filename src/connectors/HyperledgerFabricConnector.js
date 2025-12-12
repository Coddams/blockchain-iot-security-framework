// src/connectors/HyperledgerFabricConnector.js

const BlockchainConnector = require('./BlockchainConnector');
const { Gateway, Wallets } = require('fabric-network');
const FabricCAServices = require('fabric-ca-client');
const path = require('path');
const fs = require('fs');

class HyperledgerFabricConnector extends BlockchainConnector {
  constructor() {
    super();
    this.gateway = new Gateway();
    this.network = null;
    this.contract = null;
  }

  async connect(config) {
    try {
      const ccpPath = path.resolve(config.ccpPath);
      const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

      const walletPath = path.join(process.cwd(), config.walletPath);
      const wallet = await Wallets.newFileSystemWallet(walletPath);

      const identity = await wallet.get(config.userId);
      if (!identity) {
        throw new Error(`Identity ${config.userId} not found in wallet`);
      }

      await this.gateway.connect(ccp, {
        wallet,
        identity: config.userId,
        discovery: { enabled: true, asLocalhost: true }
      });

      this.network = await this.gateway.getNetwork(config.channelName);
      this.contract = this.network.getContract(config.chaincodeName);

      console.log('Connected to Hyperledger Fabric network');
    } catch (error) {
      console.error('Error connecting to Hyperledger Fabric network:', error);
      throw error;
    }
  }

  async sendTransaction(funcName, ...args) {
    try {
      const result = await this.contract.submitTransaction(funcName, ...args);
      return result.toString();
    } catch (error) {
      console.error('Error sending transaction:', error);
      throw error;
    }
  }

  async queryData(funcName, ...args) {
    try {
      const result = await this.contract.evaluateTransaction(funcName, ...args);
      return result.toString();
    } catch (error) {
      console.error('Error querying data:', error);
      throw error;
    }
  }

  async deployContract() {
    throw new Error('Contract deployment not applicable for Hyperledger Fabric');
  }

  disconnect() {
    this.gateway.disconnect();
  }
}

module.exports = HyperledgerFabricConnector;