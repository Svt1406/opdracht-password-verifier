const isNotNull = (password) => {
    return password != null;
};


const hasRightLength = (password) => {
    return isNotNull(password) && password.length < 9; 
};


const hasUpperCaseCharacter = (password) => {
   return isNotNull(password) && password.toLowerCase() !== password;
};


const hasLowerCaseCharacter = (password) => {
    return isNotNull(password) && password.toUpperCase() !== password;
};


const hasDigit = (password) => { 
    return /\d/.test(password);
};


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