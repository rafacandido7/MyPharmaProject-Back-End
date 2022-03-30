const mongoose = require ('mongoose');

const DataSchema = new mongoose.Schema ({
    bar_code: {
        type: Number,
        require: true,
        default: 11111,
    }, 
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
        default: 0,
    },
    quantity: {
        type: Number,
        require: true,
        default: 0,
    },
    description: {
        type: String,
        require: true,
    },
}, {
    timestamps:true,
});

module.exports = mongoose.model ('Product', DataSchema);
