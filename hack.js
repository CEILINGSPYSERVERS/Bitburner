//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/hack.js hack.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    let target = ns.args[0]
    let files = ["BruteSSH.exe", "FTPCrack.exe", "RelaySMTP.exe", "HTTPWorm.exe", "SQLInject.exe"]
    let programs = ["brutessh", "ftpcrack", "relaysmtp", "httpworm", "sqlinject"]
    let arraylen = files.length
    for (let i = 0; i < arraylen; i++) {
        if (ns.fileExists(files[i], "home")) {
            if (i == 0) {
                await ns.brutessh(target)
            } else if (i == 1) {
                await ns.ftpcrack(target)
            } else if (i == 2) {
                await ns.relaysmtp(target)
            } else if (i == 3) {
                await ns.httpworm(target)
            } else {
                await ns.sqlinject(target)
            }
            ns.tprint(programs[i] + " " + target)
        }
    }
    ns.nuke(target)
    ns.tprint("Nuked " + target)
}
