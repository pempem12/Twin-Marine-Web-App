import express from "express"

import * as auth from "../controllers/auth.js"
import * as shipController from "../controllers/shipController.js"

/**
 * @param {express.IRouter} app Express app
 * @param {String} app Express app
 */
export const route = (app, endpoint) => {
    app.post(`${endpoint}`, shipController.createShip);
    
    // All following routes require the user to be logged in
    app.use(`${endpoint}/*`, auth.authenticateSession(false));

    app.post(`${endpoint}/permit`, shipController.permitShip);
    app.get(`${endpoint}/permit`, shipController.getShipsPermitted);
}