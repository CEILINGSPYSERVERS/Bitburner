//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/remote.js remote.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    let target = ns.args[0]
    let host = ns.getHostname()
    await ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/steal.js", "steal.js")
    let m1 = ns.getServerMaxRam(host) - ns.getServerUsedRam(host)
    let m2 = m1 / ns.getScriptRam("steal.js", host)
    let threads = 0|m2
    ns.tprint("Running steal.js on "+threads+" threads.")
    ns.run("steal.js", threads, target)
}
