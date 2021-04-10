const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
} = require("../PasswordVerifier");

test ('password is less than or equal to 9 characters', function () {
    const password = 'henkie1';
    const output = hasRightLength(password);

    expect(output).toBeTruthy();
});

test ('password is more than 9 characters', function (){
    const password = "Henkie1234";
    const output = hasRightLength(password);

    expect(output).toBeFalsy();
});

test ('password is null', function (){
    const password = null;
    const output = hasRightLength(password);

    expect(output).toBeFalsy();
});

test ('password isNotNull', function (){
    const password = 'henkie';
    const output = isNotNull(password);

    expect(output).toBeTruthy();
});

test ('password isNull', function () {
    const password = null;
    const output = isNotNull(password);

    expect(output).toBeFalsy();
});

test ('password has uppercase characters', function () {
    const password = 'HENKIE12';
    const output = hasUpperCaseCharacter(password);

    expect(output).toBeTruthy();
});

test ('password does not contain uppercase characters', function () {
    const password = 'henkie';
    const output = hasUpperCaseCharacter(password);

    expect(output).toBeFalsy();
});

test ('password contains upper and lowercase charaters', function (){
    const password = 'Henkie1';
    const output = hasUpperCaseCharacter(password);

    expect(output).toBeTruthy();
});

test ('password contains only numbers', function (){
    const password = "1223";
    const output = hasUpperCaseCharacter(password);

    expect(output).toBeFalsy();
});

test ('password has lowercase characters', function (){
    const password = 'henkie12';
    const output = hasLowerCaseCharacter(password);

    expect(output).toBeTruthy();
});

