//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/control.js control.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    let files = ["remote.js", "restarthack.js", "deploy.js", "steal.js", "hack.js"]
    var arraylen = files.length
    for (var i = 0; i < arraylen; i++) {
        if (!ns.fileExists(files[i])) {
            await ns.wget(`https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/${files[i]}`, `${files[i]}`)
        }
    }
}
