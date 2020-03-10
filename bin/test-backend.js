import child_process from 'child_process';
import {isDevelopment, isTest} from "../backend/constants";

const args = [
    'backend db',
    '--env=node',
    '--setupTestFrameworkScriptFile=./backend/helpers/setupTests.js',
    '--globalSetup=./backend/helpers/setupGlobalTests.js',
    '--globalTeardown=./backend/helpers/teardownGlobalTests.js',
    '--detectOpenHandles'
];

if (isDevelopment || isTest) {
    args.push('--watch');
}

const opts = { stdio: 'inherit', shell: true };
child_process.spawn('jest', args, opts);
