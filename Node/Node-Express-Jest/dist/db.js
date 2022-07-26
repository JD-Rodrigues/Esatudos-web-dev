"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database = ["Márcio", "Maria", "Ronaldo"];
exports.database = database;
function update(name) {
    database.push(name);
    console.log(database);
}
exports.update = update;
