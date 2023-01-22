function add(a, b) {
  // 0x11
  return a + b;
}
const sum = add; // 0x11

console.log(sum(1, 2));
console.log(add(1, 2));
