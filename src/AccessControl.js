// src/AccessControl.js

class AccessControl {
    constructor() {
      this.roles = new Map();
    }
  
    addRole(role, permissions) {
      this.roles.set(role, permissions);
    }
  
    checkPermission(role, permission) {
      if (this.roles.has(role)) {
        return this.roles.get(role).includes(permission);
      }
      return false;
    }
  }
  
  module.exports = AccessControl;