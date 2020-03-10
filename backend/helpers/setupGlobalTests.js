import testServer from "./testServer";

export default () => {
    // Bootstrap our test environment server once per test suite run
    testServer.start();
};
