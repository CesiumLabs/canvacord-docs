import DocsManager from "./DocsManager";

const blacklisted = new Set(["docs", "master"]);

export default new DocsManager({
    id: "main",
    name: "Main",
    global: "Canvacord",
    repo: "DevSnowflake/canvacord",
    defaultTag: "main",
    branchFilter: (branch) => !blacklisted.has(branch),
    tagFilter: () => false
});
