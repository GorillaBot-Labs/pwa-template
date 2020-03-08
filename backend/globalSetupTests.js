/*
 * Bootstrap our test environment server once per test suite run
 */
import cors from 'cors';

import server from './server';

const TEST_SERVER_PORT = 3033;
let isRunning = false;

export default async () => {
    // prevent reruns with the watch flag to start multiple servers
    if (isRunning) return;

    await server.create(async (testServer) => {
        testServer.set('port', TEST_SERVER_PORT);
        testServer.use(cors());
    });
    await server.start();

    isRunning = true;
};
