import { config } from 'dotenv';
config();
import Memory from './memory';
import App from './page_object';

export default {
    paths: ['features/**/*.api.feature'],
    require: [
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
            description: 'API',
            tags: ['API'],
            project: process.env.RP_PROJECT,
            launch: 'E-Commerce Demo API',
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
    templates: ['templates/*.feature'],
    publishQuiet: true,
    parallel: 5
}
