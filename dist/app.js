"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_router_1 = __importDefault(require("./module/product/product.router"));
const order_router_1 = __importDefault(require("./module/order/order.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/products', product_router_1.default);
app.use('/api/orders', order_router_1.default);
app.get('/', (req, res) => {
    res.send({
        message: 'Hello World',
        status: 200,
    });
});
exports.default = app;
