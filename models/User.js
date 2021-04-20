const {model, Schema} = require("../db/connection")

const Note = new Schema({
    text: String,
    img: String
})

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    notes: [Note]
}, {timestamps: true})

const User = model("User", UserSchema)

module.exports = User