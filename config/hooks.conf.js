let hooksConf = {
 afterTest: async function (test, context, { error, result, duration, passed }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
}

module.exports = { hooksConf }