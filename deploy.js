/** @param {import(".").NS } ns */
export async function main(ns) {
    var target = ns.args[0]
    ns.connect(target)
    if (ns.fileExists("test.js", target)) {
        ns.run(test.js, 1, (target))
    } else {
        ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/remote.js", remote.js)
    }
    ns.run(remote.js, 1, target)
}
