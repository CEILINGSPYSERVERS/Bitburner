//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/remote.js remote.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    var target = ns.args[0]
    await ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/steal.js", "steal.js")
    ns.run("steal.js", 1, target)
}
