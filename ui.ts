import { config } from 'dotenv';
config();
import Memory from './memory';
import App from './page_object';

export default {
    paths: ['features/**/*.ui.feature'],
    require: [
        'step_definition/*.ts',
        'node_modules/@qavajs/steps-playwright/index.js',
        'node_modules/@qavajs/steps-api/index.js',
        'node_modules/@qavajs/steps-memory/index.js'
    ],
    requireModule: ['@qavajs/template'],
    format: [
        '@qavajs/console-formatter',
        '@qavajs/xunit-formatter:report/report.xml',
        '@qavajs/html-formatter:report/report.html',
        '@qavajs/format-report-portal:report/rp.out'
    ],
    formatOptions: {
        rpConfig: {
            enable: Boolean(process.env.RP),
            debug: false,
            token: process.env.RP_TOKEN,
            endpoint: process.env.RP_ENDPOINT,
            description: 'UI',
            tags: ['UI'],
            project: process.env.RP_PROJECT,
            launch: 'E-Commerce Demo UI',
            mode: 'DEFAULT'
        },
    },
    memory: new Memory(),
    pageObject: new App(),
    browser: {
        capabilities: {
            browserName: 'chromium',
            headless: false
        }
    },
    screenshot: ['onFail'],
    templates: ['templates/*.feature'],
    publishQuiet: true,
    parallel: 1
}
