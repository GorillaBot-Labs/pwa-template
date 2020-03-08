import cors from 'cors';

import server from '../server';

let isRunning = false;

const testServer = {
    start: async (port) => {
        // prevent reruns with the watch flag to start multiple servers
        if (isRunning) return;

        await server.create(async (testServer) => {
            testServer.set('port', port);
            testServer.use(cors());
        });
        await server.start();

        isRunning = true;
    }
};

export default testServer;
