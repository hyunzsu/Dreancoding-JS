// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 같이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2');
console.log(2 === '2'); // ✨ 값은 같지만 타입이 다름. 숫자와 문자열
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);
console.clear();

const obj1 = {
  // 0x111
  name: 'js',
};
const obj2 = {
  // 0x112
  name: 'js',
};

console.log(obj1 == obj2); // key와 value가 동일하긴 하지만 새로운 오브젝트를 만들었기 떄문에 메모리주소가 다름
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

let obj3 = obj2; // obj2 참조값(메모리 주소)를 복사해서 obj3에 할당시킴
console.log(obj3 == obj2); // 동일한 메모리 주소를 가지고있음
console.log(obj3 === obj2);
