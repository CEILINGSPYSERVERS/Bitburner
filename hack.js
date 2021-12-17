/** @param {import(".").NS } ns */
export async function main(ns) {
    var target = ns.args[0]
    if (ns.fileExists("BruteSSH.exe", "home")) {
        ns.brutessh(target)
    }
    if (ns.fileExists("ftpcrack.exe", "home")) {
        ns.ftpcrack(target)
    }
    if (ns.fileExists("relaysmtp.exe", "home")) {
        ns.relaysmtp(target)
    }
    if (ns.fileExists("httpworm.exe", "home")) {
        ns.httpworm(target)
    }
    if (ns.fileExists("sqlinject.exe", "home")) {
        ns.sqlinject(target)
    }
    ns.nuke(target)
}
