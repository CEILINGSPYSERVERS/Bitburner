//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/restarthack.js restarthack.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    let port = ns.args[0]
    let ports = []
    ports0 = ["n00dles","foodnstuff","sigma-cosmetics","joesguns","nectar-net","hong-fang-tea","harakiri-sushi"]
    ports1 = ["neo-net","zer0","max-hardware","iron-gym","CSEC","neo-net"]
    ports2 = ["phantasy","silver-helix","omega-net","crush-fitness","johnson-ortho","the-hub","avmnite-02h"]
    ports3 = ["comptek","netlink","rothman-uni","catalyst","summit-uni","rho-construction","millenium-fitness","I.I.I.I"]
    ports4 = ["aevum-police","alpha-ent","syscore","lexo-corp","snap-fitness","global-pharm","applied-energetics","unitalife","univ-energy","nova-med","zb-def","run4theh111z","."]
    ports5 = ["zb-institute","vitalife","titan-labs","solaris","microdyne","helios","deltaone","icarus","zeus-med","omnia","defcomm","galactic-cyber","infocomm","taiyang-digital","stormtech","aerocorp","clarkinc","omnitek","nwo","4sigma","blade","b-and-a","ecorp","fulcrumtech","megacorp","kuai-gong","fulcrumassets","powerhouse-fitness"]

    for (let i = 0; i < ports[port].length; i++) {
        ns.run("hack.js", 1, ports[port][i])
        ns.tprint("Hacking "+ports[port][i])
        await ns.sleep(20)
    }
}
