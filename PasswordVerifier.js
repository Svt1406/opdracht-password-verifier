const isNotNull = (password) => {
    return password != null;
};


const hasRightLength = (password) => {
    return isNotNull(password) && password.length < 9; 
};


const hasUpperCaseCharacter = (password) => {
    var regex = /\d/g;
	return regex.test(password);
};

const hasLowerCaseCharacter = (str) => str;


const hasDigit = (str) => str;


const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};


// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};


module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};