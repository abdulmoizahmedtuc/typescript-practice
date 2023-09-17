// Union type
function KgToLbs (Weight: number | string ) : number {
    if (typeof Weight === 'number') {
    return Weight * 2.2;
  }
  else {
    return parseInt(Weight) * 2.2; 
  }
  }
  
  KgToLbs(10)
  KgToLbs('10')

// Intersection types
let x: number & string; // This won't make sense, because we can not have both in objects

// We can do like this
type Draggable = {
  drag: () => void
};

type Resizable = {
  resize: () => void
}
// Now intersect them
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}

// Literal types
let quantity: 50 | 100 = 100;
// OR
type Quantity = 50 | 100;
let quantity1 = 100;

// Nullable types


// Optional chaining