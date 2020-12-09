import config from "../config/config.js"
import * as errorCodes from "../errorCodes.js"
import Ship_m from "../models/Ship.js"
import User_m from "../models/User.js"

export const createShip = async (req, res) => {
    if (req.body.token !== config.tokens.createShip) {
        res.status(401).send("Unauthorized");
        return;
    }
    
    new Ship_m({
        vesselName: req.body.vesselName 
      , imoNum: req.body.imoNum 
      , serviceType: req.body.serviceType 
      , technician: req.body.technician 
      , iframe: req.body.iframe 
    }).save()
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
}

export const getShipsPermitted = async (req, res) => {
    console.log(req.session.user.email);
    const user = await User_m.findByEmail(req.session.user.email);

    res.json(await Ship_m.getShipsFromIDs(user.shipsPermitted));
}

export const permitShip = async (req, res) => {
    console.log("Permitting...\n");
    const user = await User_m.findByEmail(req.body.email);
    console.log("Permitting for user: " + user.email);

    user.permitShip(req.body.shipFK)
        .then(doc => {
            res.json(doc);
        });
}