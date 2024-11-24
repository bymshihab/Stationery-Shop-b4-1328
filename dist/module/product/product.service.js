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
const product_model_1 = __importDefault(require("./product.model"));
//creating a new product
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(product);
    return result;
});
//fetching all the products
const getProduct = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {};
    // If searchTerm is provided, create a filter
    if (searchTerm) {
        const regex = new RegExp(searchTerm, 'i'); // Case-insensitive regex
        filter.$or = [{ category: regex }, { name: regex }, { brand: regex }];
    }
    // Fetch products from the database
    const products = yield product_model_1.default.find(filter);
    return products;
});
//fetching a single product
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findById(id);
    return result;
});
//updating a product by id
const updateProduct = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndUpdate(id, product, { new: true });
    return result;
});
//deleting a product by id
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndDelete(id);
    return result;
});
exports.default = {
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
