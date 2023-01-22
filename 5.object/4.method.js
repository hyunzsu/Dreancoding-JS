const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`); // 객체안에서 자신의 이름을 접근할 때 this
  }
}

apple.display();