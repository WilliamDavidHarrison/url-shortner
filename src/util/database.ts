import mongoose from "mongoose";
import * as Sentry from "@sentry/node";

require("dotenv").config();

module.exports = async () => {
    // Supress Deprecation Warning
    mongoose.set("strictQuery", true);

    return mongoose.connect(process.env.database, {
        keepAlive: true
    }).then(() => {
        console.log("Connected to Database!");
    }).catch(err => {
        Sentry.captureException(err);
        console.error(err);

        process.exit(1);
    })
}
