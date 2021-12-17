/** @param {import(".").NS } ns */
export async function main(ns) {
    let targets = ["silver-helix", "phantasy", "neo-net", "zer0", "max-hardware", "iron-gym", "nectar-net", "harakiri-sushi", "hong-fang-tea", "joesguns", "sigma-cosmetics", "foodnstuff", "n00dles"]
    var arraylen = targets.length
    for (var i = 0; i < arraylen; i++) {
        if (ns.fileExists("BruteSSH.exe", "home")) {
            ns.brutessh(targets[i])
        }
        if (ns.fileExists("ftpcrack.exe", "home")) {
            ns.ftpcrack(targets[i])
        }
        if (ns.fileExists("relaysmtp.exe", "home")) {
            ns.relaysmtp(targets[i])
        }
        ns.nuke(targets[i])
    }
}
