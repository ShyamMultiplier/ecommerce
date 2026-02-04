const ObjectId = require("mongodb").ObjectId;

const reviews = [
    {
    comment: "Excellent textbook for my engineering course. Arrived in great condition.",
    rating: 5,
    user: { _id: ObjectId(), name: "Rahul Sharma" },
  },
  {
    comment: "This kettle is a life-saver in the hostel. Boils water really quickly for Maggi.",
    rating: 5,
    user: { _id: ObjectId(), name: "Sneha Patel" },
  },
  {
    comment: "The laptop is great for coding, though I wish it had a bit more battery life.",
    rating: 4,
    user: { _id: ObjectId(), name: "Amit Kumar" },
  },
  {
    comment: "Indestructible cycle, perfect for the bumpy roads on our campus.",
    rating: 5,
    user: { _id: ObjectId(), name: "Vikram Singh" },
  },
  {
    comment: "The cooler works well but is a bit loud during late-night study sessions.",
    rating: 3,
    user: { _id: ObjectId(), name: "Priya Das" },
  },
];

module.exports = reviews;