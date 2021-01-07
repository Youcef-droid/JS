function digital_root(n){
  n = eval(n.toString().split('').join("+"))
  if (n > 9){
    return number(n)
  }
  return n
}
function digital_root1(i){
  
  return (i - 1) % 9 + 1;
}
console.log(digital_root1(12558))