"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = express_1.Router();
routes.get('/', (req, res) => {
    res.send('Hello my world');
});
exports.default = routes;
