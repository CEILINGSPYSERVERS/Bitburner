//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/restarthack.js restarthack.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    let targets = ["n00dles","foodnstuff","sigma-cosmetics","joesguns","nectar-net","hong-fang-tea","harakiri-sushi","neo-net"]
    var arraylen = targets.length
    for (var i = 0; i < arraylen; i++) {
        ns.run("hack.js", 1, targets[i])
    }
}
