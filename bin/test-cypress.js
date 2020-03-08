import child_process from 'child_process';
import testServer from "../backend/helpers/testServer";

const TIME_LIMIT = (60 * 1000) * 5; // five minutes

testServer.start(3000);

const args = ['cy:run'];
const opts = {stdio: 'inherit', shell: true};
child_process.spawn('yarn', args, opts);

setTimeout(() => {
    throw new Error('Failed to finish tests in under 5 minutes');
}, TIME_LIMIT);
