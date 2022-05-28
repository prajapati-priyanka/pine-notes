const getDateString = date => date.slice(0,9)

const getTimeString = date => date.slice(10,15);

const convertStringFirstLetterCapital = (str) =>{
    const remainingChar = str.slice(1);
    return str.charAt(0).toUpperCase() + remainingChar;
}

export {getDateString, getTimeString, convertStringFirstLetterCapital}
