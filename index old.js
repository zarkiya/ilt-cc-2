'use strict';

const http = require("http");
const contacts = require("./contacts.js");

(async () => {
    const server = http.createServer((request, response) => {
        response.setHeader('Content-Type', 'application/json');

        const {url} = request;

        if(url === "/contacts"){
            const {method} = request;

            if(method === "POST") {
                let body = "";

                request.on('data', (chunk) => {
                    body += chunk.toString
                })
            }
        }
    })
})

