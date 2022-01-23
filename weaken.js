//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/weaken.js weaken.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    var target = ns.args[0]
    while (True) {
        await ns.weaken(target)
    }
}
