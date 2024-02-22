const util = require("util");
const crypto = require("crypto");

const pbkdf2 = util.promisify(crypto.pbkdf2);

const verifyPw = async (password, hashedPassword) => {
  const [algo, encodedSalt, iterStr, keyLenStr, encodedDigest] =
    hashedPassword.split(":");
  const salt = Buffer.from(encodedSalt, "base64");
  const iter = parseInt(iterStr, 10);
  const keyLen = parseInt(keyLenStr, 10);
  const storedDigest = Buffer.from(encodedDigest, "base64");
  const digest = await pbkdf2(password, salt, iter, keyLen, algo);
  return Buffer.compare(digest, storedDigest);
};

module.exports = {
  verifyPw,
};
