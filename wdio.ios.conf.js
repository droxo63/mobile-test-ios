exports.config = {
  user: 'oauth-droxo63-b54f2',
  key: '2e1297dc-85b0-4a0c-97fa-1a206d10f245',

  hostname: 'ondemand.us-west-1.saucelabs.com',
  port: 443,
  path: '/wd/hub',

  specs: ['./test/specs/**/*.js'],
  exclude: [],

  maxInstances: 1,

  capabilities: [{
  "platformName": "iOS",
  "app": "storage:filename=LojaEBAC-sim.zip",
  "deviceName": "iPhone.*",
  "platformVersion": "16",
  "automationName": "XCUITest"
}],

  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false,
      useCucumberStepReporter: false
    }]
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  afterTest: async function(test, context, { error, result, duration, passed, retries }) {
    if (browser) {
      await browser.takeScreenshot();
    }
  }
};