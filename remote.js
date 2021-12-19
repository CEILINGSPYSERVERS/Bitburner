//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/remote.js remote.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    var target = ns.args[0]
    await ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/steal.js", "steal.js")
    let threads = ns.getServerUsedRam(target) / ns.getScriptRam("steal.js", target)
    ns.tprint("Running steal.js on "+threads+" threads.")
    ns.run("steal.js", threads, target)
}
