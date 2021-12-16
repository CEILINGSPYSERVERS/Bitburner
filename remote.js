/** @param {import(".").NS } ns */
export async function main(ns) {
    var target = ns.args[0]
    let targets = ["nectara-net", "harakiri-sushi", "hong-fang-tea", "joesguns", "sigma-cosmetics", "foodnstuff", "n00dles"]
    var arraylen = targets.length
    if (!ns.fileExists("steal.js")) {
        ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/steal.js", "steal.js")
    }
    for (var i = 0; i < arraylen; i++) {
        ns.run("steal.js", 1, targets[i])
    }
}
