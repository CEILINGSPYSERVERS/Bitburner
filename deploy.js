//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/deploy.js deploy.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    var target = ns.args[0]
    ns.run(connect.js, 1, target)
    if (!ns.fileExists("remote.js", target)) {
        ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/remote.js", remote.js)
    }
    ns.run(remote.js, 1, target)
}
