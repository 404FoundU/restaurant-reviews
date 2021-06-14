import app from "./server.js";

import mongodb from "mongodb";

import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 8000;


const MongoClient = mongodb.MongoClient;

MongoClient.connect(
    process.env.DB_URI,
    {
        poolSize: 50,
        wtimeout: 2500, l,
        useNewUrlParser: true

    })
    .catch(err => {
        console.error(err);
        process.exit(1);


    })
    .then(async client => {
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        })
    })

