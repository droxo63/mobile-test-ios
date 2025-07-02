export const config = {
    runner: 'local',

    specs: ['./test/specs/**/*.js'],
    exclude: [],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        browserName: 'Chrome',
        'appium:deviceName': 'Android Emulator', // ou o nome do dispositivo real
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:newCommandTimeout': 240,
        'appium:chromeOptions': {
            w3c: true
        }
    }],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    // INCLUSÃO ESSENCIAL PARA TESTES MOBILE
    services: [['appium', {
        command: 'appium', // opcional, pode omitir se Appium estiver no PATH
        args: {
            // porta padrão
            address: '127.0.0.1',
            port: 4723,
            log: './logs/appium.log'
        }
    }]],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
