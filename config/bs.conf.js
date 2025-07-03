import { generalConf } from "./general.conf.js"  
export let bsConf = {
user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: 'hub.browserstack.com',


capabilities: [{"appium:deviceName": "Samsung Galaxy S22 Ultra",
  "appium:platformVersion": "12.0",
  "platformName": "Android",
  "appium:automationName": "UiAutomator2",
  "appium:app": "bs://e2ef9ce3c9492d182c9f0a40885598b6d9646f0d",
  "bstack:options": {
    "projectName": "EBAC Shop Mobile",
    "buildName": "CI Mobile Tests",
    "sessionName": `BStest${process.env.PLATFORM} `
   // "userName": "diego_VOKlWs",
   // "accessKey": "izUcvFDoomFRnuqGwvEb",
    //"source": "appiumdesktop"
  }
}],
...generalConf
}

