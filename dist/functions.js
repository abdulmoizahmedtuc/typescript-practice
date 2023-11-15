"use strict";
function calculateTax(income) {
}
function calculateTax2(income) {
    return 20;
}
function calculateTax3(income) {
    if (income < 50000) {
        return income * 2;
    }
    else {
        return income * 3;
    }
}
function calculateTax4(income, taxYear = 2022) {
    if (taxYear < 2000) {
        return income * 2;
    }
    else {
        return income * 3;
    }
}
calculateTax4(50000, 2023);
