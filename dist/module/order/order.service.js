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
const order_model_1 = __importDefault(require("./order.model"));
const product_model_1 = __importDefault(require("../product/product.model"));
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const { product, quantity } = order;
    const productInDb = yield product_model_1.default.findById(product);
    if (!productInDb) {
        throw new Error('Product not found');
    }
    // check if the product is available
    if (productInDb.quantity < quantity) {
        throw new Error('Product out of stock');
    }
    // creae new order
    const newOrder = new order_model_1.default(order);
    //update the product quantity
    productInDb.quantity -= quantity;
    //if the product quantity is 0, set inStock to false
    if (productInDb.quantity === 0) {
        productInDb.inStock = false;
    }
    const result = yield order_model_1.default.create(order);
    return result;
});
const getOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.find();
    return result;
});
const getTotalRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: '$totalPrice' },
            },
        },
    ]);
    return result;
});
exports.default = {
    createOrder,
    getOrder,
    getTotalRevenue,
};
