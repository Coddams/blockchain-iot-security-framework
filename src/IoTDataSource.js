// src/IoTDataSource.js

class IoTDataSource {
    constructor() {
      this.devices = [
        { id: 1, type: 'temperature', unit: 'celsius' },
        { id: 2, type: 'humidity', unit: 'percent' },
        { id: 3, type: 'pressure', unit: 'hPa' }
      ];
    }
  
    generateRandomData(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    async getData() {
      const data = this.devices.map(device => {
        let value;
        switch (device.type) {
          case 'temperature':
            value = this.generateRandomData(-10, 40);
            break;
          case 'humidity':
            value = this.generateRandomData(0, 100);
            break;
          case 'pressure':
            value = this.generateRandomData(900, 1100);
            break;
          default:
            value = 0;
        }
        return {
          deviceId: device.id,
          type: device.type,
          value: parseFloat(value.toFixed(2)),
          unit: device.unit,
          timestamp: new Date().toISOString()
        };
      });
  
      return data;
    }
  }
  
  module.exports = IoTDataSource;