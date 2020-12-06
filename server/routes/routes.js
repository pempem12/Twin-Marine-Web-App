import express from "express"
import path from "path"

import { authenticateSession } from "../controllers/auth.js"
import * as userRoutes from "./userRoutes.js"

/**
 * @param {express.IRouter} app Express app
 */
const initRoutes = (app) => {
    app.use("/login", express.static("./client/login.html"));
    app.use("/login.html", express.static("./client/login.html"));
    app.use("/scripts/", express.static("./client/scripts"));
    app.use("/css/", express.static("./client/css"));
    
    const apiEP = "/api/v1";
    userRoutes.route(app, `${apiEP}/user`);
    app.use(`${apiEP}/getList`, (req, res) => { res.json(["hello", "there", "world"]); });
    
    app.use("/images/", express.static("./client/images"));
    app.use("/", authenticateSession(true), express.static("./client"));
    
    // 404
    app.all('/*', (req, res) => {

        if (res.statusCode === 404) {
            res.sendFile(path.resolve("./client/notfound.html"));
        }
    });
}

export { initRoutes };