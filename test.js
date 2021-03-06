import {
    Server,
    cmd,
    asFormat,
    asPercent
} from 'helper.js';

let Type = Server.types();

let getColor = type => {
    switch (type) {
        case Type.Own:
            return 'green';
        case Type.Faction:
            return 'yellow';
        case Type.Target:
            return 'red';
        case Type.Shop:
            return 'lightblue';
        default:
        case Type.MoneyFarm:
            return 'white';
    }
};

export async function main(ns) {

    let show = ns.args[0] || 'all';

    let output = 'Network:';
    Server.get(ns)
        .filter(server => {
            switch (show) {
                default:
                case 'all':
                    return true;
                case 'own':
                    return server.type === Server.types().Own;
                case 'special':
                    return server.type !== Server.types().MoneyFarm;
                case 'root':
                    return server.hasRoot;
                case 'noroot':
                    return !server.hasRoot;
            }
        })
        .forEach(server => {
            let name = server.name;
            let hackColor = server.hasRoot ? 'lime' : 'red';
            let nameColor = getColor(server.type);

            let moneyCurr = server.moneyAvail;
            let moneyMax = server.moneyMax;
            let ramMax = ns.getServerRam(name)[0];
            let ramUsed = ns.getServerRam(name)[1];
            let hoverText = [
                `Req level: ${server.levelNeeded}`,
                `Req port: ${ns.getServerNumPortsRequired(name)}`,
                `Memory: ${asFormat(ramMax)} GB (${asPercent(ramUsed / ramMax)} used)`,
                `Security: ${server.securityCurr} / ${server.securityMin}`,
                `Money: ${asFormat(moneyCurr)} (${asPercent(moneyCurr / moneyMax)})`,
            ].join('\n');

            output += ['<br>', ' '.repeat(server.depth),
                `<span style='color:${hackColor}'>■ </span>`,
                `<a class='scan-analyze-link' title='${hoverText}'' style='color:${nameColor}'>${name}</a> `,
            ].join('');
        });
    ns.tprint(output);
    cmd(ns, 'scan-analyze 0');
}
