function insertDash(n) {
  var n = n.toString();
  console.log(n);
  var temp = n.split('').map(Number);
  console.log(temp);
  const result = [temp[0]];
  temp.map((i,k) => {
    if(temp.length-1 === k) {
      return result;
    }
    if(i%2 === 0 && temp[k+1] % 2 === 0) {
      result.push('-',temp[k+1]);
    } else {
      result.push(temp[k+1]);
    }
    return result;
  });
console.log(result.join(''));
}

var insertDas = insertDash(25468);
