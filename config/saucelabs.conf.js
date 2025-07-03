
import { generalConf } from "./general.conf.js"  
export let saucelabsConf {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  hostname: 'ondemand.us-west-1.saucelabs.com',
  port: 443,
 

capabilities: [{
  platformName": 'Android',
  "appium:app": "storage:filename=universal.apk",
  "appium:deviceName": "Android GoogleAPI Emulator",
  "appium:platformVersion": "12.0",
  "appium:automationName": "UiAutomator2",
  "appium:disableIdLocatorAutocompletion": true,
  'sauceoptions': {
    build: 'appium-build-teste-ebacshop',
    name: 'Ebac Shop Test',
    appiumVersion: '2.11.0',    
    deviceOrientation: 'portrait',
  }
...generalConf 
}],


} 

