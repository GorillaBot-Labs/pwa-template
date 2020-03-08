import child_process from 'child_process';

const args = [
    'backend',
    '--globalSetup=./backend/globalSetupTests.js',
    '--globalTeardown=./backend/globalTeardownTests.js',
    '--detectOpenHandles'
];

if (process.env.NODE_ENV === "development") {
    args.push('--watch');
}

const opts = { stdio: 'inherit', shell: true };
child_process.spawn('jest', args, opts);