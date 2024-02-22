const util = require("util");
const crypto = require("crypto");

const pbkdf2 = util.promisify(crypto.pbkdf2);
const randomBytes = util.promisify(crypto.randomBytes);

const encryptPw = async (password) => {
  const ALGO = "sha512";
  const KEY_LEN = 64;
  const salt = await randomBytes(32);
  const iter = Math.floor(Math.random() * 20000) + 200000;
  const digest = await pbkdf2(password, salt, iter, KEY_LEN, ALGO);
  return `${ALGO}:${salt.toString(
    "base64"
  )}:${iter}:${KEY_LEN}:${digest.toString("base64")}`;
};

module.exports = {
  encryptPw,
};

// (async () => {
//   const hashedPassword = await generatePassword("1234");

//   const result1 = await verifyPassword("1234", hashedPassword);
//   const result2 = await verifyPassword("0234", hashedPassword);
//   console.log(`hashed: ${hashedPassword}`);
//   console.log(`password: ${result1} / passsword: ${result2}`);
// })();
