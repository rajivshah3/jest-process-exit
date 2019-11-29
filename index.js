const name = process.argv[2];

const hello = (name) => {
  return new Promise((resolve) => {
    console.log("Hello, " + name);
    console.warn(process.exit);
    process.exit(0);
    resolve();
  });
};

module.exports = { hello };

hello(name);
