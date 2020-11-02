import mongoose from "mongoose"
import uniqueValidator from "mongoose-unique-validator"

const User_sc = new mongoose.Schema({
      email: { type: String, required: true, unique: true }
    , password: { type: String, required: true }
    , isParent: { type: Boolean, required: true }
})

User_sc.plugin(uniqueValidator);

export default mongoose.model("users", User_sc);