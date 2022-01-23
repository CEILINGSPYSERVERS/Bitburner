//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/control.js control.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    let files = ["control.js", "remote.js", "steal.js", "hack.js", "restarthack.js", "anethack.js", "buyserver.js", "scan.js", "connect.js", "servertest.js"]
    var arraylen = files.length
    for (var i = 0; i < arraylen; i++) {
        await ns.wget(`https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/${files[i]}`, `${files[i]}`)
    }
}
