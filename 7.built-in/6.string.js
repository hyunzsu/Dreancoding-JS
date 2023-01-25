const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(typeof textObj); // object
console.log(typeof text); // string
console.log(text.length); // 12

// 배열의 인덱스로 호출하는 것과 함수로 호출하는 값 동일
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf('l')); // 2, 첫번째부터 찾음
console.log(text.lastIndexOf('l')); // 9, 마지막부터 찾음

// 문자열안에 ~문자가 포함되는지 안되는지
console.log(text.includes('tx')); // false
console.log(text.includes('h')); // false, 대소문자 구분함
console.log(text.includes('H')); // true

console.log(text.startsWith('H')); // true
console.log(text.endsWith('H')); // false

console.log(text.toUpperCase()); // HELLO WORLD!
console.log(text.toLowerCase()); // hello world!

console.log(text.substring(0, 2)); // He
console.log(text.slice(2)); // llo World!
console.log(text.slice(-2)); // d!

// 공백 제거
const space = '           space               ';
console.log(space.trim()); // space

// 스페이스별로 문자열 끊고 싶다면
const longText = 'Get to the point';
console.log(longText.split(' ')); // [ 'Get', 'to', 'the', 'point' ]
console.log(longText.split(' ', 2)); // [ 'Get', 'to' ]