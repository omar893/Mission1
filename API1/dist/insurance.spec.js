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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("./index"));
describe('Mission1 API Endpoint Tests', () => {
    it('should return turners car insurance on GET /', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const expected = 'Turners Car Insurance';
        // Act
        const actual = yield (0, supertest_1.default)(index_1.default).get('/');
        // Assert
        expect(actual.text).toBe(expected);
    }));
    it('should return a car value in JSON format on POST /value', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const expected = { car_value: 6611 };
        // Act
        const actual = yield (0, supertest_1.default)(index_1.default).post('/value').send({ model: 'civic', year: 2011 });
        // Assert
        expect(JSON.parse(actual.text)).toStrictEqual(expected);
    }));
    it('should return a risk rating in JSON format on POST /risk', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const expected = { risk_rating: 3 };
        // Act
        const actual = yield (0, supertest_1.default)(index_1.default).post('/risk').send({ claim_history: 'My only claim was a crash into my houses garage door that left a scratch on my car.  There are no other crashes.' });
        // Assert
        expect(JSON.parse(actual.text)).toStrictEqual(expected);
    }));
});
