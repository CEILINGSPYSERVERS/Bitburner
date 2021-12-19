//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/remote.js remote.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    var target = ns.args[0]
    await ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/steal.js", "steal.js")
    let ramreq = ns.getScriptRam("steal.js", target)
    let maxram = ns.getServerMaxRam(target)
    let ramused = ns.getServerUsedRam(target)
    let freeram = maxram - freeram
    let threads = freeram / ramreq
    ns.run("steal.js", threads, target)
}
