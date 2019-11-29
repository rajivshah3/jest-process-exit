const axios = require('axios');
const name = process.argv[2];

const hello = (name) => {
    console.log("Hello, " + name);
    console.warn(process.exit);
    process.exit(0);
};

const goodbye = async (name) => {
    await axios("https://google.com");
    await axios("https://facebook.com");
    await axios("https://iota.org");
    console.log("Goodbye, " + name);
};

module.exports = { hello, goodbye };

hello(name);
