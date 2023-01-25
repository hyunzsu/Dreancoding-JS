const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1); // number
console.log(typeof num2); // object

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 === Number.MAX_VALUE) {  
}
if (Number.isNaN(num1)) {  
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2

// 반올림하여 문자열로 반환
const num4 = 1234.12;
console.log(num4.toFixed()); // 1234

console.log(num4.toString()); // 1234.12
console.log(num4.toLocaleString('ar-EG')); // 그 나라의 언어로 변환해줌

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); // 1234.1
console.log(num4.toPrecision(4)); // 1234
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}

// 자바스크립트에서 실수끼리 계산할 때 우리가 예상하지 못한 미묘한 차이가 발생! 방지하려면 ~ 
const num = 0.1 + 0.2 - 0.2; // 0.1을 예상하지만 놉
console.log(num);

function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num, 0.1)); // true, return original === expected; 일 경우 false
