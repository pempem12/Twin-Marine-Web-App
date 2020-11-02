import express from "express"

import * as user_c from "../controllers/auth.js"

/**
 * @param {express.IRouter} app Express app
 * @param {String} app Express app
 */
export const route = (app, endpoint) => {
    app.post(endpoint, user_c.createParentUser);
    app.get(endpoint + "login", user_c.login);
}