"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_js_1 = require("./db.js");
const db_js_2 = require("./db.js");
const router = express_1.Router();
exports.router = router;
router.get('/aboutus', function (req, res) {
    res.write("Vamo que vamo!");
    res.end();
});
router.get('/mission', (req, res) => {
    res.write("Our mission is save the world.");
    res.end();
});
router.get('/contact', (req, res) => {
    res.write("75 9 9866 2804");
    res.end();
});
router.post('/users', (req, res) => {
    db_js_1.update(req.body.name);
    res.status(200).json(db_js_2.database);
    res.end();
});
