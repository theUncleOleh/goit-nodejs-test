// const users = require("./users");
// console.log(users);
// const { admins } = require("./users");
// console.log(admins);

// const { getCurrentMonth } = require("./dev/date");
// // const currentMonth = getCurrentMonth();
// // const currentMonth = require("./date").getCurrentMonth();
// const currentMonth = require("./dev/date/getCurrentMonth")();
// console.log(`now ${currentMonth}`);

// const fs = require("fs/promises");
// const fileOperation = async (filePath, action = "read", data = "") => {
//   switch (action) {
//     case "read":
//       const text = await fs.readFile(filePath, "utf-8");
//       console.log(text);
//       break;
//     case "add":
//       await fs.appendFile(filePath, data);
//       break;
//     case "replace":
//       await fs.writeFile(filePath, data);
//       break;
//     default:
//       console.log("we do not what you want");
//   }
// };
// fileOperation("file.txt");
// fileOperation("file.txt", "add", "\nit hapens to the  best of us");
// fileOperation("file.txt", "replace", "\nit hapens to the  best of us");
// fs.readFile("file.txt", "utf-8")
//   .then((data) => console.log(data))
//   //   .then((data) => {
//   //     const text = data.toString("utf-8");
//   //     console.log(text);
//   //   })
//   .catch((error) => console.log(error.message));

const contactsOperations = require("./db");

/*
получить все контакты - contactsOperation.getAll;
получить один контакт - contactsOperations.getContactById;
добавить один товар по id - contactsOperations.addContact;
удалить контакт по id - contactsOperations.removeById;
обновить контакт по id - contactsOperations.updateById;
*/

const invokeActions = async ({ action, id, data }) => {
  switch (action) {
    case "getAll":
      const contacts = await contactsOperations.getAll();
      console.log(contacts);
      break;
    case "getById":
      const contact = await contactsOperations.getById(id);
      if (!contact) {
        throw new Error(`Product with id=${id} not found`);
      }
      console.log(contact);
      break;
    case "addContact":
      const newContact = await contactsOperations.addContact(data);
      console.log(newContact);
      break;
    case "updateById":
      const updateContact = await contactsOperations.updateById(id, data);
      if (!updateContact) {
        throw new Error(`Product with id=${id} not found`);
      }
      console.log(updateContact);
      break;
    default:
      console.log("unknown action");
  }
};

// invokeActions({ action: "getAll" });

// const id = "7";
// invokeActions({ action: "getById", id });

// const newData = {
//   name: "Coco Vandy",
//   email: "vandycoc@nonenimMauris.net",
//   phone: "(542) 13666-7038",
// };
// invokeActions({ action: "addContact", data: newData });

const updateId = "136ad8e4-07f2-4093-ac5c-8ae4fdf8daaf";
const updateById = {
  name: "Coco Vandy",
  email: "vandycoc@nonenimMauris.net",
  phone: "(542) 13666-0783",
};
invokeActions({ action: "updateById", id: updateId, data: updateById });
