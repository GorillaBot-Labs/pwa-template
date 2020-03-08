import express from "express";

import authRouter from './routers/auth';

let server = null;

const create = async (configure) => {
    const port = process.env.PORT || 3001;

    server = express();

    // Express only serves static assets in production
    if (process.env.NODE_ENV === "production") {
        server.use(express.static("client/build"));
    }

    server.set("port", port);

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
        console.log(`API is running - http://localhost:${port}/`);
    });
};

export default {
    create,
    start,
};
