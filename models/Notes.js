const {model, Schema} = require("../db/connection")

const NoteSchema = new Schema({
    text: String,
    img: String,
    user: {type: Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true})

const Note = model("Note", NoteSchema)

module.exports = Note