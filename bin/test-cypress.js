import child_process from 'child_process';
import testServer from "../backend/helpers/testServer";

testServer.start(3000);

const args = ['cy:run'];
const opts = {stdio: 'inherit', shell: true};
child_process.spawn('yarn', args, opts);

