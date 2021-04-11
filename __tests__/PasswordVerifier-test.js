const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
} = require("../PasswordVerifier");


describe('Password verifier utility functions', () => {
    // HasRightLength test
    test ('password is less than or equal to 9 characters', function () {
        const password = 'henkie1';
        const output = hasRightLength(password);
        expect(output).toBe(true);
    });

    test ('password is more than 9 characters', function (){
        const password = 'Henkie1234';
        const output = hasRightLength(password);
        expect(output).toBe(false);
    });

    test ('password is null', function (){
        const password = null;
        const output = hasRightLength(password);
        expect(output).toBe(false);
    });

    test ('password contains empty string', function () {
        const password = '';
        const output = hasRightLength(password);
        expect(output).toBe(true);
    });

    // isNotNull test

    test ('password isNotNull', function (){
        const password = 'henkie';
        const output = isNotNull(password);
        expect(output).toBe(true);
    });

    test ('password isNull', function () {
        const password = null;
        const output = isNotNull(password);
        expect(output).toBe(false);
    });

    // uppercase test 

    test ('password has uppercase characters', function () {
        const password = 'HENKIE12';
        const output = hasUpperCaseCharacter(password);
        expect(output).toBe(true);
    });

    test ('password does not contain uppercase characters', function () {
        const password = 'henkie';
        const output = hasUpperCaseCharacter(password);
        expect(output).toBe(false);
    });

    test ('password contains upper and lowercase charaters', function (){
        const password = 'Henkie1';
        const output = hasUpperCaseCharacter(password);
        expect(output).toBe(true);
    });

    test ('password contains only numbers', function (){
        const password = '1223';
        const output = hasUpperCaseCharacter(password);
        expect(output).toBe(false);
    });

    test ('password contains null', function(){
        const password = null;
        const output = hasUpperCaseCharacter(password);
        expect(output).toBe(false);
    });

    // lowercase

    test ('password has lowercase characters', function (){
        const password = 'henkie';
        const output = hasLowerCaseCharacter(password);
        expect(output).toBe(true);
    });

    test ('password does not contain lowercase characters', function () {
        const password = 'HENKIE';
        const output = hasLowerCaseCharacter(password);
        expect(output).toBe(false);
    });

    test ('password has lowercase and uppercase characters', function (){
        const password = 'Henkie12';
        const output = hasLowerCaseCharacter(password);
        expect(output).toBe(true);
    });

    test ('password contains null', function() {
        const password = null;
        const output = hasLowerCaseCharacter(password);
        expect(output).toBe(false);
    });

    test ('password contains only numbers', function (){
        const password = '1223';
        const output = hasLowerCaseCharacter(password);
        expect(output).toBe(false);
    });

    //digits 
    test ('password does not contains 1 or more numers', function () {
        const password ='henkie';
        const output = hasDigit(password);
        expect(output).toBe(false);
    });

    test ('password contains 1 or more numers', function () {
        const password ='henkie12';
        const output = hasDigit(password);
        expect(output).toBe(true);
    });

    test ('password contains null', function (){
        const password = null;
        const output = hasDigit(password);
        expect(output).toBe(false);
    });

    test ('password contains empty string', function () {
        const password = '';
        const output = hasDigit(password);
        expect(output).toBe(false);
    });

    test ('password contains numbers and lowercase', function () {
        const password = 'henkie12';
        const output = hasDigit(password);
        expect(output).toBe(true);
    });

    test ('password contains numbers and uppercase', function () {
        const password = 'HENKIE12';
        const output = hasDigit(password);
        expect(output).toBe(true);
    });
});

describe('check combinations of conditions', () => {
    test ('minimumConditionsReached all conditions false', function (){
        const conditions = [false, false, false, false, false];
        const output = minimumConditionsReached(conditions);
        expect(output).toBe(false);
    });

    test('minimumConditionsReached two conditions true', function (){
        const conditions = [true, true, false, false, false];
        const output = minimumConditionsReached(conditions);
        expect(output).toBe(false);
    });

    test('minimumConditionsReached 3 conditions true', function (){
        const conditions = [true, true, true, false, false];
        const output = minimumConditionsReached(conditions);
        expect(output).toBe(true);
    });

    test('minimumConditionsReached 4 conditions true', function (){
        const conditions = [true, true, true, true, false];
        const output = minimumConditionsReached(conditions);
        expect(output).toBe(true);
    });

    test('minimumConditionsReached all conditions true', function (){
        const conditions = [true, true, true, true, true];
        const output = minimumConditionsReached(conditions);
        expect(output).toBe(true);
    });
});

describe ('verify password', () => {
    test ('verifyPassword contains null', function (){
        const password = null;
        const output = verifyPassword(password);
        expect(output).toBe(false);
    });

    test ('verify password contains only digits', function (){
        const password = '12345';
        const output = verifyPassword(password);
        expect(output).toBe(false);
    });

    test ('verify password contains only uppercase', function () {
        const password ='HENKIE';
        const output = verifyPassword(password);
        expect(output).toBe(false);
    });

    test ('verify password contains only lowercases', function (){
        const password = 'henkie';
        const output = verifyPassword(password);
        expect(output).toBe(true);
    });

    test ('verify password contains only lowercases but has more than 9 characters', function () {
        const password = 'henkieeeeeeeeeee';
        const output = verifyPassword(password);
        expect(output).toBe(false);
    });

    test ('verify password contains lowercases and uppercases but has more than 9 characters', function () {
        const password = 'HenkIeeeeeeee';
        const output = verifyPassword(password);
        expect(output).toBe(true);
    });

    test ('verify password contains lowercase, uppercase and is less then 8 characters', function () {
        const password = 'Henkie';
        const output = verifyPassword(password);
        expect(output).toBe(true);
    });

    test ('verify password contains lowercase, uppercase, is less then 8 characters and has numbers ', function () {
        const password = 'Henkie12';
        const output = verifyPassword(password);
        expect(output).toBe(true);
    });

    test ('verify password contains only uppercase, is less then 8 characters and has numbers', function() {
        const password = 'HENKIE12';
        const output = verifyPassword(password);
        expect(output).toBe(false);
    });
});