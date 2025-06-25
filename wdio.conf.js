export const config = {
    runner: 'local',

    specs: ['./test/specs/**/*.js'],
    exclude: [],

    maxInstances: 1,

capabilities: [{
  platformName: 'Android',
  'appium:deviceName': 'Android Emulator',
  'appium:platformVersion': '12.0',
  'appium:automationName': 'UiAutomator2',
  'appium:app': `${process.cwd()}/.app/ebacshop.apks`,
  'appium:autoGrantPermissions': true,
  'appium:newCommandTimeout': 240
}],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [['appium', {
        command: 'appium',
        args: {
            address: '127.0.0.1',
            port: 4723,
            log: './logs/appium.log'
        }
    }]],

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    //
    // Hooks para capturar screenshots em caso de erro
    afterTest: async function (test, context, { error, result, duration, passed }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
}
