type CarModel = {
    model: String;
    year: number;
}

const carValue =  (car: CarModel) => {

}

//Take a single letter and return its numberical place in alphabet
type ConvertAlphabet = (letter: String) => number;
const letterToNumber: ConvertAlphabet = (letter) => {
    letter = letter.toUpperCase();
    return letter.charCodeAt(0)-64;
}