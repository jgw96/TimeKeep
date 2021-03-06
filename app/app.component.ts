import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    styles: [
      `
        footer {
            position:absolute;
            width: 100%;
            bottom: 0px;
        }
        
        #running {
            text-align: center;
            margin-top: 5rem;
            font-size: 2.5em;
        }
        
        #time {
            text-align: center;
            font-size: 3em;
            color: red;
        }
        
        #lastTime {
            text-align: center;
        }
        
        #timeTotal {
            text-align: center;
        }
      `
    ]
})
export class AppComponent {
    
    public time: string;
    start: number;
    public timer: number;
    public running: string;
    public lastTime: string;
    times: Object[];
    
    constructor() {
        this.start = 0;
        this.time = "0";
        this.running = "Timer Stopped";
        this.lastTime = localStorage.getItem("lastTime");
        
        if (JSON.parse(localStorage.getItem("times")).length > 10) {
            localStorage.removeItem("times");
        } 

        if (localStorage.getItem("times") !== null) {
            this.times = JSON.parse(localStorage.getItem("times"));
        } 
        else {
            this.times = [];
        }
    }
    
    startTimer() {
        this.running = "Timer Running";
        
        new Notification("Timer Started", {
            body: `You have started the timer!`,
            icon: "calculator-128.png"
        });
        
        this.timer = setInterval((): void => {
            let timePassed = this.start++;
            this.time = timePassed.toString();
        }, 60000)
    }
    
    stopTimer() {
        clearInterval(this.timer);
        new Notification("Time Worked", {
            body: `You worked for ${this.time} minutes!`,
            icon: "calculator-128.png"
        });
        this.lastTime = `You worked for ${this.time} minutes on your last stretch!`;
        localStorage.setItem("lastTime", this.lastTime);
        this.times.push(this.time);
        this.running = "Timer Stopped";
        this.time = "0";
        this.start = 0;
        
        localStorage.setItem("times", JSON.stringify(this.times));
    }
    
 }
