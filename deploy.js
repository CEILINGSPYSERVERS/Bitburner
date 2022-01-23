//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/deploy.js deploy.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    let target = ns.args[0]
    let host = ns.getHostname()
    await ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/weaken.js", "weaken.js")
    await ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/grow.js", "grow.js")
    await ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/dohack.js", "dohack.js")
    let m1 = (ns.getServerMaxRam(host) - ns.getServerUsedRam(host))/3
    let m2 = m1 / 1.75
    let m3 = m1 / 1.7
    let threads2 = 0 | m2
    let threads3 = 0 | m3
    ns.tprint("Running grow and weaken.js on " + threads2 + " threads.")
    ns.tprint("Running dohack.js on " + threads3 + " threads.")
    ns.run("weaken.js", threads2, target)
    ns.run("grow.js", threads2, target)
    ns.run("dohack.js", threads3, target)
}
