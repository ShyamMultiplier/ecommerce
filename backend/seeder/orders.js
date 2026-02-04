const ObjectId = require("mongodb").ObjectId;

const orders = Array.from({length: 22}).map((_, idx) => {
    let day = 20;
    let hour = idx < 10 ? "0" + idx : idx;
    let subtotal = (idx > 16 && idx < 21) ? 100 + 12*idx : 100;
    
    return {
        user: ObjectId("625add3d78fb449f9d9fe2ee"),
        orderTotal: {
            itemsCount: 1,
            cartSubtotal: subtotal
        },
        cartItems: [
            {
                name: "Student Essential Item",
                price: subtotal,
                image: {path: "/images/kettles/prestige.jpg"},
                quantity: 1,
                count: 10
            }
        ],
        paymentMethod: "UPI",
        isPaid: true,
        isDelivered: false,
        createdAt: `2022-03-${day}T${hour}:12:36.490+00:00`
    }
});

module.exports = orders;