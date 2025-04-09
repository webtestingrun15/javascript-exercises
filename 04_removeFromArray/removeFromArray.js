const removeFromArray = function(array, ...selected) {

  let removeSelected = [];
  for (const i of array){
    if(!selected.includes(i)) {
       removeSelected.push(i);
    }
  }

  return removeSelected;
};


// Do not edit below this line
module.exports = removeFromArray;
