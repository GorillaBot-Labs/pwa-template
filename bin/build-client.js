import child_process from 'child_process';

const args = [ 'build' ];
const opts = { stdio: 'inherit', cwd: 'client', shell: true };
child_process.spawn('yarn', args, opts);
