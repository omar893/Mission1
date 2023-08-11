type CarModel = {
    model: String;
    year: number;
}

const carValue =  (car: CarModel) => {
     return car.model.split('').reduce((acc, curr) => acc + letterToNumber(curr),0)
        *100 + car.year;
}

//Take a single letter and return its numberical place in alphabet
const letterToNumber = (letter: String) => {
    letter = letter.toUpperCase();
    const letterValue = letter.charCodeAt(0)-64;
    if(letterValue>0 && letterValue<27) {return letterValue;}
    return 0;
}