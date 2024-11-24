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
exports.productController = void 0;
const errorHandler_1 = require("../../utils/errorHandler");
const product_service_1 = __importDefault(require("./product.service"));
//handelling the request and response for creating a new product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Getting the payload from the request
        const payload = req.body;
        // Calling the service function to create the product
        const result = yield product_service_1.default.createProduct(payload);
        // Sending response back to the client
        res.json({
            status: true,
            message: 'Product created successfully',
            data: result, // The newly created product object
        });
    }
    catch (err) {
        console.error(err);
        // Use the custom validation error handler
        const errorResponse = (0, errorHandler_1.handleValidationError)(err);
        // Return the error response to the client
        res.status(errorResponse.statusCode).json(errorResponse);
    }
});
//handelling the request and response for fetching the products with searchTerm
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm; // Extract searchTerm from query params
        const result = yield product_service_1.default.getProduct(searchTerm);
        res.json({
            status: true,
            message: 'Products fetched successfully',
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
//get a single product
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //req.params allows us to access the parameters in the url
    const productId = req.params.productId;
    try {
        const result = yield product_service_1.default.getSingleProduct(productId);
        res.json({
            status: true,
            message: 'Product fetched successfully',
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
//updating a product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    const payload = req.body;
    try {
        const result = yield product_service_1.default.updateProduct(productId, payload);
        res.json({
            status: true,
            message: 'Product updated successfully',
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
//deleting a product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    try {
        const result = yield product_service_1.default.deleteProduct(productId);
        res.json({
            status: true,
            message: 'Product deleted successfully',
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
exports.productController = {
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
