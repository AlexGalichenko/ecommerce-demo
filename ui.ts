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
        '@qavajs/html-formatter:report/report.html'
    ],
    memory: new Memory(),
    pageObject: new App(),
    browser: {
        capabilities: {
            browserName: 'chromium'
        }
    },
    templates: ['templates/*.feature'],
    publishQuiet: true,
    parallel: 1
}
