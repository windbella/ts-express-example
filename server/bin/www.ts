#!/usr/bin/env node

/**
 * Module dependencies.
 */

import Debug from 'debug';
import http from 'http';
import { AddressInfo } from 'net';
import { HttpError } from 'http-errors';
import app from '../src/app';

const debug: Debug.Debugger = Debug('ts-express:server');

/**
 * Get port from environment and store in Express.
 */

const port: number | string | boolean = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server: http.Server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string | number): string | number | boolean {
    const parsedPort = parseInt(val.toString(), 10);

    if (Number.isNaN(parsedPort)) {
    // named pipe
        return val;
    }

    if (parsedPort >= 0) {
    // port number
        return parsedPort;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: HttpError): void {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind: string = typeof port === 'string'
        ? `Pipe ${port}`
        : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
    case 'EACCES':
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
    case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
    default:
        throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening(): void {
    const addr: string | AddressInfo = server.address();
    const bind: string = typeof addr === 'string'
        ? `pipe ${addr}`
        : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}
