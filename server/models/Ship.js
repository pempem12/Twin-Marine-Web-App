import mongoose from "mongoose"

const Ship_sc = new mongoose.Schema({
        vesselName: { type: String, required: true }
      , imoNum: { type: String, required: true }
      , serviceType: { type: String, required: true }
      , technician: { type: String, required: true }
      , iframe: { type: String, required: true }
});

Ship_sc.statics.getShipsFromIDs = function(ids) {
      const objectIDs = ids.map((id) => mongoose.Types.ObjectId(id));

      return this.find({
            "_id": {
                  $in: objectIDs
            }
      });
}

export default mongoose.model("ships", Ship_sc);