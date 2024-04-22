const mongoose = require('mongoose');

// Định nghĩa schema cho sản phẩm
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    // Các trường khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể
});

// Tạo mô hình từ schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
