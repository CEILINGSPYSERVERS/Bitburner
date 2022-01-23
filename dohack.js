//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/dohack.js dohack.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    let target = ns.args[0]
    while (true) {
        await ns.hack(target)
    }
}
