/** @param {import(".").NS } ns */
export async function main(ns) {
    if (ns.fileExists("test.js", target)) {
        ns.run(test.js, 1, (target));
    } else {
        ns.wget("URL", test.js)
    }
}
