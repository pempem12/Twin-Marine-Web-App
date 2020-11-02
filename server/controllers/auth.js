import bcrypt from "bcrypt"

import config from "../config/config.js"
import * as errorCodes from "../errorCodes.js"
import User_m from "../models/User.js" 


const SALT_WORK_FACTOR = 10

// Returns a promise to create the hash/salt pair
const createHashSalt = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
            if (err) reject(err)

            bcrypt.hash(password, salt, (err, hash) => {
                if (err) reject(err)

                resolve(hash);
            })
        });
    });    
};

const comparePassword = (candidate, stored) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidate, stored, (err, isMatch) => {
            if (err) reject(err);

            resolve(isMatch);
        });
    });
};

// This is not meant to be called from a webpage due to the token. Parent accounts are to be made manually.
export const createParentUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const parentToken = req.body.parentToken;

    if (String(parentToken) !== config.tokens.createParent) {
        console.log(parentToken);
        res.status(403).end() // This token is not valid to create a parent user
    }

    // Create the hash/salt pair
    createHashSalt(password)
        .then(hash =>
            new User_m({
                  email: email // The model ensures email is unique
                , password: hash
                , isParent: true
            }).save())
        .then(suc => {
            console.log(suc);
            res.status(200).end();
        })
        .catch(err => {
            // Handle unique email error
            if ("email" in err.errors && err.errors.email.kind === "unique") {
                console.log("Email must be unique");
               
                res.status(422) // Unprocessable
                    .json({
                        error: "Email must be unique"
                        , code: errorCodes.uniqueEmail
                     });

                return;
            }

            console.error(err); 
            res.status(500).end();
        });
}

export const login = async (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;

    console.log(req.body);

    User_m.findOne({ email: email })
        .then(user => {
            if (user === null) { // Check for missing user
                res.status(401).json({
                    error: "Emal/password mismatch"
                    , code: errorCodes.loginFail
                });
                
                throw new Error("exit"); // Do not continue to password check or comparison
            }

            console.log(pass);
            console.log(user.password);
            return comparePassword(pass, user.password); // Return password check promise
        })
        .then(isMatch => {
            console.log("Checking match");
            if (isMatch) {
                res.status(200).end();
            } else {
                res.status(401).json({
                      error: "Email/password mismatch"
                    , code: errorCodes.loginFail
                });
            }
        })
        .catch(err => {
            if (err.message === "exit") return; // Allow for exit without throwing error

            console.error(err);
            res.status(500).end();
        })
}
