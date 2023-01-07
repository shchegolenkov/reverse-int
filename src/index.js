module.exports = function reverse(n) {
  let reversed = '';
  n = n.toString();

  for (let i = 0; i < n.length; i++) {
    if (n[i] === '-') {
      reversed = `${reversed}`;
    } else {
      reversed = `${n[i]}${reversed}`;
    }
  }

  return reversed;
}
