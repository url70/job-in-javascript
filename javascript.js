const car = document.getElementById('car');
const topPosition = '200px';
const speed = 100;
car.style.right = '1%';
car.style.top = topPosition;

let firstTime = true;
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
  if(firstTime) {
    carObject.moveCar();
    firstTime = false;
  }
});

let stopped = false;
const stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', () => {
  stopped = true;
})

class Car {
  constructor(car, speed) {
    this.position = 0;
    this.speed = speed;
    this.stopped = false;
    this.car = car;
  }

  moveCar() {
    if (this.stopped) return;
    if (this.position > 100) return;
    this.car.style.right = this.position + '%';
    this.position++;
    setTimeout(() => this.moveCar(), this.speed);
  }
};

const carObject = new Car(car, 300);