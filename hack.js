/** @param {import(".").NS } ns */
export async function main(ns) {
    var target = ns.args[0];
    if (ns.fileExists("BruteSSH.exe", "home")) {
        ns.brutessh(target);
    }
    ns.nuke(target);
}
