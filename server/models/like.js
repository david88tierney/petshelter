const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
    like: {
        type: Number,
        default: 0
    }
});

mongoose.model("Like", LikeSchema);

module.exports = LikeSchema;