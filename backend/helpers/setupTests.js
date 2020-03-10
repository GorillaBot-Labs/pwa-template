import axios from "axios";

import truncateDatabase from "./truncateDatabase";
import {TEST_SERVER_PORT} from "../constants";

global.beforeEach(async () => {
    axios.defaults.baseURL = `http://localhost:${TEST_SERVER_PORT}`;
    await truncateDatabase();
});

global.afterEach(async () => {
    await truncateDatabase();
});