/** @param {import(".").NS } ns */
export async function main(ns) {
    ns.connect(target)
    if (ns.fileExists("test.js", target)) {
        ns.run(test.js, 1, (target));
    } else {
        ns.wget("https://raw.githubusercontent.com/CEILINGSPYSERVERS/Bitburner/main/test.js", test.js)
    }
    ns.run(test.js, 1, target);
}
