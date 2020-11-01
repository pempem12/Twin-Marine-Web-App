import express from "express"
import path from "path"

const initRoutes = (app) => {
    app.use("/", express.static("./client"));
    
    // 404
    app.all('/*', (req, res) => {
        

        const pathName = path.resolve(req.url);
        console.log(pathName);

        res.statusCode === 404 ? res.send("Sorry, information not available") : res.sendFile(path.resolve("./client/notfound.html"))
    });
}

export { initRoutes };