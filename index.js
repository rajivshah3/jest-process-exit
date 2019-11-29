const name = process.argv[2];

const hello = (name) => {
    console.log("Hello, " + name);
    console.warn(process.exit);
    process.exit(0);
};

const goodbye = async (name) => {
    console.log("Goodbye, " + name);
};

module.exports = { hello, goodbye };

hello(name);
