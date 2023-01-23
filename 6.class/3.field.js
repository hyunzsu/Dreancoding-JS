/*
class Fruit {
  // name; // constructor에서 인자로 주고있으니 생략 가능
  // emoji; // constructor에서 인자로 주고있으니 생략 가능
  type = '과일'; // 클래스가 만들자마자 초기화
  constructor(name, emoji){
    this.name = name; 
    this.emoji = emoji;
  }
  display = () => { 
    console.log(`${this.name}: ${this.emoji}`);
  }
}

const apple = new Fruit('apple', '🍎')
apple.name = '오렌지' // name: '오렌지'로 바뀜
console.log(apple); // Fruit { type: '과일', name: '오렌지', emoji: '🍎' }
*/

// 접근제어자 - 캡슐화 , 내부상에서 필요한 데이터를 외부에서는 볼 수 없게 숨겨둠
// private(#), public(기본), protected
// # 붙이면 외부에서 클래스 안에 접근 불가능 - 클래스 내부에서만 사용 가능
class Fruit {
  #name; 
  #emoji;
  #type = '과일'; 
  constructor(name, emoji){
    this.#name = name; 
    this.#emoji = emoji;
  }
  #display = () => { 
    console.log(`${this.#name}: ${this.#emoji}`);
  }
}

const apple = new Fruit('apple', '🍎')
apple.#name = '오렌지' // #field는 외부에서 접근이 불가능함
console.log(apple);