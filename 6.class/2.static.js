// static 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUITS = 4;
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji){
    this.name = name; 
    this.emoji = emoji;
  }
  
  // 클래스 레벨의 메서드 -> 클래스별로 공통적으로 사용할 수 있고, 만들어진 인스턴스에 참조할 필요 없다면
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit('banana', '🍌');
  }
  // 인스턴스 레벨의 메서드
  display = () => { // 함수는 constructor외로 빼줌
    console.log(`${this.name}: ${this.emoji}`);
  }
}

// console.log(Fruit.name); // Error, 클래스 자체에는 데이터가 채워지지 않은 템플릿이기 때문에 데이터가 없는 상태
// Fruit.display(); // Error

const banana = Fruit.makeRandomFruit();
console.log(banana); // Fruit { display: [Function: display], name: 'banana', emoji: '🍌' }
console.log(Fruit.MAX_FRUITS); // 4

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎')
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊')

console.log(apple); // Fruit { name: 'apple', emoji: '🍎', display: [Function (anonymous)] }
console.log(orange); // Fruit { name: 'orange', emoji: '🍊', display: [Function (anonymous)] }

/*
* 정리
인스턴스 레벨의 프로퍼티와 메서드는 만들어진 인스턴스를 통해 접근이 가능
클래스 레벨의 함수는 클래스 이름으로 접근
static을 붙이면 클래스레벨로 만들 수 있고, 함수 앞에 만들면 클래스 레벨의 메서드!
static을 속성앞에 붙이면? 인스턴스 레벨에서 접근이 불가능

static은 언제 붙이냐?
=> 각각 찍어낼 인스턴스마다 변경될 데이터가 아니라 클래스레벨에서 공통적으로 사용할 수 있는 속성과 함수에서 붙임

Ex) Math.pow(); // static -> Math라는 객체를 만들지 않아도 접근이 가능
*/
