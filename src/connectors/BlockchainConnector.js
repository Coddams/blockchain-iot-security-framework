class BlockchainConnector {
    constructor() {
      if (this.constructor === BlockchainConnector) {
        throw new Error("Abstract classes can't be instantiated.");
      }
    }
  
    connect(config) {
      throw new Error("Method 'connect()' must be implemented.");
    }
  
    sendTransaction(data) {
      throw new Error("Method 'sendTransaction()' must be implemented.");
    }
  
    queryData(query) {
      throw new Error("Method 'queryData()' must be implemented.");
    }
  
    deployContract(contract) {
      throw new Error("Method 'deployContract()' must be implemented.");
    }
  }
  
  module.exports = BlockchainConnector;