type CarModel = {
    model: String;
    year: number;
}

const carValue =  (car: CarModel) => {
     if(car.year<0) { return {error: 'Year cannot be negative'}; }
    else {
        const alphaNumValue = [...car.model.toUpperCase()]
        .filter((alphabets) => alphabets >= "A" && alphabets <= "Z")
        .reduce(
        (sum, alphabets) => sum + alphabets.charCodeAt(0) - "A".charCodeAt(0) + 1,
         0
        );
        return {car_value: alphaNumValue * 100 + car.year};
    }
}

export default carValue;