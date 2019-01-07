"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
    }
    Server.prototype.start = function () {
        console.log('Awaiting stuff and things!');
        this.app.get('/', function (req, res) {
            res.send('Hello World');
        });
        this.app.listen(3000);
    };
    return Server;
}());
exports.default = Server;
