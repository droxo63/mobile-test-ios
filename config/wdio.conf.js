import { localConf } from "./local.conf.js";
import { saucelabsConf } from "./saucelabs.conf.js";

//const { localConf } = require("./local.conf");
//const { saucelabsConf } = require("./sauce.conf");

import "dotenv/config";

function getConfig() {
    switch (process.env.ENVIRONMENT) {
        case "local":
            return localConf;

        case "saucelabs":
            return saucelabsConf;
    }
}
exports.config = getConfig();
