//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/hack.js hack.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    var target = ns.args[0]
    let files = ["BruteSSH.exe", "FTPCrack.exe", "RelaySMTP.exe", "HTTPWorm.exe", "SQLInject.exe"]
    let programs = ["brutessh", "ftpcrack", "relaysmtp", "httpworm", "sqlinject"]
    var arraylen = files.length
    for (var i = 0; i < arraylen; i++) {
        if (ns.fileExists(files[i], "home")) {
            await ns.programs[i](target)
            ns.tprint(programs[i]+" "+target)
        }
        
    }
    ns.nuke(target)
    ns.tprint("Nuked "+target)
}
