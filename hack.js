//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/hack.js hack.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    var target = ns.args[0]
    if (ns.fileExists("brutessh.exe", "home")) {
        ns.brutessh(target)
        ns.tprint("BruteSSH "+target)
    }
    if (ns.fileExists("ftpcrack.exe", "home")) {
        ns.ftpcrack(target)
        ns.tprint("FTPCrack "+target)
    }
    if (ns.fileExists("relaysmtp.exe", "home")) {
        ns.relaysmtp(target)
        ns.tprint("RelaySMTP "+target)
    }
    if (ns.fileExists("httpworm.exe", "home")) {
        ns.httpworm(target)
        ns.tprint("HTTPWorm "+target)
    }
    if (ns.fileExists("sqlinject.exe", "home")) {
        ns.sqlinject(target)
        ns.tprint("SQLInject "+target)
    }
    ns.nuke(target)
    ns.tprint("Nuked "+target)
}
