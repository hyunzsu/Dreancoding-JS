// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // get
  get fullName(){
    return `${this.lastName} ${this.firstName}`
  }
  // set
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('지수', '현')
console.log(student.firstName); // 지수
// console.log(student.fullName()); // () 못생김 -> 프로퍼티 접근한 것처럼 하고싶음
console.log(student.fullName); // 현 지수, get 붙이면 함수호출하는 것처럼 호출하지 않고 속성에 접근하듯이 접근이 가능
student.fullName = '김철수'; // set 김철수, 할당한다면 set이 호출되면서 매개변수로 전달됨

