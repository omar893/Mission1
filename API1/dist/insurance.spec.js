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
    it('should return a car value in JSON format on POST /value and ignore symbols', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const expected = { car_value: 6611 };
        // Act
        const actual = yield (0, supertest_1.default)(index_1.default).post('/value').send({ model: 'c!ivi@#c', year: 2011 });
        // Assert
        expect(JSON.parse(actual.text)).toStrictEqual(expected);
    }));
    it('should return an ERROR in JSON format on POST /value when given a negative year', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const expected = { error: 'Year cannot be negative' };
        // Act
        const actual = yield (0, supertest_1.default)(index_1.default).post('/value').send({ model: 'civic', year: -2011 });
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
    it('should return a risk rating in JSON format on POST /risk regardless of UPPERCASE', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const expected = { risk_rating: 3 };
        // Act
        const actual = yield (0, supertest_1.default)(index_1.default).post('/risk').send({ claim_history: 'My only claim was a CRASH into my houses garage door that left a sCRatch on my car.  There are no other CRASHES.' });
        // Assert
        expect(JSON.parse(actual.text)).toStrictEqual(expected);
    }));
    it('should return a risk rating in JSON format on POST /risk if only key words are input', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const expected = { risk_rating: 4 };
        // Act
        const actual = yield (0, supertest_1.default)(index_1.default).post('/risk').send({ claim_history: 'collide crash scratch bump' });
        // Assert
        expect(JSON.parse(actual.text)).toStrictEqual(expected);
    }));
    it('should return an ERROR in JSON format on POST /risk when given an empty string', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const expected = { error: 'cannot have an empty input' };
        // Act
        const actual = yield (0, supertest_1.default)(index_1.default).post('/risk').send({ claim_history: '' });
        // Assert
        expect(JSON.parse(actual.text)).toStrictEqual(expected);
    }));
    it('should return an ERROR in JSON format on POST /risk when given a number', () => __awaiter(void 0, void 0, void 0, function* () {
        // Arrange
        const expected = { error: 'cannot input numbers' };
        // Act
        const actual = yield (0, supertest_1.default)(index_1.default).post('/risk').send({ claim_history: 111 });
        // Assert
        expect(JSON.parse(actual.text)).toStrictEqual(expected);
    }));
});
