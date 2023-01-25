// UTC 기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date('Jun 5, 2023'));
console.log(new Date('2023-12-17T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2023-12-17T03:24:00'));

const now = new Date();
// 이제 인스턴스 레벨의 함수 사용 가능
now.setFullYear(2023);
now.setMonth(0); // 0: 1 -> 무조건 0부터 시작
console.log(now.getFullYear()); // 2023
console.log(now.getDate()); // 0: 1
console.log(now.getDay()); // 0 일요일부터, 1...6: 토요일
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO 8601 형식
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));
