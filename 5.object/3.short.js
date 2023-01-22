const x = 0;
const y = 0;
const coordinate = {x, y}; // 축약 버전 {x:x, y:y}; 동일할 때 축약가능
console.log(coordinate);

// 축약버전
function makeObj(name, age) {
  return {
    name,
    age,
  }
}