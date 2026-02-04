const bcrypt = require("bcryptjs");
const ObjectId = require("mongodb").ObjectId;

const users = [
  {
    name: 'admin',
    lastName: 'admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('admin@gmail.com', 10),
    isAdmin: true,
  },
  {
    _id: ObjectId("625add3d78fb449f9d9fe2ee"),
    name: 'santhosh',
    lastName: 'kumar',
    email: 'santhoshkumar@gmail.com',
    password: bcrypt.hashSync('santhoshkumar@gmail.com', 10),
  },
];

module.exports = users;