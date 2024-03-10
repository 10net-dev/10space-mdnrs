const CryptoJS = require('crypto-js');

// Function to encode data
function encodeData(data, secretKey) {
    const encrypted = CryptoJS.AES.encrypt(data, secretKey).toString();
    return encrypted.substring(0, 7); // Limit to 7 characters
}

// Function to decode data
function decodeData(encodedData, secretKey) {
    const decrypted = CryptoJS.AES.decrypt(encodedData, secretKey).toString(CryptoJS.enc.Utf8);
    return decrypted;
}

// Example usage
const secretKey = 'yourSecretKey';
const originalData = 'Hello, world!';
const encodedData = encodeData(originalData, secretKey);
console.log('Encoded data:', encodedData);

const decodedData = decodeData(encodedData, secretKey);
console.log('Decoded data:', decodedData);
