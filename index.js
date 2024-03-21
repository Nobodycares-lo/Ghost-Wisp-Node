/* eslint-disable @typescript-eslint/no-var-requires */
import http from 'node:http';
import wisp from "wisp-server-node";

const httpServer = http.createServer();


httpServer.on('request', (req, res) => {
	res.writeHead(400);
	res.end('Not found.');
});

httpServer.on('upgrade', (req, socket, head) => {
	if (req.url.endsWith("/wisp/")) {
    		wisp.routeRequest(req, socket, head);
  	} else {
		socket.end();
	}
});

httpServer.on('listening', () => {
	console.log('Night Wisp server online');
});

httpServer.listen({
	port: 8080,
});
