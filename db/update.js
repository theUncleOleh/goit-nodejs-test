const filePath = require("./filePath");
const fs = require("fs/promises");
const update = async (contacts) => {
  await fs.writeFile(filePath, JSON.stringify(contacts));
};

module.exports = update;
