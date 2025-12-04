import http, { IncomingMessage, ServerResponse } from "http";

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log("URL:", req.url);
    console.log("Method:", req.method);
    console.log("Headers:", req.headers);


    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");
    } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Page");
    } else if (req.url === "/service") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Service Page");
    } else if (req.url === "/api/user") {
        const user = {
            name: "Sameer Khan",
            Role: "Student",
            student_id: "369046",
            course: "Mernstack development"
        };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user, null, 2));
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end(" Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("✅ Server running at http://localhost:3000");
});