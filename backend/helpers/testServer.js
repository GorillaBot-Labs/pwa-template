import cors from 'cors';

import server from '../server';
import {TEST_SERVER_PORT} from "../constants";

let isRunning = false;

const testServer = {
    start: async () => {
        // prevent reruns with the watch flag to start multiple servers
        if (isRunning) return;

        await server.create(async (testServer) => {
            testServer.set('port', TEST_SERVER_PORT);
            testServer.use(cors());
        });
        await server.start();

        isRunning = true;
    },
};

export default testServer;
