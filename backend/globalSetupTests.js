import testServer from "./helpers/testServer";

export default () => {
    // Bootstrap our test environment server once per test suite run
    testServer.start(3033);
};
