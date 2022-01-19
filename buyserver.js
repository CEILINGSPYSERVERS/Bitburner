//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/buyserver.js buyserver.js
/** @param {import(".").NS } ns */
export async function main(ns) {
	let ram = ns.args[0]
	let cost = ns.getPurchasedServerCost(ram)
	let money = ns.getServerMoneyAvailable("home")
	if (money <= cost) {
		ns.tprint("Not enough money to buy " + ram + " GB Server")
	} else {
		ns.purchaseServer("S", ram)
	}
}
