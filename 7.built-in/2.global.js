// 오브젝트를 거치지 않고 자바스크립트 전역에서 바로 호출할 수 있는 속성
console.log(globalThis);
console.log(this); // 전역 객체
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)') // 2
console.log(isFinite(2)); // 유한하니? true
console.log(isFinite(Infinity)); // false

console.log(parseFloat('12.43')); // 문자열이지만 숫자로 변환해줌
console.log(parseInt('12.43')); // 실수를 정수로 변환해줌

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로문 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리해야 한다
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded); // https://%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9.com
 
// 다시 한글로
const decoded = decodeURI(encoded); 
console.log(decoded); // https://드림코딩.com

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part)); // %EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9.com