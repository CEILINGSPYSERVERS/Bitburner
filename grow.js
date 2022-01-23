//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/grow.js grow.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    var target = ns.args[0]
    while (true) {
        await ns.grow(target)
    }
}
