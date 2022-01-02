//wget https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/worm.js worm.js
/** @param {import(".").NS } ns */
export async function main(ns) {
    let hostname = ns.getHostname()
    ns.tprint("Host "+hostname)
    let servers = ns.scan(hostname, 1)
    ns.tprint("Servers: "+servers)
    let skillLevel = ns.getHackingLevel()
    let portBreakers = ['BruteSSH', 'FTPCrack', 'relaySMTP', 'HTTPWorm', 'SQLInject']
    let pBreakers = ns.args[0]-1

    for (let i = 0; i < servers.length; i++) {
		if (!(servers[i] == "home")) {
			let portsNeeded = ns.getServerNumPortsRequired(servers[i])
			let hackLevel = ns.getServerRequiredHackingLevel(servers[i])
			if (!(ns.hasRootAccess(servers[i])) && (pBreakers >= portsNeeded)) {
                for (let j = 0; j < pBreakers; j++){
                    ns.tprint("Eval "+eval(portBreakers[j](servers[i])))
                    ns.tprint("NoEval"+portBreakers[j](servers[i]))
                    //eval(ns.portBreakers[j](servers[i]))
                    ns.portBreakers[j](servers[i])
                }
                /**
				if (pBreakers > 0) {
					ns.brutessh(servers[i])
					ns.tprint("SSH opened on: " + servers[i])
				}
				if (pBreakers > 1) {
					ns.ftpcrack(servers[i])
					ns.tprint("FTP opened on: " + servers[i])
				}
				if (pBreakers > 2) {
					ns.relaysmtp(servers[i])
					ns.tprint("SMTP opened on: " + servers[i])
				}
				if (pBreakers > 3) {
					ns.httpworm(servers[i])
					ns.tprint("HTTP opened on: " + servers[i])
				}
				if (pBreakers > 4) {
					ns.sqlinject(servers[i])
					ns.tprint("SQL opened on: " + servers[i])
				}
                */
				ns.nuke(servers[i])
				ns.tprint("We now own: " + servers[i])
			}
			if (skillLevel < hackLevel) {
				ns.tprint("Need higher hacking for " + servers[i] + ", have: " + skillLevel + ". Need : " + hackLevel)
			}
			if (pBreakers < portBreakers) {
				ns.tprint("Need more breakers for " + servers[i] + ", have: " + pBreakers + ". Need: " + portsNeeded)
			}
		}
	}
}
