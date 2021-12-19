//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/deploy.js deploy.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    let targets = ["n00dles","foodnstuff","sigma-cosmetics","joesguns","nectar-net","hong-fang-tea","harakiri-sushi","neo-net","CSEC","zer0","max-hardware","iron-gym","phantasy","silver-helix","omega-net","avmnite-02h","crush-fitness","johnson-ortho","the-hub","I.I.I.I","comptek","netlink","rothman-uni","catalyst","summit-uni","rho-construction","millenium-fitness","aevum-police","run4theh111z",".","alpha-ent","syscore","lexo-corp","snap-fitness","global-pharm","applied-energetics","unitalife","univ-energy","nova-med","zb-def","zb-institute","vitalife","titan-labs","solaris","microdyne","helios","deltaone","icarus","zeud-med","omnia","defcomm","galactic-cyber","infocomm","taiyang-digital","stormtech","aerocorp","clarkeinc","omnitek","nwo","4sigma","blade","b-and-a","ecorp","fulcrumtech","megacorp","kuai-gong","Icarus","fulcrumassets","powerhouse-fitness"]
    var arraylen = targets.length
    for (var i = 0; i < arraylen; i++) {
        ns.run("connect.js", 1, targets[i])
        if (!ns.fileExists("remote.js", targets[i])) {
            await ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/remote.js", remote.js)
        }
        ns.run("remote.js", 1, targets[i])
    }
}
