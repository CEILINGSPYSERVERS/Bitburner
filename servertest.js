//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/servertest.js servertest.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    let money = ns.getServerMoneyAvailable("home")
    let ram = money / 55000
    let power = 1
    let exponent = 1
    while (power < ram) {
        power *= 2
        exponent += 1
    }
    exponent -= 2
    ram = 2 ** exponent
    let cost = ns.getPurchasedServerCost(ram)
    ns.tprint("Can buy " + ram + " GB server for " + cost)
}
