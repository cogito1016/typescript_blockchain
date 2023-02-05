
interface Subject {
    registerObserver(o: Observer): void;
    removerObserver(o: Observer): void;
    notifyObserver(): void;
}

interface Observer {
    update(temp: number, humidity: number, pressure: number): void;
}

interface DisplayElement {
    display(): void;
}


class WeatherData implements Subject {
    observers: Observer[];
    temperature: number;
    humidity: number;
    pressure: number;

    constructor() {
        this.observers = [];
    }

    registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    removerObserver(o: Observer): void {
        const index = this.observers.indexOf(o);
        if (index < 0) {
            console.log("해당 옵저버가 없습니다.")
            return;
        }
        this.observers.splice(index, 1);
    }

    notifyObserver(): void {
        this.observers.forEach(observer => observer.update(this.temperature, this.humidity, this.pressure));
    }

    measurementsChanged(): void {
        this.notifyObserver();
    }

    setMesasurements(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
    temperature: number;
    humidity: number;
    weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temp: number, humidity: number, pressure: number): void {
        this.temperature = temp
        this.humidity = humidity;
        this.display();
    }

    display(): void {
        console.log(`온도 ${this.temperature} 습도 ${this.humidity}`);
    }
}

class HeatIndexDisplay implements Observer, DisplayElement {
    heatIndex: number;
    weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temp: number, humidity: number, pressure: number): void {
        this.heatIndex = temp + 1.1111;
        this.display();
    }

    display(): void {
        console.log(`히트다 히트 ${this.heatIndex}`)
    }
}

class WeatherStation {
    do(): void {
        const weatherData = new WeatherData();
        const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
        const heatIndexDisplay = new HeatIndexDisplay(weatherData);
        //other display

        weatherData.setMesasurements(80, 65, 30.4);
        weatherData.setMesasurements(72, 32, 21.9);
        weatherData.setMesasurements(12, 98, 35.1);

        weatherData.removerObserver(heatIndexDisplay);

        weatherData.setMesasurements(1, 2, 3.1);
    }
}

const weatherStation = new WeatherStation();
weatherStation.do();
