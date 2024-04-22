const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product', // Tên model mà ObjectId này tham chiếu đến
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;