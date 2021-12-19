//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/remote.js remote.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    var target = ns.args[0]
    //let targets = ["powerhouse-fitness","fulcrumassets","Icarus","kuai-gong","megacorp","fulcrumtech","ecorp","b-and-a","blade","4sigma","nwo","omnitek","clarkeinc","aerocorp","stormtech","taiyang-digital","infocomm","galactic-cyber","defcomm","omnia","zeud-med","icarus","deltaone","helios","microdyne","solaris","titan-labs","vitalife","zb-institute","zb-def","nova-med","univ-energy","unitalife","applied-energetics","global-pharm","snap-fitness","lexo-corp","syscore","alpha-ent","run4theh111z",".","aevum-police","millenium-fitness","rho-construction","summit-uni","catalyst","rothman-uni","netlink","comptek","I.I.I.I","the-hub","johnson-ortho","crush-fitness","avmnite-02h","omega-net","silver-helix","phantasy","iron-gym","max-hardware","zer0","CSEC","neo-net","harakiri-sushi","hong-fang-tea","nectar-net","joesguns","sigma-cosmetics","foodnstuff","n00dles"]
    let targets = ["n00dles","foodnstuff","sigma-cosmetics","joesguns","nectar-net","hong-fang-tea","harakiri-sushi","neo-net","CSEC","zer0","max-hardware","iron-gym","phantasy","silver-helix","omega-net","avmnite-02h","crush-fitness","johnson-ortho","the-hub","I.I.I.I","comptek","netlink","rothman-uni","catalyst","summit-uni","rho-construction","millenium-fitness","aevum-police","run4theh111z",".","alpha-ent","syscore","lexo-corp","snap-fitness","global-pharm","applied-energetics","unitalife","univ-energy","nova-med","zb-def","zb-institute","vitalife","titan-labs","solaris","microdyne","helios","deltaone","omnia","defcomm","galactic-cyber","infocomm","taiyang-digital","stormtech","aerocorp","clarkeinc","omnitek","nwo","4sigma","blade","b-and-a","ecorp","fulcrumtech","megacorp","kuai-gong","Icarus","fulcrumassets","powerhouse-fitness"]
    var arraylen = targets.length
    if (!ns.fileExists("steal.js")) {
        await ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/steal.js", "steal.js")
    }
    for (var i = 0; i < arraylen; i++) {
        ns.run("steal.js", 1, targets[i])
    }
}
