export default () => {
    const isWatching = process.argv.includes("--watch");

    if (!isWatching) {
        // make sure we teardown the process and kill api server
        process.exit(0);
    }
}