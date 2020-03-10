import express from "express";
import morgan from "morgan";
import bodyParser from 'body-parser';

import authRouter from './routers/auth';
import {isProduction, isTest} from "./constants";

let server = null;

const create = async (configure) => {
    const port = process.env.PORT || 3001;

    server = express();

    // setup between production and development servers
    if (isProduction) {
        server.use(morgan('combined'));
    } else {
        server.use(morgan('dev'));
    }

    // Express only serves static assets in production
    if (isProduction || isTest) {
        console.log(`serving client build`);
        server.use(express.static("client/build"));
    }

    server.set("port", port);
    server.use(bodyParser.json());

    if (configure) {
        await configure(server);
    }

    /*
     * Routing must come after configure hook to enable features
     * for testing environment.
     */
    server.use("/api/auth", authRouter);
};

const start = async () => {
    const port = server.get('port');

    server.listen(port, () => {
        console.log(`server is running - http://localhost:${port}/`);
    });
};

export default {
    create,
    start,
};
