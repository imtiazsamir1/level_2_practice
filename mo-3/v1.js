class Counter {
  constructor(count) {
    this.count = count;
  }

  add(amount) {
    this.count = this.count + amount;
  }
  print() {
    console.log(this.count);
  }
}

const counter1 = new Counter(0);

counter1.add(12);
counter1.print();
counter1.add(12);

const counter2 = new Counter(20);
counter2.add(2);
counter2.add(3);
counter2.print();

//incapsulation
