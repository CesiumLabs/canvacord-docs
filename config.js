const config = {
    TITLE: "Canvacord", // this will dynamically update the title
    SITE_NAME: "Canvacord",
    THEME: "light", // "light" | "dark"
    NAV: {
        ICON: {
            TYPE: "TEXT", // "TEXT" | "IMAGE"
            VALUE: "Canvacord", // IMAGE path or TEXT
            HREF: "/" // href
        },
        BUTTONS: [
            {
                label: "Home",
                path: "/",
                newPage: false
            },
            {
                label: "Documentation",
                path: "/docs",
                newPage: false
            },
            {
                label: "Discord",
                path: "https://discord.gg/uqB8kxh",
                newPage: true
            },
            {
                label: "GitHub",
                path: "https://github.com/DevSnowflake/Canvacord",
                newPage: true
            }
        ]
    },
    INSTALL_COMMAND: "npm install canvacord",
    HOME_LOGO: {
        TYPE: "TEXT", // "IMAGE" | "TEXT"
        VALUE: "Canvacord"
    },
    DESCRIPTION: {
        TITLE: "About",
        VALUE: "Canvacord is a powerful node.js module that allows you to manipulate images very easily."
    },
    FOOTER: {
        HEADER: "Canvacord",
        DESCRIPTION: "Powerful image manipulation tool for beginners."
    },
    LINKS: {
        string: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
        number: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",
        bigint: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",
        boolean: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",
        symbol: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",
        void: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",
        Object: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",
        Function: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",
        function: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",
        Array: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        Set: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",
        Map: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",
        Date: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
        RegExp: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",
        Promise: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
        Error: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error"
    }
};

export default config;