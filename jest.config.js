module.exports = {
    launch: {
        // headless: process.env.CI === "true",
        headless: true,
        ignoreDefaultArgs: ["--disable-extensions"],
        args: ["--no-sandbox"],
        executablePath: "chrome.exe"
    },
    // server: {
    //     command: "npm run serve",
    //     port: 9000,
    //     launchTimeout: 180000
    // }
};