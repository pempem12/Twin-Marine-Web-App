import mongoose from "mongoose"
import uniqueValidator from "mongoose-unique-validator"

const User_sc = new mongoose.Schema({
		email: { type: String, required: true, unique: true }
	, password: { type: String, required: true }
	, isParent: { type: Boolean, required: true }
	, parent: { type: mongoose.Schema.Types.ObjectId }
	, shipsOwned: { type: [mongoose.Schema.Types.ObjectId]}
	, shipsPermitted: { type: [mongoose.Schema.Types.ObjectId]}
})

User_sc.methods.permitShip = function(shipID) {
	if (!this.shipsPermitted.includes(shipID))
		this.shipsPermitted.push(shipID);

	return this.save();
}

User_sc.statics.findByEmail = function(email) {
	console.log(email);
	return this.findOne({
		email: email
	});
};

User_sc.plugin(uniqueValidator); // Make email unique

export default mongoose.model("users", User_sc);