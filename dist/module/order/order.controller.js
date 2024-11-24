"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_service_1 = __importDefault(require("./order.service"));
const errorHandler_1 = require("../../utils/errorHandler");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const result = yield order_service_1.default.createOrder(payload);
        res.json({
            status: true,
            message: 'Order created successfully',
            data: result,
        });
    }
    catch (err) {
        // Use the custom validation error handler
        const errorResponse = (0, errorHandler_1.handleValidationError)(err);
        // Return the error response to the client
        res.status(errorResponse.statusCode).json(errorResponse);
    }
});
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.default.getOrder();
        res.json({
            status: true,
            message: 'Order fetched successfully',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.json({
            status: false,
            message: 'Internal Server Error',
        });
    }
});
const getTotalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.default.getTotalRevenue();
        res.json({
            status: true,
            message: 'Total revenue fetched successfully',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.json({
            status: false,
            message: 'Internal Server Error',
        });
    }
});
exports.orderController = {
    createOrder,
    getOrder,
    getTotalRevenue,
};
