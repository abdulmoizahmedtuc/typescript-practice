"use strict";
function KgToLbs(Weight) {
    if (typeof Weight === 'number') {
        return Weight * 2.2;
    }
    else {
        return parseInt(Weight) * 2.2;
    }
}
KgToLbs(10);
KgToLbs('10');
let x;
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let quantity1 = 100;
