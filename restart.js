    // Log in Console
    console.log("\n" + "=".repeat(50));
    console.log("🔄 [RESTART] Bot wird neu gestartet...");
    console.log("⏰ Zeit: " + new Date().toLocaleString("de-DE"));
    console.log("👤 Ausgelöst von: " + sender);
    console.log("=".repeat(50) + "\n");

    // WhatsApp Nachricht
    await reply(sock, msg, "🔄 Bot wird neu gestartet...\n⏳ Kurz offline");

    // Verzögerung dann Neustart
    setTimeout(() => {
        console.log("🚀 [RESTART] Neustart wird eingeleitet...");
        process.exit(0); // Oder: exec("npm start");
    }, 1500);
}
    if (command === "owner") {
    if (!isWantedasa(sender)) {
        return reply(sock, msg, "❌ Nur Owner dürfen diesen Command nutzen!");
    }
const { spawn } = require("child_process");

console.log("♻️ Restart wird ausgeführt...");

const child = spawn("node", ["index.js"], {
    stdio: "inherit",
    detached: true
});

child.unref();

process.exit(0);