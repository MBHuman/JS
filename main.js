let pow = function(int x, int y) {
    if(y == 0) {
      return 1;
    }
    else if(y % 2 == 0) {
      return pow(x, y / 2) * pow(x, y / 2);
    }
    else {
      return pow(x, y - 1) * x;
    }
}

let solve = function(int x) {
  console.log(pow(x, 5));
}
