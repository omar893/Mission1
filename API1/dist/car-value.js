"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carValue = (car) => {
    if (car.year < 0) {
        return { error: 'Year cannot be negative' };
    }
    else {
        const alphaNumValue = [...car.model.toUpperCase()]
            .filter((alphabets) => alphabets >= "A" && alphabets <= "Z")
            .reduce((sum, alphabets) => sum + alphabets.charCodeAt(0) - "A".charCodeAt(0) + 1, 0);
        return { car_value: alphaNumValue * 100 + car.year };
    }
};
exports.default = carValue;
