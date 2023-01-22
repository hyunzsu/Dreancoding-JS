// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍎`); // 객체안에서 자신의 이름을 접근할 때 this
//   }
// }

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: 🍊`); // 객체안에서 자신의 이름을 접근할 때 this
//   }
// }

// 넘 귀찮음 생성자함수를 이용해보자
// 한번만 템플릿을 만들면 돼
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

console.log(apple);
console.log(orange);