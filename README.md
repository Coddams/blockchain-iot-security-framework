Blockchain-IoT Security Framework

A secure, scalable blockchain-based security framework for Internet of Things (IoT) ecosystems, with focus on agricultural applications.

Presented at FETICON 2025 (Paper 38) | Final Year Project Grade: A

📋 Table of Contents

Overview
Key Features
System Architecture
Technology Stack
Performance Results
Installation
Usage
Security Testing
Research Publication
Future Work
Authors
License


🎯 Overview
The Blockchain-IoT Security Framework addresses critical security vulnerabilities in Internet of Things ecosystems by leveraging blockchain technology for decentralized authentication, data integrity, and secure data management.
Problem Statement
Traditional IoT systems face significant security challenges:

Centralized vulnerabilities: Single points of failure
Data integrity issues: Susceptibility to tampering
Authentication weaknesses: Unauthorized access risks
Scalability limitations: Performance degradation with growing networks

Our Solution
This framework integrates Ethereum blockchain technology with IoT device networks, implementing:

Decentralized device authentication
Immutable data logging via smart contracts
AES-256 encryption for data confidentiality
Scalable architecture supporting 500+ simultaneous device connections

Real-World Application
Designed for agricultural IoT applications, including:

Soil moisture sensor networks
Weather station data collection
Environmental monitoring systems
Precision agriculture implementations


✨ Key Features
🔐 Security

AES-256 Symmetric Encryption: Industry-standard cryptography
Smart Contract-Based Access Control: Ethereum-powered authentication
Attack Resistance: Proven against MITM and replay attacks
Immutable Data Logging: Tamper-proof transaction records

📈 Performance

Transaction Throughput: Up to 400 TPS
Low Latency: <10 second average confirmation time
Scalability: Stable operation with 500+ connected devices
Network Stability: <1% packet loss under threshold loads

🏗️ Architecture

Modular Design: Separates IoT Gateway, Data Processor, and Blockchain Connector
Decentralized Network: No single point of failure
Interoperability: Compatible with standard IoT protocols (HTTP/MQTT)
Cloud Integration: Supports distributed deployment


🏛️ System Architecture
┌─────────────────────────────────────────────────────┐
│                   IoT Data Source                   │
│     (Temperature, Humidity, Pressure Sensors)       │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│                   IoT Gateway                       │
│  • Data Collection & Processing                     │
│  • Encryptor Integration (AES-256)                  │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│              Blockchain Connector Factory           │
│     (Multi-platform: Ethereum | Hyperledger)        │
└──────────────────────┬──────────────────────────────┘
                       │
        ┌──────────────┴──────────────┐
        ▼                             ▼
┌──────────────────┐        ┌──────────────────────┐
│   Ethereum       │        │  Hyperledger Fabric  │
│   Connector      │        │     Connector        │
│   (Web3.js)      │        │  (fabric-network)    │
└────────┬─────────┘        └──────────┬───────────┘
         │                              │
         ▼                              ▼
┌──────────────────┐        ┌──────────────────────┐
│ SimpleStorage.sol│        │   Smart Contract     │
│ (Sepolia Testnet)│        │   (Chaincode)        │
└──────────────────┘        └──────────────────────┘

Additional Modules:
- AccessControl.js - Role-based permissions
- PolicyManager.js - Security policy enforcement

🛠️ Technology Stack
Blockchain Layer

Platform: Ethereum Sepolia Testnet
Smart Contracts: Solidity ^0.8.0
Blockchain Interaction: Web3.js v4.11.1
Network Access: Infura API

Application Layer

Runtime: Node.js v14+
Programming Language: JavaScript (ES6+)
Encryption: crypto-js v4.2.0 (AES-256 symmetric encryption)
Environment Management: dotenv v16.4.5 + dotenv-expand v11.0.6

Additional Support (Optional)

Hyperledger Fabric: fabric-network v2.2.20, fabric-ca-client v2.2.20
Multi-platform support: Designed for both Ethereum and Hyperledger Fabric

Development Tools

IDE: Visual Studio Code
Smart Contract Development: Remix IDE
Testing Framework: Manual load testing & simulation
Version Control: Git

