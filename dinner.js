function compareDinner(a,b) {
  var increment = 0;
  var rotation =0;
  var match = '';
  var a = a1;
  var b = b1;
  for(var i=0; i< a.length; i++) {
    for(var j=0; j< b.length; j++) {
      if(a[i] !== b[j]) {
        i+=1;
        if(i === b.length) {
            console.log('match');
            return rotation;
        }
      } else {
        increment+=1;
      }
    } 
    if(increment > 0) {
        increment = 0;
        i = 0;
        var element = b.shift();
        b.push(element);
        rotation+=1;
      }
  }
  console.log("rt",rotation);
  return rotation;
}



var a1 = [3, 5, 0, 2, 4];
var b1 = [1, 3, 10, 6, 7];
var res = compareDinner(a1,b1);
console.log(res);
