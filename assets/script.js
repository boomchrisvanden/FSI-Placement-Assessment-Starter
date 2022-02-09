let yourName = "Chris Vanden Boom" // HINT: Replace this with your own name!
// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// Code to update name display
credit.textContent = `Created by ${yourName}`
// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0;
// assigning all buttons to const variables
const gbPlusBtn = document.querySelector('#add-gb');
const ccPlusBtn = document.querySelector('#add-cc');
const sugarPlusBtn = document.querySelector('#add-sugar');
const gbMinusBtn = document.querySelector('#minus-gb');
const ccMinusBtn = document.querySelector('#minus-cc');
const sugarMinusBtn = document.querySelector('#minus-sugar');
// Event listeners - Positive
gbPlusBtn.addEventListener('click', function() {
  gb++;
  total++;
  updateValues();
})
ccPlusBtn.addEventListener('click', function(){
  cc++;
  total++;
  updateValues();
});
sugarPlusBtn.addEventListener('click',function(){
  sugar++;
  total++;
  updateValues();
});
// Event listeners - Negative
gbMinusBtn.addEventListener('click',function(){
  gb--;
  total--;
  gb = noZero(gb);
  updateValues();
});
ccMinusBtn.addEventListener('click',function(){
  cc--;
  total--;
  cc = noZero(cc);
  updateValues();
});
sugarMinusBtn.addEventListener('click',function(){
  sugar--;
  total--;
  sugar = noZero(sugar);
  updateValues();
});
// functions
const updateValues = () => {
  // update all table elements with the rolling totals 
  document.getElementById('qty-gb').innerHTML = gb;
  document.getElementById('qty-cc').innerHTML = cc;
  document.getElementById('qty-sugar').innerHTML = sugar;
  document.getElementById('qty-total').innerHTML = total;
}
const noZero = value => {
  // check if parameter table value is below zero
  if(total < 0)
  {
    total =0;
    updateValues();
  }
  if(value < 0)
  {
    return 0;
  }
  else
  {
    return value;
  }
}