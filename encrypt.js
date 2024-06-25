const CryptoJS = require("crypto-js");

const secretKey = 'key-encrypt';

const environment = {
    apiUrl: 'assets/data/players.json',
    imgNotFound: 'assets/images/image-not-found.png',
    spinnerPath: 'assets/spinner/spinner.svg',
};

const encryptedEnvironment = {};

for (let key in environment) {
    encryptedEnvironment[key] = CryptoJS.AES.encrypt(environment[key], secretKey).toString();
}

console.log(JSON.stringify(encryptedEnvironment, null, 2));
