import mongoose, { mongo } from "mongoose"

const Ship_sc = new mongoose.Schema({
      name: { type: String, required: true }
	, iframe: { type: String, required: true }
});

export const Ship_m = mongoose.model("users", Ship_sc);