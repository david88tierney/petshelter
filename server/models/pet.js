const mongoose = require("mongoose");
const LikeSchema = require("./like.js");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlenth: [3, "Name needs at least three characters"]
    },
    species: {
        type: String,
        required: [true, "Species is required."],
        minlenth: [3, "Species needs at least three characters"]
    },
    description: {
        type: String,
        required: [true, "Description is required."],
        minlenth: [3, "Description needs at least three characters"]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    },

    likes: [LikeSchema],

});

mongoose.model("Pet", PetSchema);