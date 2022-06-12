const fs = require("fs/promises");
// const path = require("path");
// const filePath = path.join(__dirname, "contacts.json");
const filePath = require("./filePath");
const getAll = async () => {
  const data = await fs.readFile(filePath);
  const contacts = JSON.parse(data);
  return contacts;
};

module.exports = getAll;
