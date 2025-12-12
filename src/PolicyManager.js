// src/PolicyManager.js

class PolicyManager {
    constructor() {
      this.policies = new Map();
    }
  
    addPolicy(policyName, policyFunction) {
      this.policies.set(policyName, policyFunction);
    }
  
    enforcePolicy(policyName, data) {
      if (this.policies.has(policyName)) {
        return this.policies.get(policyName)(data);
      }
      throw new Error(`Policy ${policyName} not found`);
    }
  }
  
  module.exports = PolicyManager;