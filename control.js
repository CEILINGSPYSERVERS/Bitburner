//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/control.js control.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    if (!ns.fileExists("remote.js")) {
        await ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/remote.js", "remote.js")
    }

    if (!ns.fileExists("restarthack.js")) {
        await ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/restarthack.js", "restarthack.js")
    }

    if (!ns.fileExists("deploy.js")) {
        await ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/deploy.js", "deploy.js")
    }

    if (!ns.fileExists("steal.js")) {
        await ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/steal.js", "steal.js")
    }

    if (!ns.fileExists("hack.js")) {
        await ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/hack.js", "hack.js")
    }
}
