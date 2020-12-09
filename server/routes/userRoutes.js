import express from "express"

import * as auth from "../controllers/auth.js"

/**
 * @param {express.IRouter} app Express app
 * @param {String} app Express app
 */
export const route = (app, endpoint) => {
    app.post(`${endpoint}/parent`, auth.createParentUser);
    app.post(`${endpoint}/login`, auth.login);

    // 
    app.get(`${endpoint}/auth`, auth.authenticateSession(false), (req, res) => { res.json({ email: req.session.user.email }) });

    // All following routes require the user to be logged in
    app.use(`${endpoint}/*`, auth.authenticateSession(false));
    
    
    app.post(`${endpoint}/guest`, auth.createGuestUser);
    app.post(`${endpoint}/logout`, (req, res) => res.status(200).send("Logout successful!\n"));
}