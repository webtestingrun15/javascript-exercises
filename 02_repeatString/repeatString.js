const repeatString = function(string,num) {
  let answer = ""
  if (num < 0) { answer = "ERROR"; }
  for(let i = 0; i < num; i++){
    answer += string;
  }
  return answer;
};

// repeatString("goodbye",-1);
// Do not edit below this line
module.exports = repeatString;
