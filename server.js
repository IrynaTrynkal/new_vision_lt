import { createServer } from "http";
import next from "next";
import { parse } from "url";

const port = parseInt(process.env.PORT || "3000", 10);
const host = process.env.HOST;
const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(port, host, () => {
        console.log(
            `> Server listening at http://${host}:${port} as ${
                dev ? "development" : process.env.NODE_ENV
            }`
        );
    });
});
