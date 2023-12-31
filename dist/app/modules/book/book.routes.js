"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookroutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const book_controller_1 = require("./book.controller");
const book_validations_1 = require("./book.validations");
const router = express_1.default.Router();
router.get('/', book_controller_1.Bookcontroller.getbookFromDB);
router.post('/create-book', (0, auth_1.default)(user_1.ENUM_USER_ROLE.admin), (0, validateRequest_1.default)(book_validations_1.BookSchema), book_controller_1.Bookcontroller.insertFromDB);
router.get('/:id/category', book_controller_1.Bookcontroller.getcategorybookFromDB);
router.get('/:id', book_controller_1.Bookcontroller.singlebook);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.admin), book_controller_1.Bookcontroller.bookupdate);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.admin), book_controller_1.Bookcontroller.bookdelete);
exports.bookroutes = router;
