// interface Subject_1 {
//     registerObserver(o: Observer): void;
//     removeObserver(o: Observer): void;
//     notifyObserver(o: Observer): void;
// }

// interface Observer {
//     update(temp: number, humi: number): void;
// }

// interface Display {
//     display(): void;
// }

// class WeatherData_2 implements Subject_1 {
//     observes: Observer[];
//     temp: number;
//     humi: number;

//     constructor() {
//         this.observes = [];
//     }

//     registerObserver(o: Observer): void {
//         this.observes.push(o);
//     }

//     removeObserver(o: Observer): void {
//         const index = this.observes.indexOf(o);
//         if (index < 0) {
//             return;
//         }
//         this.observes.splice(index, 1);
//     }

//     notifyObserver(): void {
//         this.observes.forEach((observer) => observer.update(this.temp, this.humi))
//     }

//     measureData(temp: number, humi: number) {
//         this.temp = temp;
//         this.humi = humi;
//         this.notifyObserver();
//     }
// }

// class BasicDisplay implements Observer, Display {
//     temp: number;
//     humi: number;
//     weatherData: WeatherData_2;

//     constructor(weatherData: WeatherData_2) {
//         this.weatherData = weatherData;
//         this.weatherData.registerObserver(this);
//     }

//     update(temp: number, humidity: number): void {
//         this.temp = temp;
//         this.humi = humidity;
//         this.display();
//     }

//     display(): void {
//         console.log(`뿌린다요 ${this.temp} : ${this.humi}`);
//     }
// }


// class SpecialDisplay implements Observer, Display {
//     temp: number;
//     humi: number;
//     weatherData: WeatherData_2;

//     constructor(weatherData: WeatherData_2) {
//         this.weatherData = weatherData;
//         this.weatherData.registerObserver(this);
//     }

//     update(temp: number, humidity: number): void {
//         this.temp = temp;
//         this.humi = humidity;
//         this.display();
//     }

//     display(): void {
//         console.log(`나도요 ${this.temp} : ${this.humi}`);
//     }
// }

// const weatherData_2 = new WeatherData_2();
// const basicDisplay_1 = new BasicDisplay(weatherData_2);
// const specialDisplay = new SpecialDisplay(weatherData_2);

// weatherData_2.measureData(10, 20);

// weatherData_2.removeObserver(specialDisplay);

// weatherData_2.measureData(30, 40);
