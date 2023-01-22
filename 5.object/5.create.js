/*
const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`); // 객체안에서 자신의 이름을 접근할 때 this
  }
}

const orange = {
  name: 'orange',
  display: function () {
    console.log(`${this.name}: 🍊`); // 객체안에서 자신의 이름을 접근할 때 this
  }
}
*/

// 생성자 함수
// 객체를 일일히 추가해주기 귀찮 -> 한번만 템플릿 만들면 됨
function Fruit(name, emoji) {
  this.name = name; // 객체 자기 자신을 가리킴
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  }
  // return this; // 생략 가능
}

const apple = new Fruit('apple', '🍎')
const orange = new Fruit('orange', '🍊')

console.log(apple); // Fruit { name: 'apple', emoji: '🍎', display: [Function (anonymous)] }
console.log(orange); // Fruit { name: 'orange', emoji: '🍊', display: [Function (anonymous)] }