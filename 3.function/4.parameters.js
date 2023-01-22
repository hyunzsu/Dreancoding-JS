// 매개변수의 기본값은 무조건 undefined
function add(a, b) {
  console.log(a); // undefined
  console.log(b); // undefined
  return a + b;
}
add();
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a = 1, b = 1
function add(a, b) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
  return a + b;
}
add(1, 2);

// Rest 매개변수 Rest Parameters
// 몇개의 인자를 받을지 모를 때
function sum(...numbers) {
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);
