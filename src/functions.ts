/* 
This function has a type of return value which is void so it won't return any value 
*/
function calculateTax (income: number) {
}

// As best pratice annotate your functions
function calculateTax2 (income: number): number {
    return 20;
}

/* 
\Write functions like this if you are telling the function what type it should return
and you didn't define else, so by default TS returns undefined for else, which is not a number and
it will give you an error; 
*/
function calculateTax3 (income: number): number {
    if (income < 50000){
        return income * 2;
    }
    else {
        return income * 3
    }    
}

/* 
we can make argument optional also, in order to do so just assign the number to the argument
instead assigning the type to itwhen you use this function again and pass other value to
taxYear, the previusly assigned value will gets updated by the value which you passed while using the fun 
*/
function calculateTax4(income: number, taxYear= 2022): number {
    if (taxYear < 2000) {
        return income * 2;
    }
    else {
        return income * 3
    }    
}
// taxYear is being overwrote here with value "2023"
calculateTax4(50000, 2023);