Hardware Requirements (Development)

OS: Windows 10 (64-bit) / Linux / macOS
CPU: Intel Core i5 2.40GHz or equivalent
RAM: 8GB minimum (tested on systems with 8GB)
Storage: 500GB


📊 Performance Results
Transaction Throughput & Latency
Load (TPS)Avg. Confirmation TimeStatus100<10 seconds✅ Optimal400<10 seconds✅ Optimal70020-30 seconds⚠️ Acceptable1000+25-30 seconds⚠️ Degraded
Device Scalability
Connected DevicesPerformancePacket Loss100Excellent<0.1%500Stable<1%600Minor delays~1-2%1000Significant delays>2%
Security Test Results

✅ MITM Attack: Encryption unbreachable
✅ Replay Attack: Successfully prevented
✅ Data Integrity: 100% maintained on blockchain
✅ Unauthorized Access: Blocked by smart contract authentication

Benchmark Context: Our system achieves 400 TPS (significantly outperforming Ethereum Mainnet's ~15-30 TPS) but below Layer 2 solutions like Polygon (~7,000 TPS).

🚀 Installation
Prerequisites
bash# Install Node.js (v14 or higher)
# Download from: https://nodejs.org/

# Verify installation
node --version
npm --version
Clone Repository
bashgit clone https://github.com/yourusername/blockchain-iot-security-framework.git
cd blockchain-iot-security-framework
Install Dependencies
bashnpm install
Dependencies installed:

web3 v4.11.1 - Ethereum blockchain interaction
crypto-js v4.2.0 - AES-256 encryption
dotenv v16.4.5 + dotenv-expand v11.0.6 - Environment configuration
fabric-network v2.2.20 - Hyperledger Fabric support (optional)
fabric-ca-client v2.2.20 - Hyperledger Fabric CA (optional)

Environment Configuration
Create a .env file in the root directory:
env# Ethereum Configuration
INFURA_PROJECT_ID=your_infura_project_id_here
ETHEREUM_PRIVATE_KEY=your_ethereum_wallet_private_key_here

# Encryption Key
ENCRYPTION_KEY=your-secret-encryption-key-here

# Optional: IoT Gateway Configuration
IOT_GATEWAY_PORT=3000
How to get these values:

INFURA_PROJECT_ID:

Sign up at https://infura.io/
Create a new project
Copy the Project ID from your dashboard


ETHEREUM_PRIVATE_KEY:

Use MetaMask or any Ethereum wallet
Export your private key (⚠️ Never share this!)
Get Sepolia testnet ETH from: https://sepoliafaucet.com/


ENCRYPTION_KEY:

Generate a strong random string (minimum 32 characters)
Example: openssl rand -base64 32 (on Linux/Mac)



⚠️ Security Note: Never commit your .env file to version control! It's already in .gitignore.
Smart Contract Deployment
Option 1: Using Remix IDE (Recommended for beginners)

Open Remix IDE: https://remix.ethereum.org/
Create a new file: SimpleStorage.sol
Copy the contract code from contracts/SimpleStorage.sol
Compile with Solidity ^0.8.0
Deploy to Sepolia testnet using MetaMask
Copy the deployed contract address

Option 2: Automated Deployment (Already in main.js)
The system automatically deploys the contract when you run main.js:
javascript// Automatic deployment happens in main.js
const contract = await connector.deployContract(contractInfo.abi, contractInfo.bytecode);
console.log('Contract deployed at:', contract.options.address);

💻 Usage
Quick Start
Run the main application:
bashnode src/main.js
What happens when you run this:

✅ Loads environment variables from .env
✅ Connects to Ethereum Sepolia testnet via Infura
✅ Deploys the SimpleStorage smart contract
✅ Generates simulated IoT sensor data (temperature, humidity, pressure)
✅ Encrypts the data using AES-256
✅ Stores encrypted data on blockchain
✅ Decrypts and verifies data integrity

Expected Console Output:
ETHEREUM_PRIVATE_KEY: 0x...
INFURA_PROJECT_ID: abc123...
Connected to Ethereum network
Deploying contract...
Contract deployed at: 0x1234567890abcdef...
Fetching, processing, and encrypting IoT data...

Verification:
1. Raw data: [Object]
2. Processed data: [Object]
3. Encrypted data: U2FsdGVkX1...
4. Decrypted data: [Object]
5. Raw data matches decrypted data: true
6. Encrypted data is different from raw data: true
7. Length of encrypted data: 512

Data processed and stored successfully

Working with IoT Data
Simulated IoT Devices (IoTDataSource.js):
The system simulates three types of sensors:
javascriptconst devices = [
  { id: 1, type: 'temperature', unit: 'celsius' },   // Range: -10°C to 40°C
  { id: 2, type: 'humidity', unit: 'percent' },      // Range: 0% to 100%
  { id: 3, type: 'pressure', unit: 'hPa' }          // Range: 900 to 1100 hPa
];
To integrate real IoT devices:
Modify src/IoTDataSource.js:
javascript// Example: Reading from actual sensors
const Sensor = require('your-iot-sensor-library');

class IoTDataSource {
  constructor() {
    this.temperatureSensor = new Sensor.Temperature('/dev/ttyUSB0');
    this.humiditySensor = new Sensor.Humidity('/dev/ttyUSB1');
  }

  async getData() {
    return [
      {
        deviceId: 1,
        type: 'temperature',
        value: await this.temperatureSensor.read(),
        unit: 'celsius',
        timestamp: new Date().toISOString()
      }
      // ... more sensors
    ];
  }
}

Encryption & Decryption
Encrypt data manually:
javascriptconst Encryptor = require('./src/Encryptor');
const encryptor = new Encryptor(process.env.ENCRYPTION_KEY);

const sensorData = {
  deviceId: 1,
  temperature: 25.5,
  timestamp: Date.now()
};

const encrypted = encryptor.encrypt(sensorData);
console.log('Encrypted:', encrypted);

const decrypted = encryptor.decrypt(encrypted);
console.log('Decrypted:', decrypted);

Blockchain Interactions
Query stored data from smart contract:
javascriptconst BlockchainConnectorFactory = require('./src/BlockchainConnectorFactory');

// Connect to Ethereum
const connector = BlockchainConnectorFactory.getConnector('ethereum', config);
await connector.connect();

// Deploy or connect to existing contract
const contract = await connector.deployContract(abi, bytecode);
// OR: const contract = await connector.getContract(contractAddress, abi);

// Store data
await contract.methods.set(12345).send({ 
  from: yourAddress,
  gas: 100000 
});

// Retrieve data
const value = await contract.methods.get().call();
console.log('Stored value:', value);

Multi-Platform Support (Ethereum + Hyperledger)
Switch between blockchains by modifying config.json:
json{
  "platforms": {
    "ethereum": { ... },
    "hyperledger": { ... }
  },
  "defaultPlatform": "ethereum"  // Change to "hyperledger" if needed
}
Using Hyperledger Fabric:
javascript// Ensure you have Hyperledger network set up
const connector = BlockchainConnectorFactory.getConnector('hyperledger', config);
await connector.connect(config.platforms.hyperledger);

// Submit transaction
await connector.sendTransaction('createAsset', 'asset1', 'data');

// Query data
const result = await connector.queryData('readAsset', 'asset1');

🔒 Security Testing
Built-in Security Features
The framework includes multiple security layers:

AES-256 Encryption (crypto-js)

Symmetric encryption for all IoT data
Secure key management via environment variables


Blockchain Immutability

All data stored on-chain is tamper-proof
Smart contract-based access control


Attack Resistance (from FETICON 2025 testing)

MITM (Man-in-the-Middle) attack simulation: ✅ Passed
Replay attack simulation: ✅ Passed



Running Security Tests
Test 1: Encryption Integrity
bash# The main.js automatically performs encryption verification
node src/main.js
Look for this verification output:
Verification:
5. Raw data matches decrypted data: true  ✅
6. Encrypted data is different from raw data: true  ✅
7. Length of encrypted data: 512
Test 2: Data Tampering Detection
javascript// Manual test - modify encrypted data and attempt decryption
const Encryptor = require('./src/Encryptor');
const encryptor = new Encryptor(process.env.ENCRYPTION_KEY);

const data = { value: 100 };
let encrypted = encryptor.encrypt(data);

// Tamper with encrypted data
encrypted = encrypted.substring(0, encrypted.length - 5) + 'XXXXX';

try {
  const decrypted = encryptor.decrypt(encrypted);
  console.log('FAILED: Tampered data was decrypted!');
} catch (error) {
  console.log('PASSED: Tampered data rejected ✅');
}
Test 3: Access Control
javascriptconst AccessControl = require('./src/AccessControl');

const ac = new AccessControl();
ac.addRole('admin', ['read', 'write', 'delete']);
ac.addRole('viewer', ['read']);

console.log('Admin can write:', ac.checkPermission('admin', 'write'));  // true
console.log('Viewer can write:', ac.checkPermission('viewer', 'write')); // false
Security Best Practices Implemented
✅ Environment variable management - No hardcoded secrets
✅ AES-256 encryption - Industry-standard cryptography
✅ Smart contract validation - Data integrity on blockchain
✅ Role-based access control - Granular permissions
✅ Modular security architecture - Easy to audit and extend
Known Security Considerations
⚠️ Private key management: Store private keys securely (hardware wallet recommended for production)
⚠️ Infura dependency: Consider running your own Ethereum node for critical applications
⚠️ Gas costs: Monitor transaction costs on mainnet
⚠️ Rate limiting: Implement API rate limiting in production

📚 Research Publication
This project was developed as a Final Year Project at the Federal University of Technology, Minna, Nigeria, and represents cutting-edge research in blockchain-IoT security integration.
Conference Presentation: FETICON 2025 (Paper 38)
Title: Development of a Blockchain-Internet of Things (IoT) Security Framework
Project Grade: A (Top Performance)
Institution: Federal University of Technology, Minna
Research Team
Primary Authors:

Opeyemi Aderiike Abisoye - Lead Researcher, Department of Computer Science
Joshua Salem Kiddams - Co-Corresponding Author, Presenter & System Architect, Department of Computer Science

Co-Authors:

Enesi Femi Aminu - Department of Computer Science, FUT Minna
Blessing Olatunde Abisoye - Department of Computer Engineering, FUT Minna
Oluwaseun Adeniyi Ojerinde - Department of Computer Science, FUT Minna
Gideon Adesina Babalola - Department of Library Science, FUT Minna

Abstract
Internet of Things (IoT) has revolutionized data connectivity, fostering advancements across various sectors. The potential of blockchain technology to enhance the security of IoT ecosystems is an interesting aspect of IoT data security. The challenge lies in ensuring data integrity and confidentiality in a decentralized environment.
This study investigates the potential of blockchain technology in enhancing the security of IoT ecosystems and develops a scalable and secure IoT data management system. The method adopted involved developing a proof-of-concept model using JavaScript, Web3.js, and Ethereum smart contracts with Advanced Encryption Standard (AES-256) symmetric encryption cryptography.
Results demonstrate:

Encryption remained unbreachable in MITM and replay attack simulations
Transaction throughput reached up to 400 TPS (transactions per second)
Average confirmation time: under 10 seconds
Network performance remained stable up to 500 simultaneous device connections
Minor delays noted at 600 devices; significant delays at 1,000 devices (25-30 seconds)

The system is designed to enhance the security and integrity of data collected from IoT devices, particularly in agricultural applications such as soil moisture sensors and weather stations.
Keywords: Internet of Things, Blockchain, Security Framework, Ethereum, Smart Contracts, AES-256 Encryption, Agricultural IoT, Scalability
Significance of Research
This work contributes to:

IoT Security Enhancement - Novel approach combining blockchain immutability with AES encryption
Agricultural Technology - Practical applications for precision agriculture in developing nations
Scalable Architecture - Demonstrated capability to handle hundreds of simultaneous IoT devices
Multi-Platform Design - Supports both Ethereum and Hyperledger Fabric blockchains

Access Full Paper
📄 Read Full FETICON 2025 Paper
📊 View Presentation Slides (if available)
Media Coverage & Recognition
🏆 Grade A - Top performance in final year project assessment
🎤 FETICON 2025 Presenter - Selected to present Paper 38
📜 Certificate of Presentation - Official recognition from conference organizers

🔮 Future Work
Recommended Enhancements

Layer 2 Scaling Solutions

Integrate Polygon or Arbitrum for improved TPS
Reduce transaction costs and confirmation times


Decentralized Storage

Implement IPFS for large data payloads
Store only hashes on blockchain


Advanced Smart Contracts

Implement role-based access control (RBAC)
Add multi-signature authentication
Develop automated policy enforcement


Cross-Chain Compatibility

Support multiple blockchain platforms
Implement blockchain bridge protocols


Real-World Deployment

Pilot testing in actual agricultural environments
Integration with existing farm management systems
Mobile application development


Enhanced Security

Zero-knowledge proof implementation
Formal verification of smart contracts
Advanced threat detection systems




👥 Authors
Joshua Salem Kiddams - Co-Corresponding Author, Presenter & System Architect

🎓 B.Tech Computer Science, Federal University of Technology, Minna (Second Class Lower)
🏆 Final Year Project Grade: A (Top Performance in Blockchain/IoT Specialization)
💼 Coding Instructor | Blockchain & IoT Security Researcher
🎤 FETICON 2025 Presenter (Paper 38)
📧 Email: faidayamba2002@gmail.com
🔗 Connect:

LinkedIn (add your LinkedIn URL)
GitHub (add your GitHub profile)
Portfolio Website (add once created)
Twitter/X (optional)



Research Contributions:

System architecture design and implementation
Ethereum blockchain integration (Web3.js)
AES-256 encryption module development
Load testing and performance analysis (100-1000 devices)
Security simulations (MITM, replay attacks)
Conference paper documentation and presentation


Opeyemi Aderiike Abisoye - Lead Researcher

Department of Computer Science, Federal University of Technology, Minna
📧 Email: opeyemiabisoye1@gmail.com
🆔 ORCID: 0000-0002-7324-2479

Co-Authors & Collaborators:

Enesi Femi Aminu - Computer Science, FUT Minna
Blessing Olatunde Abisoye - Computer Engineering, FUT Minna
Oluwaseun Adeniyi Ojerinde - Computer Science, FUT Minna
Gideon Adesina Babalola - Library Science, FUT Minna


Academic Supervisors & Mentors
Special thanks to the faculty members at FUT Minna's Department of Computer Science who supervised and guided this research.

For Academic Inquiries & Collaboration
Joshua Kiddams
📧 Primary Contact: faidayamba2002@gmail.com
🎓 Institution: Federal University of Technology, Minna, Nigeria
🔬 Research Interests: Blockchain Security, IoT Systems, Decentralized Applications, Smart Agriculture
🏆 Available for:

Master's program research collaborations
Blockchain/IoT consulting
Conference presentations
Technical workshops & training


📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments

Federal University of Technology, Minna
FETICON 2025 Conference Organizers
Ethereum Foundation & Infura for testnet access
The open-source blockchain and IoT communities


📧 Contact
For questions, collaboration opportunities, or academic inquiries:
Joshua Kiddams
📧 Email: faidayamba2002@gmail.com
🎓 Institution: Federal University of Technology, Minna

⭐ Citation
If you use this work in your research, please cite:
{
  title={Development of a Blockchain-Internet of Things (IoT) Security Framework},
  author={Abisoye, Opeyemi Aderiike and Kiddams, Joshua Salem and Aminu, Enesi Femi and Abisoye, Blessing Olatunde and Ojerinde, Oluwaseun Adeniyi and Babalola, Gideon Adesina},
  booktitle={FETICON 2025},
  year={2025},
  organization={Federal University of Technology}
}

⭐ Star this repository if you find it useful!
🍴 Fork it to build upon this work!
🐛 Report issues to help improve the system!

Built with ❤️ for secure IoT ecosystems
