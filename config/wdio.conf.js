import { localConf } from "./local.conf.js";
import { saucelabsConf } from "./saucelabs.conf.js";
import { bsConf } from "./bs.conf.js";

//const { localConf } = require("./local.conf");
//const { saucelabsConf } = require("./sauce.conf");

import "dotenv/config";

function getConfig() {
    switch (process.env.ENVIRONMENT) {
        case "local":
            return localConf;

        case "saucelabs":
            return saucelabsConf;

             case "browserstack":
            return bsConf;
    }
}
export const config = getConfig();
