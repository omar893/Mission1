"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const car_value_1 = __importDefault(require("./car-value"));
const claims_to_risk_1 = __importDefault(require("./claims-to-risk"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server.use(express_1.default.json());
const port = process.env.PORT;
server.get('/', (req, res) => {
    res.send('Turners Car Insurance');
});
server.post('/value', (req, res) => {
    res.send((0, car_value_1.default)(req.body));
});
server.post('/risk', (req, res) => {
    res.send((0, claims_to_risk_1.default)(req.body));
});
if (process.env.NODE_ENV !== 'test') {
    server.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
}
exports.default = server;
