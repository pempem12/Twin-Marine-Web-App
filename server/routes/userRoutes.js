import express from "express"

import * as auth from "../controllers/auth.js"

/**
 * @param {express.IRouter} app Express app
 * @param {String} app Express app
 */
export const route = (app, endpoint) => {
    app.post(endpoint, auth.createParentUser);
    app.post(`${endpoint}/login`, auth.login);

    app.post(`${endpoint}/logout`, (req, res) => {
        // If we are logged in, destroy the session (logout) successfully (200).
        if (req.session.user) {
            req.session.destroy(function (err) {
                if (err) throw err;

                res.status(200).send('Logged out');
            });
        // If NOT logged in, just return 401.
        } else {
            res.status(401).send('Unauthorized');
        }
   });

    // All following routes require the user to be logged in
    app.use(`${endpoint}/*`, (req, res) => {
        auth.authenticateSession(false);

        // TODO: I'm temp code! Remove me!
        // If user is logged in, show 200.
        if (req.session.user){
            res.status(200).send(`Logged in`);
        // If not logged in, show 401.
        } else {
            res.status(401).send(`Not logged in`);
        }
    });
 
}