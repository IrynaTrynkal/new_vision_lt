import fs from "fs";
import readline from "readline";

interface IPStats {
    count: number;
    traffic: number;
}

interface URLStats {
    count: number;
    traffic: number;
    type: "json" | "file";
}

const ipStats: Record<string, IPStats> = {};
const urlStats: Record<string, URLStats> = {};

async function analyzeLogs(filePath: string) {
    const rl = readline.createInterface({
        input: fs.createReadStream(filePath),
        crlfDelay: Infinity,
    });

    let totalRequests = 0;
    let totalTraffic = 0;

    for await (const line of rl) {
        if (!line.trim()) continue;
        const log = JSON.parse(line);
        const body = log.body || {};
        const ip = body.remoteIp || "unknown";
        const url = body.url || "unknown";
        const size = body.responseSize || 0;

        totalRequests++;
        totalTraffic += size;

        // підрахунок по IP
        if (!ipStats[ip]) ipStats[ip] = { count: 0, traffic: 0 };
        ipStats[ip].count += 1;
        ipStats[ip].traffic += size;

        // визначаємо тип запиту
        const type: "json" | "file" = url.includes("cdn.sanity.io/images")
            ? "file"
            : "json";

        // підрахунок по URL
        if (!urlStats[url]) urlStats[url] = { count: 0, traffic: 0, type };
        urlStats[url].count += 1;
        urlStats[url].traffic += size;
    }

    console.log("=== Загальна статистика ===");
    console.log("Total requests:", totalRequests);
    console.log("Total traffic (bytes):", totalTraffic);

    console.log("\n=== Top 10 IP by traffic ===");
    Object.entries(ipStats)
        .sort(([, a], [, b]) => b.traffic - a.traffic)
        .slice(0, 10)
        .forEach(([ip, stats]) => {
            console.log(
                ip,
                stats.count,
                stats.traffic,
                `${((stats.traffic / totalTraffic) * 100).toFixed(2)}%`
            );
        });

    console.log("\n=== Top 10 URLs by traffic (files only) ===");
    Object.entries(urlStats)
        .filter(([_, stats]) => stats.type === "file")
        .sort(([, a], [, b]) => b.traffic - a.traffic)
        .slice(0, 10)
        .forEach(([url, stats]) => {
            console.log(
                url,
                stats.count,
                stats.traffic,
                `${((stats.traffic / totalTraffic) * 100).toFixed(2)}%`
            );
        });

    console.log("\n=== JSON/GROQ requests summary ===");
    const jsonTraffic = Object.values(urlStats)
        .filter(s => s.type === "json")
        .reduce((acc, s) => acc + s.traffic, 0);
    const jsonCount = Object.values(urlStats)
        .filter(s => s.type === "json")
        .reduce((acc, s) => acc + s.count, 0);
    console.log(
        "JSON requests:",
        jsonCount,
        "Total traffic (bytes):",
        jsonTraffic,
        `${((jsonTraffic / totalTraffic) * 100).toFixed(2)}%`
    );
}

analyzeLogs("sanity_logs.json");
